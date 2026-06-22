package io.github.jih0on.ordersystem.payment.service;

import io.github.jih0on.ordersystem.payment.dto.PaymentCompleteResponse;
import io.github.jih0on.ordersystem.payment.entity.Payment;
import io.github.jih0on.ordersystem.payment.repository.PaymentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.orm.ObjectOptimisticLockingFailureException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PaymentFacade {

    private final PaymentService paymentService;
    private final PaymentRepository paymentRepository;

    public PaymentCompleteResponse completePayment(Long paymentId) {
        try {
            return paymentService.completePayment(paymentId);
        } catch (ObjectOptimisticLockingFailureException e) {
            Payment payment = paymentRepository.findById(paymentId)
                    .orElseThrow();

            if (payment.getStatus() == Payment.PaymentStatus.PAID) {
                return PaymentCompleteResponse.from(payment);
            }

            throw e;
        }
    }
}
