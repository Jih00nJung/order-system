package io.github.jih0on.ordersystem.order.dto;

import io.github.jih0on.ordersystem.order.entity.Order;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class OrderCreateResponse {
    private Long orderId;
    private int totalPrice;
    private String status;

    public static OrderCreateResponse from(Order order) {
        return OrderCreateResponse.builder()
                .orderId(order.getOrderId())
                .totalPrice(order.getTotalPrice())
                .status(order.getStatus().name())
                .build();
    }
}
