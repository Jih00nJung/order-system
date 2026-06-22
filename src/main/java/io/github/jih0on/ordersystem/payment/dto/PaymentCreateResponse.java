package io.github.jih0on.ordersystem.payment.dto;

import io.github.jih0on.ordersystem.payment.entity.Payment;
import lombok.Builder;

@Builder
public record PaymentCreateResponse(
        Long paymentId,
        String paymentMethod,
        String status
) {
    public static PaymentCreateResponse from(Payment payment) {
        return PaymentCreateResponse.builder()
                .paymentId(payment.getPaymentId())
                .paymentMethod(payment.getPaymentMethod().name())
                .status(payment.getStatus().name())
                .build();
    }
}
