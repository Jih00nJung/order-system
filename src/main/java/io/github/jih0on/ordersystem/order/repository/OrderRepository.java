package io.github.jih0on.ordersystem.order.repository;

import io.github.jih0on.ordersystem.order.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {

    // 주문 조회
    // FETCH JOIN
    @Query("SELECT DISTINCT o FROM Order o JOIN FETCH o.orderItems WHERE o.orderId IN :orderIds")
    List<Order> findOrderAndItemsById(@Param("orderIds") List<Long> orderIds);
}
