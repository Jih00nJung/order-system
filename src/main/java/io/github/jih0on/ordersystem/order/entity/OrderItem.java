package io.github.jih0on.ordersystem.order.entity;

import io.github.jih0on.ordersystem.product.entity.Product;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EntityListeners(AuditingEntityListener.class)
@Table(name = "order_item")
public class OrderItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "orderitem_id")
    private Long orderItemId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id")
    private Product product;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "order_id")
    private Order order;

    private int cnt;

    @Column(name = "snapshot_price")
    private int price;

    @Enumerated(EnumType.STRING)
    private OrderItemStatus status;

    @Getter
    public enum OrderItemStatus {
        ORDERED("주문됨"),
        CANCELED("주문 취소");

        private final String description;

        OrderItemStatus(String description) {
            this.description = description;
        }

    }

    public void cancel() {
        this.status = OrderItemStatus.CANCELED;
        this.product.addStock(this.cnt);
    }


}
