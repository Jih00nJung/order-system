package io.github.jih0on.ordersystem.order.controller;

import io.github.jih0on.ordersystem.order.dto.*;
import io.github.jih0on.ordersystem.order.service.OrderFacade;
import io.github.jih0on.ordersystem.order.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/order")
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;
    private final OrderFacade orderFacade;

    // 주문 생성
    @PostMapping("/")
    public ResponseEntity<OrderCreateResponse> createOrder(
            @RequestBody OrderCreateRequest request) {
        OrderCreateResponse orderId = orderFacade.createOrder(request);

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

    // 주문 내역 확인
    @GetMapping("/history")
    public List<OrderHistoryResponse> getOrderHistory(
            @RequestParam Long memberId) {

        return orderService.showHistory(memberId);
    }
}
