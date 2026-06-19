package io.github.jih0on.ordersystem.payment.service;

import io.github.jih0on.ordersystem.member.entity.Member;
import io.github.jih0on.ordersystem.member.repository.MemberRepository;
import io.github.jih0on.ordersystem.order.entity.Order;
import io.github.jih0on.ordersystem.order.repository.OrderRepository;
import io.github.jih0on.ordersystem.payment.entity.Payment;
import io.github.jih0on.ordersystem.payment.repository.PaymentRepository;
import io.github.jih0on.ordersystem.shipping.entity.Shipping;
import io.github.jih0on.ordersystem.shipping.repository.ShippingRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.event.RecordApplicationEvents;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;
import java.util.UUID;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@Transactional // 테스트 종료 후 데이터 자동 롤백
@RecordApplicationEvents
public class PaymentServiceTest {

    @Autowired
    private PaymentService paymentService;

    @Autowired
    private MemberRepository memberRepository;

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private PaymentRepository paymentRepository;

    @Autowired
    private ShippingRepository shippingRepository;

    @Autowired
    private org.springframework.test.context.event.ApplicationEvents events;

    private Member testMember;
    private Order testOrder;
    private Payment testPayment;

    @AfterEach
    void tearDown() {
        // TestTransaction 으로 강제 커밋한 데이터를 정리하기 위해 삭제 작업도 커밋해야 합니다.
        // 먼저 삭제를 위해 트랜잭션을 시작합니다 (이미 활성화되어 있을 수도 있지만 확실히 하기 위해).
        if (!org.springframework.test.context.transaction.TestTransaction.isActive()) {
            org.springframework.test.context.transaction.TestTransaction.start();
        }

        // 전체 삭제(deleteAll) 대신, 테스트에서 생성한 데이터만 정확하게 삭제합니다.
        // Shipping은 Payment Complete 시점에 생성되었으므로, 해당 Order에 연결된 Shipping을 모두 찾아서 지웁니다.
        if (testOrder != null) {
            List<Shipping> shippings = shippingRepository.findAll();
            for (Shipping shipping : shippings) {
                if (shipping.getOrder().getOrderId().equals(testOrder.getOrderId())) {
                    shippingRepository.delete(shipping);
                }
            }
        }

        if (testPayment != null) paymentRepository.delete(testPayment);
        if (testOrder != null) orderRepository.delete(testOrder);
        if (testMember != null) memberRepository.delete(testMember);
        
        // 삭제 내역 커밋
        if (org.springframework.test.context.transaction.TestTransaction.isActive()) {
            org.springframework.test.context.transaction.TestTransaction.flagForCommit();
            org.springframework.test.context.transaction.TestTransaction.end();
        }
    }

    @Test
    @DisplayName("결제 완료 시 결제 상태가 변경되고, 배송 정보가 '준비중' 상태로 생성되어야 한다.")
    void completePayment_createsShippingSuccessfully() {
        // given
        // 1. 임의의 사용자 생성
        testMember = memberRepository.save(Member.builder()
                .nickname("tester")
                .password("1234")
                .email(UUID.randomUUID().toString() + "@test.com")
                .emailVerified(true)
                .build());

        // 2. 주문 생성
        testOrder = orderRepository.save(Order.builder()
                .member(testMember)
                .totalPrice(10000)
                .status(Order.OrderStatus.CREATED)
                .build());

        // 3. 결제 준비 상태의 데이터 생성
        testPayment = paymentRepository.save(Payment.builder()
                .order(testOrder)
                .paymentMethod(Payment.PaymentMethod.CREDIT)
                .status(Payment.PaymentStatus.READY)
                .build());

        // when
        // 4. 결제 완료 서비스 로직 호출
        paymentService.completePayment(testPayment.getPaymentId());

        // [중요] AFTER_COMMIT 이벤트 리스너를 강제로 동작시키기 위해 트랜잭션을 커밋하고 종료합니다.
        org.springframework.test.context.transaction.TestTransaction.flagForCommit();
        org.springframework.test.context.transaction.TestTransaction.end();

        // 지연 로딩(Lazy Loading) 검증을 위해 새로운 트랜잭션을 다시 시작합니다.
        org.springframework.test.context.transaction.TestTransaction.start();

        // then
        // 1) 결제 상태가 PAID(결제 완료)로 변경되었는지 검증
        Payment updatedPayment = paymentRepository.findById(testPayment.getPaymentId()).orElseThrow();
        assertThat(updatedPayment.getStatus()).isEqualTo(Payment.PaymentStatus.PAID);
        System.out.println("getStatus: " + updatedPayment.getStatus());

        // 2) 배송 엔티티가 정상적으로 1건 생성되었는지 검증
        List<Shipping> shippings = shippingRepository.findAll();
        long shippingCount = shippings.stream()
                .filter(s -> s.getOrder().getOrderId().equals(testOrder.getOrderId()))
                .count();
        assertThat(shippingCount).isEqualTo(1);
        
        Shipping createdShipping = shippings.stream()
                .filter(s -> s.getOrder().getOrderId().equals(testOrder.getOrderId()))
                .findFirst()
                .orElseThrow();
        System.out.println("ShippingID: " + createdShipping.getShippingId());
        
        // 3) 배송 이력(History)가 'PREPARING(배송 준비중)' 상태로 1건 저장되었는지 검증
        assertThat(createdShipping.getShippingHistory()).isNotEmpty();
        assertThat(createdShipping.getShippingHistory()).hasSize(1);
        assertThat(createdShipping.getShippingHistory().get(0).getStatus().name()).isEqualTo("PREPARING");
        System.out.println("getShippingHistory() status: " + createdShipping.getShippingHistory().get(0).getStatus().name());

        // 4) [이벤트 발생 검증] PaymentCompletedEvent 가 정상적으로 1번 발행되었는지 확인
        long eventCount = events.stream(io.github.jih0on.ordersystem.payment.event.PaymentCompletedEvent.class).count();
        assertThat(eventCount).isEqualTo(1);
        System.out.println("eventCount: " + eventCount);
    }
}
