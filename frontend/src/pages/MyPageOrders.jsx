import React from 'react';
import {useNavigate} from 'react-router-dom';

const MyPageOrders = () => {
    const navigate = useNavigate();
    return (
        <main className="flex-1 bg-surface py-xl px-md sm:px-lg md:px-xl overflow-y-auto">
            <div className="max-w-7xl mx-auto flex flex-col h-full">
                <div className="max-w-[1024px] mx-auto">
                    {/* Header */}
                    <div className="mb-lg">
                        <h2 className="font-display-lg text-display-lg text-on-surface">주문 내역</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant mt-xs">최근 6개월 동안의 주문 내역을 확인할 수 있습니다.</p>
                    </div>
                    {/* Status Filter Tabs */}
                    <div className="flex overflow-x-auto gap-md mb-lg pb-0 no-scrollbar border-b border-outline-variant/50">
                        <button className="px-sm py-sm font-title-sm text-title-sm text-primary border-b-2 border-primary whitespace-nowrap font-bold">전체 (12)</button>
                        <button className="px-sm py-sm font-body-md text-body-md text-on-surface-variant hover:text-on-surface whitespace-nowrap transition-colors">결제완료 (2)</button>
                        <button className="px-sm py-sm font-body-md text-body-md text-on-surface-variant hover:text-on-surface whitespace-nowrap transition-colors">배송중 (1)</button>
                        <button className="px-sm py-sm font-body-md text-body-md text-on-surface-variant hover:text-on-surface whitespace-nowrap transition-colors">배송완료 (8)</button>
                        <button className="px-sm py-sm font-body-md text-body-md text-on-surface-variant hover:text-on-surface whitespace-nowrap transition-colors">취소/반품 (1)</button>
                    </div>
                    {/* Order List */}
                    <div className="space-y-xl">
                        {/* Date Group 1 */}
                        <section>
                            <h3 className="font-title-sm text-title-sm text-on-surface mb-md flex items-center gap-xs">
                                <span className="material-symbols-outlined text-on-surface-variant text-[20px]">calendar_today</span>
                                2023.10.27 주문
                            </h3>
                            <div className="space-y-md">
                                {/* Order Card 1 */}
                                <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md flex flex-col md:flex-row gap-md hover:shadow-sm transition-shadow duration-200">
                                    <div className="w-full md:w-28 h-28 bg-surface-container rounded-lg overflow-hidden flex-shrink-0">
                                        <img alt="Product Image" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCukPkZ2sTy1DSQTRx53k41qUdDMpBz2cjhYET7HNKFl0KSOl2swIj9tJHb_e7UWSRwCjDEhms6_Bb6Sbhy4Kz88tyWswTep2gfJUUHB-Isj7eF__aqQZfjAE6GreIXnikm6f5qSFLtGsYNEXpzyUlQ-OXl63yIK0eMAeLc6Yi3U9IV6UE8uAhfsMkQ31W82mbiVCjNUpE1dBiLLeSqbyZPxlsGGn1rf8e7cN2d2ug5wrvNhjJFIetDKSyXFEeJo2VaxXaB7gZagtI"/>
                                    </div>
                                    <div className="flex-1 flex flex-col justify-between py-xs pr-md">
                                        <div>
                                            <div className="flex justify-between items-center mb-sm">
                                                <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-primary/10 text-primary font-label-caps text-[11px] font-bold tracking-wide">결제완료</span>
                                                <span className="font-body-sm text-[13px] text-on-surface-variant">주문번호: ORD-231027-001</span>
                                            </div>
                                            <h4 className="font-title-sm text-title-md text-on-surface font-bold leading-tight">프리미엄 무선 노이즈 캔슬링 헤드폰</h4>
                                            <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">옵션: 실버 / 1개</p>
                                        </div>
                                        <div className="font-data-tabular text-[15px] font-semibold text-on-surface mt-sm">349,000원</div>
                                    </div>
                                    <div className="flex md:flex-col justify-center gap-xs border-t md:border-t-0 md:border-l border-outline-variant/50 pt-sm md:pt-0 md:pl-md mt-sm md:mt-0 w-full md:w-[120px] shrink-0">
                                        <button className="flex-1 md:flex-none w-full py-1.5 bg-surface-container-lowest border border-outline-variant text-on-surface-variant rounded-md font-body-sm text-[13px] hover:bg-surface-container-low transition-colors text-center" onClick={() => navigate('/shipments')}>배송조회</button>
                                        <button className="flex-1 md:flex-none w-full py-1.5 bg-[#0D47A1] text-white rounded-md font-body-sm text-[13px] font-medium hover:bg-blue-800 transition-colors text-center shadow-sm" onClick={() => navigate('/order-detail')}>상세보기</button>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* Date Group 2 */}
                        <section>
                            <h3 className="font-title-sm text-title-sm text-on-surface mb-md flex items-center gap-xs">
                                <span className="material-symbols-outlined text-on-surface-variant text-[20px]">calendar_today</span>
                                2023.10.15 주문
                            </h3>
                            <div className="space-y-md">
                                {/* Order Card 2 */}
                                <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md flex flex-col md:flex-row gap-md hover:shadow-sm transition-shadow duration-200">
                                    <div className="w-full md:w-28 h-28 bg-surface-container rounded-lg overflow-hidden flex-shrink-0">
                                        <img alt="Product Image" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBElRe6agy74WDDNWYy65Kbc_mEF-dIfxJh0bK-Q2HA1P0br93qYTAgWbqOgxJ3QCo79pUYrkP6K94uOHnLwX1PLzbxgoVc2LjDnIpHlmBGgvf-a1SKBxLRwCXCcxjiThXlfAniT8ADtNLKBvR06WvHrso9AAKk3kiVAatKBx9Jee7n_Fu6qGX9AuHGShX3bkHPB6VrCEhsQm8AEECWdEEo7_3fVt40zdS-tPy7f5GE_PIZPt0Iw7yGvLPuIMjB6NDg7vS9_9nb0Fk"/>
                                    </div>
                                    <div className="flex-1 flex flex-col justify-between py-xs pr-md">
                                        <div>
                                            <div className="flex justify-between items-center mb-sm">
                                                <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-surface-variant text-on-surface-variant font-label-caps text-[11px] font-bold tracking-wide">배송완료</span>
                                                <span className="font-body-sm text-[13px] text-on-surface-variant">주문번호: ORD-231015-089</span>
                                            </div>
                                            <h4 className="font-title-sm text-title-md text-on-surface font-bold leading-tight">미러리스 카메라 바디 킷</h4>
                                            <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">옵션: 블랙 / 1개</p>
                                        </div>
                                        <div className="font-data-tabular text-[15px] font-semibold text-on-surface mt-sm">1,250,000원</div>
                                    </div>
                                    <div className="flex md:flex-col justify-center gap-xs border-t md:border-t-0 md:border-l border-outline-variant/50 pt-sm md:pt-0 md:pl-md mt-sm md:mt-0 w-full md:w-[120px] shrink-0">
                                        <button className="flex-1 md:flex-none w-full py-1.5 bg-surface-container-lowest border border-outline-variant text-on-surface-variant rounded-md font-body-sm text-[13px] hover:bg-surface-container-low transition-colors text-center">리뷰작성</button>
                                        <button className="flex-1 md:flex-none w-full py-1.5 bg-surface-container-lowest border border-outline-variant text-on-surface-variant rounded-md font-body-sm text-[13px] hover:bg-surface-container-low transition-colors text-center" onClick={() => navigate('/order-detail')}>상세보기</button>
                                    </div>
                                </div>
                                {/* Order Card 3 */}
                                <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md flex flex-col md:flex-row gap-md hover:shadow-sm transition-shadow duration-200">
                                    <div className="w-full md:w-28 h-28 bg-surface-container rounded-lg overflow-hidden flex-shrink-0">
                                        <img alt="Product Image" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvyt9yV7DkO8_37BY8P4OQfnjMMunu20LD6nb-Wv_Om10VYeN2Z_4AHZvy_P1FKi83oi0bthW2yIrumaEx-C7YtE1iTara4T5Aj4syd8KYqzXwR__tMd5Nny0Hc2xCX0K1zCEyrFlQ6wwMduGXEX6RlRdyJ33oM7ZbI2LHPGxSimZdJRzblr65LrGknr1AIKUJJx_Y4Tsv5k_-Jfu_9bQfqzJjfmtqISe-PgUBgO3hn1wrKmtKT5t16XYmfwoC-W2gXrQzs0MdCkQ"/>
                                    </div>
                                    <div className="flex-1 flex flex-col justify-between py-xs pr-md">
                                        <div>
                                            <div className="flex justify-between items-center mb-sm">
                                                <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-error/10 text-error font-label-caps text-[11px] font-bold tracking-wide">주문취소</span>
                                                <span className="font-body-sm text-[13px] text-on-surface-variant">주문번호: ORD-231015-090</span>
                                            </div>
                                            <h4 className="font-title-sm text-title-md text-on-surface font-bold leading-tight">경량 러닝화 프로</h4>
                                            <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">옵션: 270mm / 1개</p>
                                        </div>
                                        <div className="font-data-tabular text-[15px] font-semibold text-on-surface-variant mt-sm line-through">129,000원</div>
                                    </div>
                                    <div className="flex md:flex-col justify-end gap-xs border-t md:border-t-0 md:border-l border-outline-variant/50 pt-sm md:pt-0 md:pl-md mt-sm md:mt-0 w-full md:w-[120px] shrink-0">
                                        <button className="flex-1 md:flex-none w-full py-1.5 bg-surface-container-lowest border border-outline-variant text-on-surface-variant rounded-md font-body-sm text-[13px] hover:bg-surface-container-low transition-colors text-center" onClick={() => navigate('/order-detail')}>상세보기</button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    {/* Pagination */}
                    <div className="mt-xl flex justify-center items-center gap-xs">
                        <button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant text-on-surface-variant hover:bg-surface-container-high disabled:opacity-50 transition-colors" disabled>
                            <span className="material-symbols-outlined text-sm">chevron_left</span>
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded bg-[#0D47A1] text-white font-body-sm font-semibold shadow-sm transition-colors">1</button>
                        <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-surface-container-high text-on-surface-variant font-body-sm text-body-sm transition-colors">2</button>
                        <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-surface-container-high text-on-surface-variant font-body-sm text-body-sm transition-colors">3</button>
                        <button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant text-on-surface-variant hover:bg-surface-container-high transition-colors">
                            <span className="material-symbols-outlined text-sm">chevron_right</span>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default MyPageOrders;