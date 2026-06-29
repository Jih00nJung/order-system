package io.github.jih0on.ordersystem.order.service;

import io.github.jih0on.ordersystem.order.dto.OrderCreateRequest;
import io.github.jih0on.ordersystem.order.dto.OrderCreateResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.CannotAcquireLockException;
import org.springframework.orm.ObjectOptimisticLockingFailureException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class OrderFacade {

    private final OrderService orderService;

    public OrderCreateResponse createOrder(OrderCreateRequest request) {
        int errCnt = 0;
        int maxRetries = 50;

        while (true) {
            try {
                return orderService.createOrder(request);
            } catch (ObjectOptimisticLockingFailureException | CannotAcquireLockException e) {
                if (++errCnt > maxRetries) {
                    throw e;
                }
                try {
                    Thread.sleep(50);
                } catch (InterruptedException interruptedException) {
                    Thread.currentThread().interrupt();
                    throw new IllegalStateException("인터럽트가 발생했습니다.", interruptedException);
                }
            }
        }
    }
}
