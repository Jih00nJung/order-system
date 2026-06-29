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

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.ThreadLocalRandom;
import java.util.concurrent.atomic.AtomicInteger;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
public class OrderPessimisticRandomTest {

    @Autowired
    private OrderService orderService;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private MemberRepository memberRepository;

    private List<Product> testProducts = new ArrayList<>();
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

        // 3. 테스트용 상품 생성 (각 재고 1000개)
        for (int i = 0; i < 500; i++) {
            Product product = Product.builder()
                    .seller(testSeller)
                    .name("Order Pessimistic Test Product " + i)
                    .price(1000)
                    .stock(1000)
                    .description("Test description " + i)
                    .viewCnt(0)
                    .build();
            testProducts.add(productRepository.saveAndFlush(product));
        }
    }

    @Test
    void createOrderPessimisticRandomConcurrencyTest() throws InterruptedException {
        int threadCount = 10;
        int totalInitialStock = 500 * 1000;

        ExecutorService executorService = Executors.newFixedThreadPool(32);
        CountDownLatch latch = new CountDownLatch(threadCount);

        AtomicInteger successCount = new AtomicInteger();
        AtomicInteger failCount = new AtomicInteger();

        long startTime = System.currentTimeMillis();

        for (int i = 0; i < threadCount; i++) {
            executorService.submit(() -> {
                try {
                    // 상품 중 무작위로 하나 선택
                    int randomIndex = ThreadLocalRandom.current().nextInt(100);
                    Product randomProduct = testProducts.get(randomIndex);

                    OrderCreateRequest.OrderItemRequest itemReq =
                            new OrderCreateRequest.OrderItemRequest(randomProduct.getProductId(), 1);

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

        List<Long> productIds = testProducts.stream().map(Product::getProductId).toList();
        List<Product> products = productRepository.findAllById(productIds);
        int totalRemainingStock = products.stream().mapToInt(Product::getStock).sum();

        System.out.println("====== 비관적 락 분산(Low Contention) 테스트 결과 ======");
        System.out.println("요청 처리 개수: " + threadCount);
        System.out.println("성공 개수: " + successCount.get());
        System.out.println("실패 개수: " + failCount.get());
        System.out.println("실행 시간: " + (endTime - startTime) + "ms");
        System.out.println("TPS: " + (threadCount * 1000L) / (endTime - startTime) + "TPS");
        System.out.println("예상 총 잔여 재고: " + (totalInitialStock - successCount.get()) + ", 실제 총 잔여 재고: " + totalRemainingStock);

        assertEquals(totalInitialStock - successCount.get(), totalRemainingStock, "동시성 제어로 인해 성공한 주문 수만큼 총 재고가 정확히 차감되어야 합니다.");
    }
}
