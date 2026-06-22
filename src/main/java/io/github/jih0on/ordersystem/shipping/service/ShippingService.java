package io.github.jih0on.ordersystem.shipping.service;

import io.github.jih0on.ordersystem.order.entity.Order;
import io.github.jih0on.ordersystem.order.repository.OrderRepository;
import io.github.jih0on.ordersystem.shipping.dto.ShippingCreateResponse;
import io.github.jih0on.ordersystem.shipping.entity.Shipping;
import io.github.jih0on.ordersystem.shipping.entity.ShippingHistory;
import io.github.jih0on.ordersystem.shipping.repository.ShippingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class ShippingService {

    private final ShippingRepository shippingRepository;
    private final OrderRepository orderRepository;

    /**
     * 배송 생성
     */
    @Transactional
    public ShippingCreateResponse createShipping(Long orderId) {
        return shippingRepository.findByOrder_OrderId(orderId)
                .map(this::toExistingShipping)
                .orElseGet(() -> createNewShipping(orderId));
    }

    private ShippingCreateResponse toExistingShipping(Shipping shipping) {
        ShippingHistory latestHistory = shipping.getShippingHistory()
                .get(shipping.getShippingHistory().size() - 1);

        return ShippingCreateResponse.from(shipping, latestHistory);
    }

    public ShippingCreateResponse createNewShipping(Long orderId) {

        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new IllegalArgumentException("주문을 찾을 수 없습니다."));

        // 주문 상태: 배송 준비중으로 변경
        order.preparing();

        // 배송 생성
        Shipping shipping = Shipping.builder()
                .order(order)
                .build();

        // 배송 이력 생성
        ShippingHistory shippingHistory = ShippingHistory.builder()
                .shipping(shipping)
                .status(ShippingHistory.ShippingStatus.PREPARING)
                .build();

        shipping.addHistory(shippingHistory);
        shippingRepository.save(shipping);

        return ShippingCreateResponse.from(shipping, shippingHistory);
    }
}
