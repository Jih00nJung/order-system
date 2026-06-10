import React from 'react';
import {useNavigate} from 'react-router-dom';

const PaymentSuccess = () => {
    const navigate = useNavigate();
    return (
        <main className="flex-1 bg-surface py-xl px-md sm:px-lg md:px-xl overflow-y-auto">
                <div className="max-w-3xl mx-auto bg-surface-container-lowest border border-outline-variant rounded-xl shadow-[0_4px_6px_-1px_rgb(0_0_0/0.1),0_2px_4px_-2px_rgb(0_0_0/0.1)] p-xl flex flex-col gap-xl">
                    <header className="flex flex-col items-center text-center gap-md">
                        <div className="w-24 h-24 rounded-full bg-secondary-container flex items-center justify-center mb-sm">
                            <span className="material-symbols-outlined text-[48px] text-primary-container">check_circle</span>
                        </div>
                        <h1 className="font-headline-md text-headline-md text-on-surface">결제가 완료되었습니다</h1>
                        <p className="font-body-md text-body-md text-on-surface-variant">고객님의 주문이 성공적으로 접수되었습니다.<br/>주문하신 상품은 빠르고 안전하게 배송해 드리겠습니다.</p>
                    </header>
                    <section className="bg-surface-container-low rounded-lg border border-outline-variant p-lg flex flex-col gap-md">
                        <h2 className="font-title-sm text-title-sm text-on-surface border-b border-outline-variant pb-sm">주문 요약</h2>
                        <div className="flex flex-col gap-sm font-data-tabular text-data-tabular">
                            <div className="flex justify-between items-center py-xs">
                                <span className="text-on-surface-variant">주문 번호</span>
                                <span className="text-on-surface font-semibold">ORD-20231102-9874</span>
                            </div>
                            <div className="flex justify-between items-center py-xs">
                                <span className="text-on-surface-variant">결제 일시</span>
                                <span className="text-on-surface">2023.11.02 14:32:05</span>
                            </div>
                            <div className="flex justify-between items-center py-xs">
                                <span className="text-on-surface-variant">결제 수단</span>
                                <span className="text-on-surface">신용카드 (현대) / 일시불</span>
                            </div>
                            <div className="flex justify-between items-center py-xs pt-sm border-t border-outline-variant mt-xs">
                                <span className="font-title-sm text-title-sm text-on-surface">총 결제 금액</span>
                                <span className="font-headline-md text-headline-md text-primary-container">145,000원</span>
                            </div>
                        </div>
                    </section>
                    <section className="flex flex-col gap-md">
                        <h2 className="font-title-sm text-title-sm text-on-surface">배송지 정보</h2>
                        <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md flex gap-md items-start">
                            <span className="material-symbols-outlined text-on-surface-variant mt-xs">local_shipping</span>
                            <div className="flex flex-col gap-xs font-body-sm text-body-sm text-on-surface">
                                <span className="font-title-sm text-title-sm text-on-surface">홍길동 <span className="font-body-sm text-on-surface-variant ml-sm">010-1234-5678</span></span>
                                <p className="text-on-surface-variant leading-relaxed">[06236] 서울특별시 강남구 테헤란로 123<br/>스마트오피스 빌딩 4층 402호</p>
                                <p className="text-on-surface-variant mt-xs bg-surface-container py-xs px-sm rounded"><span className="font-semibold text-on-surface">배송 메모:</span> 문 앞에 놓아주세요.</p>
                            </div>
                        </div>
                    </section>
                    <div className="flex flex-col sm:flex-row gap-md mt-sm">
                        <button className="flex-1 bg-surface-container-lowest border border-outline-variant text-secondary font-title-sm text-title-sm py-sm px-lg rounded-lg hover:bg-surface-container transition-all hover:shadow-[0_4px_6px_-1px_rgb(0_0_0/0.1)] flex items-center justify-center gap-xs" onClick={() => navigate('/store')}>
                            <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                            계속 쇼핑하기
                        </button>
                        <button className="flex-1 bg-primary-container text-on-primary font-title-sm text-title-sm py-sm px-lg rounded-lg hover:shadow-[0_4px_6px_-1px_rgb(0_0_0/0.1),0_2px_4px_-2px_rgb(0_0_0/0.1)] transition-all hover:opacity-90 flex items-center justify-center gap-xs" onClick={() => navigate('/mypage-orders')}>
                            <span className="material-symbols-outlined text-[18px]">receipt_long</span>
                            주문 내역 보기
                        </button>
                    </div>
                </div>
            </main>
    )
}
export default PaymentSuccess;