package io.github.jih0on.ordersystem.order.dto;

import io.github.jih0on.ordersystem.order.entity.Order;
import lombok.Builder;

@Builder
public record OrderCancelResponse(
        Long orderId,
        int totalPrice,
        String status
) {
    public static OrderCancelResponse from(Order order) {
        return OrderCancelResponse.builder()
                .orderId(order.getOrderId())
                .totalPrice(order.getTotalPrice())
                .status(order.getStatus().name())
                .build();
    }
}
