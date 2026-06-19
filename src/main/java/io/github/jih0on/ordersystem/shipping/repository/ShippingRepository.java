package io.github.jih0on.ordersystem.shipping.repository;

import io.github.jih0on.ordersystem.shipping.entity.Shipping;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ShippingRepository extends JpaRepository<Shipping, Long> {

}
