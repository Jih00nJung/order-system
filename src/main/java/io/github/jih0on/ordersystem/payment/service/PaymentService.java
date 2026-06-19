package io.github.jih0on.ordersystem.payment.service;

import io.github.jih0on.ordersystem.order.entity.Order;
import io.github.jih0on.ordersystem.payment.event.PaymentCompletedEvent;
import io.github.jih0on.ordersystem.payment.dto.PaymentCompleteResponse;
import io.github.jih0on.ordersystem.payment.dto.PaymentCreateResponse;
import io.github.jih0on.ordersystem.payment.entity.Payment;
import io.github.jih0on.ordersystem.payment.repository.PaymentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class PaymentService {

    private final PaymentRepository paymentRepository;
    private final ApplicationEventPublisher eventPublisher;

    /**
     * 기능: 결제 생성 <br>
     */
    @Transactional
    public PaymentCreateResponse createPayment(Order order, String paymentMethod) {
        Payment payment = Payment.builder()
                .order(order)
                .paymentMethod(Payment.PaymentMethod.valueOf(paymentMethod))
                .status(Payment.PaymentStatus.READY)
                .build();

        Payment savedPayment = paymentRepository.save(payment);

        return PaymentCreateResponse.from(savedPayment);
    }

    /**
     * 기능: 결제 완료 <br>
     * 1. 결제 완료 (UPDATE) <br>
     * 2. 배송 / 이력 생성 (INSERT) <br>
     */
    @Transactional
    public PaymentCompleteResponse completePayment(Long paymentId) {
        // 1. 결제 완료
        Payment payment = paymentRepository.findById(paymentId)
                .orElseThrow(() -> new IllegalArgumentException("결제 내역이 없습니다."));
        payment.complete();

        // 2. 결제 완료 이벤트 발행
        eventPublisher.publishEvent(new PaymentCompletedEvent(payment.getOrder()));

        return PaymentCompleteResponse.from(payment);
    }
}
