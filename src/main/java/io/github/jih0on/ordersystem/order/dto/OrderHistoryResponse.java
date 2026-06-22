package io.github.jih0on.ordersystem.order.dto;

import io.github.jih0on.ordersystem.order.entity.Order;
import io.github.jih0on.ordersystem.payment.entity.Payment;
import io.github.jih0on.ordersystem.shipping.entity.Shipping;
import lombok.Builder;

import java.time.LocalDateTime;
import java.util.List;

@Builder
public record OrderHistoryResponse(
        // order
        Long orderId,
        int totalPrice,
        String orderStatus,         // status
        LocalDateTime orderDate,    // createdAt

        // order item
        List<OrderItemDto> items,

        // payment
        String paymentMethod,

        // shipping
        String shippingStatus       // status

) {
    public record OrderItemDto(
            Long productId,
            int quantity,           // cnt
            int price,              // snapshotPrice
            String itemStatus       // status
    ) {
    }

    public static OrderHistoryResponse from(Order order, Payment payment, Shipping shipping) {
        List<OrderItemDto> itemDtos = order.getOrderItems().stream()
                .map(item -> new OrderItemDto(
                        item.getProduct().getProductId(),
                        item.getCnt(),
                        item.getPrice(),
                        item.getStatus().name()
                ))
                .toList();

        String paymentMethodStr = (payment != null) ? payment.getPaymentMethod().name() : "결제 대기";

        String shippingStatusStr = "배송준비중";
        if (shipping != null && !shipping.getShippingHistory().isEmpty()) {
            int lastIndex = shipping.getShippingHistory().size() - 1;
            shippingStatusStr = shipping.getShippingHistory().get(lastIndex).getStatus().name();
        }


        return OrderHistoryResponse.builder()
                .orderId(order.getOrderId())
                .totalPrice(order.getTotalPrice())
                .orderStatus(order.getStatus().name())
                .orderDate(order.getCreatedAt())
                .items(itemDtos)
                .paymentMethod(paymentMethodStr)
                .shippingStatus(shippingStatusStr)
                .build();

    }
}
