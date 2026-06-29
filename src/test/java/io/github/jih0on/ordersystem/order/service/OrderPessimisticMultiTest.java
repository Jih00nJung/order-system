package io.github.jih0on.ordersystem.order.service;

import io.github.jih0on.ordersystem.member.entity.Member;
import io.github.jih0on.ordersystem.member.repository.MemberRepository;
import io.github.jih0on.ordersystem.order.dto.OrderCreateRequest;
import io.github.jih0on.ordersystem.product.entity.Product;
import io.github.jih0on.ordersystem.product.repository.ProductRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;
import java.util.UUID;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.atomic.AtomicInteger;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
public class OrderPessimisticMultiTest {

    @Autowired
    private OrderService orderService; // Facade 대신 Service 직접 주입

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private MemberRepository memberRepository;

    private Product testProduct;
    private Member testSeller;
    private Member testBuyer;

    @BeforeEach
    void setUp() {
        // 1. 판매자(Seller) 생성
        Member seller = Member.builder()
                .nickname("seller")
                .password("1234")
                .email(UUID.randomUUID().toString() + "@seller.com")
                .emailVerified(true)
                .build();
        testSeller = memberRepository.saveAndFlush(seller);

        // 2. 구매자(Buyer) 생성
        Member buyer = Member.builder()
                .nickname("buyer")
                .password("1234")
                .email(UUID.randomUUID().toString() + "@buyer.com")
                .emailVerified(true)
                .build();
        testBuyer = memberRepository.saveAndFlush(buyer);

        // 3. 테스트용 상품 생성 (재고 1000개)
        Product product = Product.builder()
                .seller(testSeller)
                .name("Order Pessimistic Lock Test Product")
                .price(1000)
                .stock(1000)
                .description("Test description")
                .viewCnt(0)
                .build();
        testProduct = productRepository.saveAndFlush(product);
    }

    @Test
    void createOrderPessimisticConcurrencyTest() throws InterruptedException {
        int threadCount = 1000;
        int initialStock = 1000;

        ExecutorService executorService = Executors.newFixedThreadPool(32);
        CountDownLatch latch = new CountDownLatch(threadCount);

        AtomicInteger successCount = new AtomicInteger();
        AtomicInteger failCount = new AtomicInteger();

        long startTime = System.currentTimeMillis();

        for (int i = 0; i < threadCount; i++) {
            executorService.submit(() -> {
                try {
                    OrderCreateRequest.OrderItemRequest itemReq =
                            new OrderCreateRequest.OrderItemRequest(testProduct.getProductId(), 1);

                    OrderCreateRequest request = new OrderCreateRequest(
                            testBuyer.getMemberId(),
                            1000,
                            "PAYMENT_PENDING",
                            "CREDIT",
                            List.of(itemReq)
                    );

                    // 비관적 락 로직이 포함된 Service 메서드 직접 호출 (재시도 필요 없음)
                    orderService.createOrderWithPessimisticLock(request);
                    successCount.incrementAndGet();
                } catch (Exception e) {
                    failCount.incrementAndGet();
                    System.err.println("주문 실패: " + e.getMessage());
                } finally {
                    latch.countDown();
                }
            });
        }

        latch.await();
        long endTime = System.currentTimeMillis();

        Product product = productRepository.findById(testProduct.getProductId()).orElseThrow();

        System.out.println("====== 비관적 락(Pessimistic Lock) 테스트 결과 ======");
        System.out.println("요청 처리 개수: " + threadCount);
        System.out.println("성공 개수: " + successCount.get());
        System.out.println("실패 개수: " + failCount.get());
        System.out.println("실행 시간: " + (endTime - startTime) + "ms");
        System.out.println("TPS: " + (threadCount * 1000L) / (endTime - startTime) + "TPS");
        System.out.println("예상 잔여 재고: " + (initialStock - successCount.get()) + ", 실제 잔여 재고: " + product.getStock());

        // 비관적 락에서는 재시도 횟수 제한 같은 로직 없이 대기하므로 1000개 모두 성공해야 함
        assertEquals(initialStock - successCount.get(), product.getStock(), "동시성 제어로 인해 성공한 주문 수만큼 재고가 정확히 차감되어야 합니다.");
    }
}
