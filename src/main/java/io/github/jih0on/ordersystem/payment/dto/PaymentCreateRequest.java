package io.github.jih0on.ordersystem.payment.dto;

import lombok.Getter;

@Getter
public class PaymentCreateRequest {
    private Long orderId;
    private String paymentMethod;
    private String status;
}
