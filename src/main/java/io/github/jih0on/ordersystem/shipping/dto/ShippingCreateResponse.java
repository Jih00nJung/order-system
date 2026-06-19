package io.github.jih0on.ordersystem.shipping.dto;

import io.github.jih0on.ordersystem.shipping.entity.Shipping;
import io.github.jih0on.ordersystem.shipping.entity.ShippingHistory;
import lombok.Builder;

@Builder
public record ShippingCreateResponse(
        Long shippingId,
        String status
) {
    public static ShippingCreateResponse from(Shipping shipping, ShippingHistory shippingHistory) {
        return ShippingCreateResponse.builder()
                .shippingId(shipping.getShippingId())
                .status(shippingHistory.getStatus().name())
                .build();
    }
}
