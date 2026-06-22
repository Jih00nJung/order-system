package io.github.jih0on.ordersystem.order.dto;

import io.github.jih0on.ordersystem.order.entity.Order;
import io.github.jih0on.ordersystem.product.entity.Product;

import java.util.List;

public record OrderHistoryRequest(
        Long memberId,
        List<historyRequest> orders
) {
    public record historyRequest(
            Order order,
            Product product,
            int cnt,
            int price,              // snapshot
            String itemStatus
    ) {
    }
}
