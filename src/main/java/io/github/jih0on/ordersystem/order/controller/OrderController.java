package io.github.jih0on.ordersystem.order.controller;

import io.github.jih0on.ordersystem.order.dto.OrderCancelResponse;
import io.github.jih0on.ordersystem.order.dto.OrderCreateRequest;
import io.github.jih0on.ordersystem.order.dto.OrderCreateResponse;
import io.github.jih0on.ordersystem.order.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/order")
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;

    // 주문 생성
    @PostMapping("/create")
    public ResponseEntity<OrderCreateResponse> createOrder(
            @RequestBody OrderCreateRequest request) {
        OrderCreateResponse orderId = orderService.createOrder(request);

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(orderId);
    }

    // 주문 취소
    @PatchMapping("/cancel/{orderId}")
    public ResponseEntity<OrderCancelResponse> cancelOrder(
            @PathVariable Long orderId) {

        OrderCancelResponse response = orderService.cancelOrder(orderId);
        return ResponseEntity.ok(response);
    }
}
