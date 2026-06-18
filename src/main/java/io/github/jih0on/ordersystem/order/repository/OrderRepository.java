package io.github.jih0on.ordersystem.order.repository;

import io.github.jih0on.ordersystem.order.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {

}
