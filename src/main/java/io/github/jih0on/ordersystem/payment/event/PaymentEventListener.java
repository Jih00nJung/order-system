package io.github.jih0on.ordersystem.payment.event;

import io.github.jih0on.ordersystem.order.OrderCreatedEvent;
import io.github.jih0on.ordersystem.payment.service.PaymentService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class PaymentEventListener {

    private final PaymentService paymentService;

    @EventListener
    public void handleOrderCreatedEvent(OrderCreatedEvent event) {
        paymentService.createPayment(event.getOrder(), event.getPaymentMethod());
    }

}