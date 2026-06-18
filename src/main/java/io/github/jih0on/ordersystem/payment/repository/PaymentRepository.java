package io.github.jih0on.ordersystem.payment.repository;

import io.github.jih0on.ordersystem.payment.entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentRepository extends JpaRepository<Payment, Long> {
}
