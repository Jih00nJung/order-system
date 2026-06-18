package io.github.jih0on.ordersystem.product.service;

import lombok.RequiredArgsConstructor;
import org.springframework.orm.ObjectOptimisticLockingFailureException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class OptimisticLockStockFacade {

    private final ProductService productService;

    public void removeStock(Long productId, int quantity) throws InterruptedException {
        // 무한 루프를 돌면서 성공할 때까지 계속 재시도
        while (true) {
            try {
                // 1. 기존의 재고 감소 로직 호출
                productService.removeStock(productId, quantity);

                // 2. 에러가 안 터지고 여기까지 왔다면 성공! 루프 탈출
                break;
            } catch (ObjectOptimisticLockingFailureException e) {
                // 3. 에러가 터졌다면(충돌 발생), 50ms 정도 쉬었다가 다시 1번으로 돌아가서 재시도
                Thread.sleep(5);
            }
        }
    }
}
