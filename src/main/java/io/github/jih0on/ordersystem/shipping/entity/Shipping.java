package io.github.jih0on.ordersystem.shipping.entity;


import io.github.jih0on.ordersystem.order.entity.Order;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EntityListeners(AuditingEntityListener.class)
@Table(name = "shipping", uniqueConstraints = {
        @UniqueConstraint(name = "uk_shipping_order_id", columnNames = "order_id")
})
public class Shipping {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long shippingId;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "order_id")
    private Order order;

    @CreatedDate
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @OneToMany(mappedBy = "shipping", cascade = CascadeType.ALL, orphanRemoval = true)
    @Builder.Default
    private List<ShippingHistory> shippingHistory = new ArrayList<>();

    public void addHistory(ShippingHistory history) {
        this.shippingHistory.add(history);
        if (history.getShipping() != this) {
            history.setShipping(this);
        }
    }

}
