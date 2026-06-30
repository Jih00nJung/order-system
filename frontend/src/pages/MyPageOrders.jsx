import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

const MyPageOrders = () => {
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // 회원 ID는 임시로 1로 고정하여 테스트합니다.
        fetch('/api/order/history?memberId=1')
            .then(res => res.json())
            .then(data => {
                setOrders(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch order history:", err);
                setLoading(false);
            });
    }, []);

    // 상태에 따른 색상/텍스트 변환 헬퍼 함수
    const getStatusStyle = (status) => {
        switch(status) {
            case 'PAID': return { bg: 'bg-primary/10', text: 'text-primary', label: '결제완료' };
            case 'PREPARING': return { bg: 'bg-[#fef08a]/50', text: 'text-[#854d0e]', label: '배송준비중' };
            case 'SHIPPING': return { bg: 'bg-secondary-container', text: 'text-on-secondary-container', label: '배송중' };
            case 'DELIVERED': return { bg: 'bg-surface-variant', text: 'text-on-surface-variant', label: '배송완료' };
            case 'CANCELED': return { bg: 'bg-error/10', text: 'text-error', label: '주문취소' };
            default: return { bg: 'bg-surface-variant', text: 'text-on-surface-variant', label: status || '상태없음' };
        }
    };

    return (
        <main className="flex-1 bg-surface py-xl px-md sm:px-lg md:px-xl overflow-y-auto">
            <div className="max-w-7xl mx-auto flex flex-col h-full">
                <div className="max-w-[1024px] mx-auto w-full">
                    {/* Header */}
                    <div className="mb-lg">
                        <h2 className="font-display-lg text-display-lg text-on-surface">주문 내역</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant mt-xs">최근 주문 내역을 확인할 수 있습니다.</p>
                    </div>
                    
                    {/* Status Filter Tabs */}
                    <div className="flex overflow-x-auto gap-md mb-lg pb-0 no-scrollbar border-b border-outline-variant/50">
                        <button className="px-sm py-sm font-title-sm text-title-sm text-primary border-b-2 border-primary whitespace-nowrap font-bold">전체 ({orders.length})</button>
                    </div>
                    
                    {/* Order List */}
                    <div className="space-y-xl">
                        {loading ? (
                            <div className="flex justify-center py-xl">
                                <p>주문 내역을 불러오는 중...</p>
                            </div>
                        ) : orders.length === 0 ? (
                            <div className="flex justify-center py-xl">
                                <p>주문 내역이 없습니다.</p>
                            </div>
                        ) : (
                            orders.map((orderGroup, idx) => (
                                <section key={idx}>
                                    <h3 className="font-title-sm text-title-sm text-on-surface mb-md flex items-center gap-xs">
                                        <span className="material-symbols-outlined text-on-surface-variant text-[20px]">calendar_today</span>
                                        {new Date(orderGroup.orderDate).toLocaleDateString()} 주문
                                    </h3>
                                    <div className="space-y-md">
                                        {/* Order Card */}
                                        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md flex flex-col md:flex-row gap-md hover:shadow-sm transition-shadow duration-200">
                                            <div className="w-full md:w-28 h-28 bg-surface-container rounded-lg overflow-hidden flex-shrink-0">
                                                <img alt="Product Image" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCukPkZ2sTy1DSQTRx53k41qUdDMpBz2cjhYET7HNKFl0KSOl2swIj9tJHb_e7UWSRwCjDEhms6_Bb6Sbhy4Kz88tyWswTep2gfJUUHB-Isj7eF__aqQZfjAE6GreIXnikm6f5qSFLtGsYNEXpzyUlQ-OXl63yIK0eMAeLc6Yi3U9IV6UE8uAhfsMkQ31W82mbiVCjNUpE1dBiLLeSqbyZPxlsGGn1rf8e7cN2d2ug5wrvNhjJFIetDKSyXFEeJo2VaxXaB7gZagtI"/>
                                            </div>
                                            <div className="flex-1 flex flex-col justify-between py-xs pr-md">
                                                <div>
                                                    <div className="flex justify-between items-center mb-sm">
                                                        <span className={`inline-flex items-center px-2 py-0.5 rounded-full ${getStatusStyle(orderGroup.orderStatus).bg} ${getStatusStyle(orderGroup.orderStatus).text} font-label-caps text-[11px] font-bold tracking-wide`}>
                                                            {getStatusStyle(orderGroup.orderStatus).label}
                                                        </span>
                                                        <span className="font-body-sm text-[13px] text-on-surface-variant">주문번호: {orderGroup.orderId}</span>
                                                    </div>
                                                    <h4 className="font-title-sm text-title-md text-on-surface font-bold leading-tight">
                                                        {orderGroup.items && orderGroup.items.length > 0 
                                                            ? `상품 ID: ${orderGroup.items[0].productId} ${orderGroup.items.length > 1 ? `외 ${orderGroup.items.length - 1}건` : ''}` 
                                                            : '주문 상품'}
                                                    </h4>
                                                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">결제 수단: {orderGroup.paymentMethod}</p>
                                                </div>
                                                <div className="font-data-tabular text-[15px] font-semibold text-on-surface mt-sm">{orderGroup.totalPrice?.toLocaleString()}원</div>
                                            </div>
                                            <div className="flex md:flex-col justify-center gap-xs border-t md:border-t-0 md:border-l border-outline-variant/50 pt-sm md:pt-0 md:pl-md mt-sm md:mt-0 w-full md:w-[120px] shrink-0">
                                                <button className="flex-1 md:flex-none w-full py-1.5 bg-surface-container-lowest border border-outline-variant text-on-surface-variant rounded-md font-body-sm text-[13px] hover:bg-surface-container-low transition-colors text-center" onClick={() => navigate('/shipments')}>배송조회</button>
                                                <button className="flex-1 md:flex-none w-full py-1.5 bg-[#0D47A1] text-white rounded-md font-body-sm text-[13px] font-medium hover:bg-blue-800 transition-colors text-center shadow-sm" onClick={() => navigate('/order-detail')}>상세보기</button>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
export default MyPageOrders;