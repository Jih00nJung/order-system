package io.github.jih0on.ordersystem.shipping.repository;

import io.github.jih0on.ordersystem.shipping.entity.Shipping;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ShippingRepository extends JpaRepository<Shipping, Long> {
    Optional<Shipping> findByOrder_OrderId(Long orderId);
}
