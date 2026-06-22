package io.github.jih0on.ordersystem.order.service;

import io.github.jih0on.ordersystem.member.entity.Member;
import io.github.jih0on.ordersystem.member.repository.MemberRepository;
import io.github.jih0on.ordersystem.order.OrderCreatedEvent;
import io.github.jih0on.ordersystem.order.dto.*;
import io.github.jih0on.ordersystem.order.entity.Order;
import io.github.jih0on.ordersystem.order.entity.OrderItem;
import io.github.jih0on.ordersystem.order.repository.OrderRepository;
import io.github.jih0on.ordersystem.payment.entity.Payment;
import io.github.jih0on.ordersystem.payment.repository.PaymentRepository;
import io.github.jih0on.ordersystem.product.entity.Product;
import io.github.jih0on.ordersystem.product.repository.ProductRepository;
import io.github.jih0on.ordersystem.shipping.entity.Shipping;
import io.github.jih0on.ordersystem.shipping.repository.ShippingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderService {

    private final ApplicationEventPublisher eventPublisher;

    private final OrderRepository orderRepository;
    private final MemberRepository memberRepository;
    private final ProductRepository productRepository;
    private final PaymentRepository paymentRepository;
    private final ShippingRepository shippingRepository;

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
            Product product = productRepository.findByProductId(itemReq.productId())
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
//        기존 서비스 호출 방식
//        paymentService.createPayment(order, request.paymentMethod());

//        이벤트 발행 방식
        eventPublisher.publishEvent(new OrderCreatedEvent(
                order, request.paymentMethod()));

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

    /**
     * 주문 내역 조회
     * memberId를 하드코딩으로 1번 사용자 설정해둠
     * 1. 주문 조회 (SELECT)
     * 2. 주문 상품 조회 (SELECT)
     * 3. 배송 조회 (SELECT)
     */
    @Transactional(readOnly = true)
    public List<OrderHistoryResponse> showHistory(OrderHistoryRequest request) {

        Member member = memberRepository.findById(1L)
                .orElseThrow(() -> new IllegalArgumentException("회원을 찾을 수 없습니다."));

        // 주문, 주문 상품 조회
        List<Long> orderIds = request.orders().stream()
                .map(req -> req.order().getOrderId())
                .toList();

        List<Order> orders = orderRepository.findOrderAndItemsById(orderIds);

        List<OrderHistoryResponse> responseList = new ArrayList<>();

        for (Order order : orders) {
            Payment payment = paymentRepository.findByOrder_OrderId(order.getOrderId())
                    .orElse(null);
            Shipping shipping = shippingRepository.findByOrder_OrderId(order.getOrderId())
                    .orElse(null);

            OrderHistoryResponse dto = OrderHistoryResponse.from(order, payment, shipping);
            responseList.add(dto);
        }
        return responseList;
    }
}
