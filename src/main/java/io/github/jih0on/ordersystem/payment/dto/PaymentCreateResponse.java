package io.github.jih0on.ordersystem.payment.dto;

import io.github.jih0on.ordersystem.payment.entity.Payment;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class PaymentCreateResponse {
    private Long paymentId;
    private String paymentMethod;
    private String status;

    public static PaymentCreateResponse from(Payment payment) {
        return PaymentCreateResponse.builder()
                .paymentId(payment.getPaymentId())
                .paymentMethod(payment.getPaymentMethod().name())
                .status(payment.getStatus().name())
                .build();
    }
}
