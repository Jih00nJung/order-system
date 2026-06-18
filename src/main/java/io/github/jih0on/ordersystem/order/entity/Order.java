package io.github.jih0on.ordersystem.order.entity;

import io.github.jih0on.ordersystem.member.entity.Member;
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
@Table(name = "purchase_order")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    private int totalPrice;

    @Enumerated(EnumType.STRING)
    private OrderStatus status;

    @CreatedDate
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true)
    @Builder.Default
    private List<OrderItem> orderItems = new ArrayList<>();

    @Getter
    public enum OrderStatus {
        CREATED("주문 생성"),
        PAID("결제 완료"),
        PREPARING("배송 준비중"),
        SHIPPING("배송 중"),
        DELIVERED("배송 완료"),
        CONFIRMED("구매 확정"),
        CANCELED("주문 취소");

        private final String description;

        OrderStatus(String description) {
            this.description = description;
        }
    }


    /**
     * 주문 취소
     */
    public void cancel(Member member) {
        if (!this.member.getMemberId().equals(member.getMemberId())) {
            throw new IllegalStateException("해당 주문과 다른 사용자입니다.");
        }

        if (this.status.equals(OrderStatus.SHIPPING) || this.status.equals(OrderStatus.DELIVERED)) {
            throw new IllegalStateException("이미 배송된 주문은 취소할 수 없습니다.");
        }
        if (this.status.equals(OrderStatus.CANCELED)) {
            throw new IllegalStateException("이미 취소된 주문입니다.");
        }

        this.status = OrderStatus.CANCELED;
    }


}
