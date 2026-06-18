package io.github.jih0on.ordersystem.order.service;

import io.github.jih0on.ordersystem.member.entity.Member;
import io.github.jih0on.ordersystem.member.repository.MemberRepository;
import io.github.jih0on.ordersystem.order.dto.OrderCancelResponse;
import io.github.jih0on.ordersystem.order.dto.OrderCreateRequest;
import io.github.jih0on.ordersystem.order.dto.OrderCreateResponse;
import io.github.jih0on.ordersystem.order.entity.Order;
import io.github.jih0on.ordersystem.order.entity.OrderItem;
import io.github.jih0on.ordersystem.order.repository.OrderRepository;
import io.github.jih0on.ordersystem.payment.service.PaymentService;
import io.github.jih0on.ordersystem.product.entity.Product;
import io.github.jih0on.ordersystem.product.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;
    private final MemberRepository memberRepository;
    private final ProductRepository productRepository;
    private final PaymentService paymentService;

    /**
     * 기능: 주문 생성 <br>
     * memberId를 하드코딩으로 1번 사용자 설정해둠
     * 나중에 JWT 설정할 때 변경할 것 <br>
     * 1. 주문 생성 (INSERT) <br>
     * 2. 주문 상품 생성 (INSERT) <br>
     * 3. 재고 감소 (UPDATE) <br>
     * 4. 결제 생성 (INSERT) - 결제 대기 상태
     */
    @Transactional
    public OrderCreateResponse createOrder(OrderCreateRequest request) {
        int totalPrice = 0;

        Member member = memberRepository.findById(1L)
                .orElseThrow(() -> new IllegalArgumentException("회원정보를 찾을 수 없습니다."));

        // 1. 주문 생성
        Order order = Order.builder()
                .member(member)
                .status(Order.OrderStatus.CREATED)
                .build();

        if (request.items() == null || request.items().isEmpty()) {
            throw new IllegalArgumentException("주문할 상품이 없습니다.");
        }

        // 2. 주문 상품 생성 (INSERT)
        for (OrderCreateRequest.OrderItemRequest itemReq : request.items()) {
            Product product = productRepository.findById(itemReq.productId())
                    .orElseThrow(() -> new IllegalArgumentException("해당 상품이 존재하지 않습니다."));

            OrderItem orderItem = OrderItem.builder()
                    .product(product)
                    .order(order)
                    .cnt(itemReq.cnt())
                    .price(product.getPrice())
                    .status(OrderItem.OrderItemStatus.ORDERED)
                    .build();

            order.getOrderItems().add(orderItem);

            // 3. 재고 감소 (UPDATE)
            product.removeStock(itemReq.cnt());

            totalPrice += (product.getPrice() * itemReq.cnt());
        }
        order.setTotalPrice(totalPrice);
        orderRepository.save(order);

        // 4. 결제 생성
        paymentService.createPayment(order, request.paymentMethod());

        return OrderCreateResponse.from(order);
    }

    /**
     * 기능: 주문 취소 <br>
     * memberId를 하드코딩으로 1번 사용자 설정해둠
     * 나중에 JWT 설정할 때 변경할 것
     */
    @Transactional
    public OrderCancelResponse cancelOrder(Long orderId) {
        Member member = memberRepository.findById(1L)
                .orElseThrow();

        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new IllegalArgumentException("해당 주문을 찾을 수 없습니다."));

        order.cancel(member);
        for (OrderItem orderItem : order.getOrderItems()) {
            orderItem.cancel();
        }

        return OrderCancelResponse.from(order);
    }
}
