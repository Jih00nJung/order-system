package io.github.jih0on.ordersystem.payment.dto;

public record PaymentCreateRequest(
        Long orderId,
        String paymentMethod,
        String status
) {
}
