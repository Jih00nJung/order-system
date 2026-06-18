package io.github.jih0on.ordersystem.payment.dto;

import io.github.jih0on.ordersystem.payment.entity.Payment;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class PaymentCompleteResponse {
    private Long orderId;
    private String paymentMethod;
    private String status;

    public static PaymentCompleteResponse from(Payment payment) {
        return PaymentCompleteResponse.builder()
                .orderId(payment.getOrder().getOrderId())
                .paymentMethod(payment.getPaymentMethod().name())
                .status(payment.getStatus().name())
                .build();
    }
}
