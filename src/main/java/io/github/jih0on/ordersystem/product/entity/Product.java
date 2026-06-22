package io.github.jih0on.ordersystem.product.entity;

import io.github.jih0on.ordersystem.member.entity.Member;
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
@Table(name = "product")

public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "seller_id")
    private Member seller;

    private String name;
    private int price;
    private int stock;
    private String description;

    @Column(name = "view_cnt")
    private int viewCnt;

    @Version
    private int version;

    @CreatedDate
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    /**
     * 재고 증가 (주문 취소 등으로 인한 복원)
     */
    public void addStock(int quantity) {
        if (quantity <= 0) {
            throw new IllegalArgumentException("증가시킬 수량은 0보다 커야 합니다.");
        }
        this.stock += quantity;
    }

    /**
     * 재고 감소 (주문 상품에 적용) <br>
     */
    public void removeStock(int quantity) {
        if (quantity <= 0) {
            throw new IllegalArgumentException("차감할 수량은 0보다 커야 합니다.");
        }

        if (this.stock < quantity) {
            throw new IllegalArgumentException("상품의 재고가 부족합니다. (현재 재고: " + this.stock + ")");
        }

        this.stock -= quantity;
    }
}