package io.github.jih0on.ordersystem.order.dto;

import lombok.Getter;

import java.util.List;

@Getter
public class OrderCreateRequest {
    private Long memberId;
    private int totalPrice;
    private String status;
    private String paymentMethod;

    private List<OrderItemRequest> items;

    @Getter
    public static class OrderItemRequest {
        private Long productId;
        private int cnt;
    }
}
