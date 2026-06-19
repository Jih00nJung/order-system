package io.github.jih0on.ordersystem.order.dto;

import java.util.List;

public record OrderCreateRequest(
        Long memberId,
        int totalPrice,
        String status,
        String paymentMethod,
        List<OrderItemRequest> items
) {
    public record OrderItemRequest(
            Long productId,
            int cnt
    ) {
    }
}
