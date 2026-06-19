package io.github.jih0on.ordersystem.product.service;

import io.github.jih0on.ordersystem.member.entity.Member;
import io.github.jih0on.ordersystem.member.repository.MemberRepository;
import io.github.jih0on.ordersystem.product.entity.Product;
import io.github.jih0on.ordersystem.product.repository.ProductRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.concurrent.CountDownLatch;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
public class ProductServiceTest {

    @Autowired
    private ProductService productService;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private MemberRepository memberRepository;

    private Product testProduct;
    private Member testSeller;

    @BeforeEach
    void setUp() {
        String uniqueEmail = java.util.UUID.randomUUID().toString() + "@test.com";
        Member seller = Member.builder()
                .nickname("test")
                .password("1234")
                .email(uniqueEmail)
                .emailVerified(true)
                .build();
        testSeller = memberRepository.saveAndFlush(seller);

        Product product = Product.builder()
                .seller(testSeller)
                .name("Test Product")
                .price(1000)
                .stock(9999)
                .description("Test description")
                .viewCnt(0)
                .build();
        testProduct = productRepository.saveAndFlush(product);
    }

    @AfterEach
    void tearDown() {
        productRepository.deleteById(testProduct.getProductId());
        memberRepository.deleteById(testSeller.getMemberId());
    }

    @Test
    void removeStockConcurrencyTest() throws InterruptedException {
        int threadCount = 10000;
        ExecutorService executorService = Executors.newFixedThreadPool(16);
        // 16: 247, 32: 241, 64: 243, 96: 246
        CountDownLatch latch = new CountDownLatch(threadCount);

        long startTime = System.currentTimeMillis();

        for (int i = 0; i < threadCount; i++) {
            executorService.submit(() -> {
                try {
                    productService.removeStock(testProduct.getProductId(), 1);
                } finally {
                    latch.countDown();
                }
            });
        }

        latch.await();
        long endTime = System.currentTimeMillis();
        Product product = productRepository.findById(testProduct.getProductId()).orElseThrow();

        System.out.println("요청 처리 개수: " + threadCount);
        System.out.println("실행 시간: " + (endTime - startTime) + "ms");
        System.out.println("요청 처리 개수: " + (threadCount * 1000L) / (endTime - startTime) + "TPS");
        System.out.println("예상 잔여 재고: 0, 실제 잔여 재고: " + product.getStock());

        assertEquals(0, product.getStock(), "재고가 0이 되어야 합니다.");
    }
}
