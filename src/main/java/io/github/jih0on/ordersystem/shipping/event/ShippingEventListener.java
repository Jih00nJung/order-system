package io.github.jih0on.ordersystem.shipping.event;

import io.github.jih0on.ordersystem.payment.event.PaymentCompletedEvent;
import io.github.jih0on.ordersystem.shipping.service.ShippingService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.transaction.event.TransactionPhase;
import org.springframework.transaction.event.TransactionalEventListener;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

@Component
@RequiredArgsConstructor
public class ShippingEventListener {

    private final ShippingService shippingService;

    @TransactionalEventListener(phase = TransactionPhase.AFTER_COMMIT)
    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public void handlePaymentCompleted(PaymentCompletedEvent event) {
        shippingService.createShipping(event.orderId());
    }
}