package io.github.jih0on.ordersystem.shipping.entity;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EntityListeners(AuditingEntityListener.class)
@Table(name = "shipping_history")
public class ShippingHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "shipping_history_id")
    private Long shippingHistoryId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "shipping_id")
    private Shipping shipping;

    @Enumerated(EnumType.STRING)
    private ShippingStatus status;

    @CreatedDate
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @Getter
    public enum ShippingStatus {
        PREPARING("배송준비중"),
        SHIPPING("배송중"),
        DELIVERED("배송 완료");

        private final String description;

        ShippingStatus(String description) {
            this.description = description;
        }

    }
}
