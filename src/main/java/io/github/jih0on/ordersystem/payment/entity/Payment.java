package io.github.jih0on.ordersystem.payment.entity;

import io.github.jih0on.ordersystem.order.entity.Order;
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
@Table(name = "payment")
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long paymentId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "order_id")
    private Order order;

    @Enumerated(EnumType.STRING)
    private PaymentMethod paymentMethod;

    @Enumerated(EnumType.STRING)
    private PaymentStatus status;

    @CreatedDate
    @Column(name = "payment_at", updatable = false)
    private LocalDateTime paymentAt;

    @Getter
    public enum PaymentMethod {
        CREDIT("신용카드"),
        ACCOUNT("계좌 결제"),
        POINT("포인트 결제");

        private final String description;

        PaymentMethod(String description) {
            this.description = description;
        }
    }

    @Getter
    public enum PaymentStatus {
        READY("결제 대기"),
        PAID("결제 완료"),
        CANCELED("결제 취소");

        private final String description;

        PaymentStatus(String description) {
            this.description = description;
        }
    }

    /**
     * 결제 완료
     */
    public void complete() {
        if (this.status == PaymentStatus.PAID) {
            throw new IllegalStateException("이미 결제되었습니다.");
        }
        this.status = PaymentStatus.PAID;
    }

}
