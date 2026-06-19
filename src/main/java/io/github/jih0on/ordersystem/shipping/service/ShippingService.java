package io.github.jih0on.ordersystem.shipping.service;

import io.github.jih0on.ordersystem.order.entity.Order;
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

    /**
     * 배송 생성
     */
    @Transactional
    public ShippingCreateResponse createShipping(Order order) {
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
