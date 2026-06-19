package io.github.jih0on.ordersystem.payment.event;

import io.github.jih0on.ordersystem.order.entity.Order;

public record PaymentCompletedEvent(Order order) {
}
