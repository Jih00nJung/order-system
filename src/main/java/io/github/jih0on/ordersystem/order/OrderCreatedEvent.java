package io.github.jih0on.ordersystem.order;

import io.github.jih0on.ordersystem.order.entity.Order;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class OrderCreatedEvent {
    private Order order;
    private String paymentMethod;
}
