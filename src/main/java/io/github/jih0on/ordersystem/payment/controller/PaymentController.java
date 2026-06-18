package io.github.jih0on.ordersystem.payment.controller;

import io.github.jih0on.ordersystem.payment.dto.PaymentCompleteResponse;
import io.github.jih0on.ordersystem.payment.dto.PaymentCreateRequest;
import io.github.jih0on.ordersystem.payment.dto.PaymentCreateResponse;
import io.github.jih0on.ordersystem.payment.service.PaymentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/payment")
@RequiredArgsConstructor
public class PaymentController {

    private final PaymentService paymentService;

    // 결제 완료
    @PatchMapping("/complete/{paymentId}")
    public ResponseEntity<PaymentCompleteResponse> cancelPayment(
            @PathVariable Long paymentId) {

        PaymentCompleteResponse response = paymentService.completePayment(paymentId);
        return ResponseEntity.ok(response);
    }

}
