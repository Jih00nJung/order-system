package io.github.jih0on.ordersystem.payment.controller;

import io.github.jih0on.ordersystem.payment.dto.PaymentCompleteResponse;
import io.github.jih0on.ordersystem.payment.service.PaymentFacade;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/payment")
@RequiredArgsConstructor
public class PaymentController {

    private final PaymentFacade paymentFacade;

    // 결제 완료
    @PatchMapping("/complete/{paymentId}")
    public ResponseEntity<PaymentCompleteResponse> cancelPayment(
            @PathVariable Long paymentId) {

        PaymentCompleteResponse response = paymentFacade.completePayment(paymentId);
        return ResponseEntity.ok(response);
    }

}
