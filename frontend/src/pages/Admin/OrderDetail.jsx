import {useNavigate} from 'react-router-dom';

const OrderDetail = () => {
    const navigate = useNavigate();
    return (
        <main className="flex-1 overflow-y-auto p-md lg:p-xl custom-scroll">
            <div className="max-w-container-max mx-auto">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-md mb-xl">
                    <div>
                        <div className="flex items-center gap-sm mb-xs">
                            <button className="text-on-surface-variant hover:text-primary transition-colors flex items-center p-2 rounded-full hover:bg-surface-variant" onClick={() => navigate('/admin/orders')}>
                                <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                            </button>
                            <span className="font-label-caps text-label-caps px-sm py-xs rounded bg-surface-container-high text-on-surface-variant">B2C 일반 주문</span>
                        </div>
                        <h2 className="font-headline-md text-headline-md text-on-surface">주문 상세 정보</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant mt-xs">주문 번호: <span className="font-data-tabular">#ORD-20231027-0042</span> • 2023년 10월 27일 14:32</p>
                    </div>
                    <div className="flex items-center gap-sm">
                        <button className="font-title-sm text-title-sm px-md py-sm rounded-lg bg-surface-container-lowest border border-outline-variant text-on-surface-variant hover:bg-surface-container-low transition-all shadow-sm">인쇄</button>
                        <button className="font-title-sm text-title-sm px-md py-sm rounded-lg bg-primary-container text-on-primary-container hover:shadow-md transition-all">상태 변경</button>
                    </div>
                </div>

                <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg mb-lg shadow-sm">
                    <h3 className="font-title-sm text-title-sm text-on-surface mb-lg">주문 진행 상태</h3>
                    <div className="relative">
                        <div className="absolute top-[20px] left-0 w-full h-[2px] bg-surface-container-highest"></div>
                        <div className="absolute top-[20px] left-0 w-1/2 h-[2px] bg-primary transition-all duration-500"></div>
                        <div className="relative flex justify-between w-full overflow-x-auto hide-scrollbar">
                            <div className="flex flex-col items-center gap-sm min-w-[80px] z-10">
                                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary shadow-sm">
                                    <span className="material-symbols-outlined text-[20px]">receipt_long</span>
                                </div>
                                <span className="font-label-caps text-label-caps text-on-surface">주문 생성</span>
                                <span className="font-body-sm text-[11px] text-on-surface-variant">10/27 14:32</span>
                            </div>
                            <div className="flex flex-col items-center gap-sm min-w-[80px] z-10">
                                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary shadow-sm">
                                    <span className="material-symbols-outlined text-[20px]">credit_card</span>
                                </div>
                                <span className="font-label-caps text-label-caps text-on-surface">결제 완료</span>
                                <span className="font-body-sm text-[11px] text-on-surface-variant">10/27 14:35</span>
                            </div>
                            <div className="flex flex-col items-center gap-sm min-w-[80px] z-10">
                                <div className="w-10 h-10 rounded-full bg-surface-container-lowest border-2 border-primary flex items-center justify-center text-primary shadow-sm bg-white ring-4 ring-primary/10">
                                    <span className="material-symbols-outlined text-[20px]">inventory</span>
                                </div>
                                <span className="font-label-caps text-label-caps text-primary">배송 준비중</span>
                                <span className="font-body-sm text-[11px] text-primary-fixed-dim">진행중</span>
                            </div>
                            <div className="flex flex-col items-center gap-sm min-w-[80px] z-10">
                                <div className="w-10 h-10 rounded-full bg-surface-container-lowest border-2 border-surface-container-highest flex items-center justify-center text-outline">
                                    <span className="material-symbols-outlined text-[20px]">local_shipping</span>
                                </div>
                                <span className="font-label-caps text-label-caps text-outline">배송중</span>
                            </div>
                            <div className="flex flex-col items-center gap-sm min-w-[80px] z-10">
                                <div className="w-10 h-10 rounded-full bg-surface-container-lowest border-2 border-surface-container-highest flex items-center justify-center text-outline">
                                    <span className="material-symbols-outlined text-[20px]">check_circle</span>
                                </div>
                                <span className="font-label-caps text-label-caps text-outline">배송완료</span>
                            </div>
                            <div className="flex flex-col items-center gap-sm min-w-[80px] z-10">
                                <div className="w-10 h-10 rounded-full bg-surface-container-lowest border-2 border-surface-container-highest flex items-center justify-center text-outline">
                                    <span className="material-symbols-outlined text-[20px]">task_alt</span>
                                </div>
                                <span className="font-label-caps text-label-caps text-outline">구매확정</span>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg">
                    <div className="lg:col-span-8 flex flex-col gap-lg">
                        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm overflow-hidden flex flex-col">
                            <div className="p-lg border-b border-outline-variant flex justify-between items-center bg-surface-container-low/50">
                                <h3 className="font-title-sm text-title-sm text-on-surface">주문 상품</h3>
                                <span className="font-label-caps text-label-caps bg-secondary-fixed text-on-secondary-fixed px-sm py-xs rounded">총 2건</span>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left font-data-tabular text-data-tabular">
                                    <thead className="bg-surface-container-lowest border-b border-outline-variant text-on-surface-variant font-label-caps text-label-caps">
                                        <tr>
                                            <th className="px-lg py-sm font-medium">상품 정보</th>
                                            <th className="px-lg py-sm font-medium">수량</th>
                                            <th className="px-lg py-sm font-medium text-right">단가</th>
                                            <th className="px-lg py-sm font-medium text-right">총액</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-surface-variant">
                                        <tr className="hover:bg-surface-container-low transition-colors">
                                            <td className="px-lg py-md">
                                                <div className="flex items-center gap-md">
                                                    <div className="w-12 h-12 rounded bg-surface-container-highest border border-outline-variant overflow-hidden shrink-0">
                                                        <img alt="상품 이미지" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDfzZiJmWw6Zp10SIttOqfEWkpB8E4WZF2C70V-Vtdx51YCHtPgn0NKA10h2kAJeu2aAaDujMi4C6uPHxIVS7m2cCej300pT-BEJIOvj76bQYiS0p0guDiBK6R4qYU5GsOi-Xu2qh4mFIEgHd6J9_wjAHoZz_ET56Bn8Vm_NoMEGOi2oNjuZrWZPJsLYNqvnxvlqO7kU77QtEx_Hyda4yIq0dwXcDIu7F6MiSW1vwdU1Larxglqf-OjDTjGZ7zhsYnmmESf7LN4Wg"/>
                                                    </div>
                                                    <div>
                                                        <p className="font-body-md text-body-md font-medium text-on-surface">프리미엄 스마트 워치 X1</p>
                                                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">옵션: 화이트 / 스트랩: 메탈</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-lg py-md text-on-surface">1</td>
                                            <td className="px-lg py-md text-right text-on-surface">₩320,000</td>
                                            <td className="px-lg py-md text-right font-medium text-on-surface">₩320,000</td>
                                        </tr>
                                        <tr className="hover:bg-surface-container-low transition-colors">
                                            <td className="px-lg py-md">
                                                <div className="flex items-center gap-md">
                                                    <div className="w-12 h-12 rounded bg-surface-container-highest border border-outline-variant overflow-hidden shrink-0">
                                                        <img alt="상품 이미지" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYe3E9hJ3-QpT_zoZuvv6qnVizcMCSLwSaN8zI1fVwgH_RI70SKL_WJMKwxCPJVd0PYa7jZsguh3nJ1KvQr4rhiS1rFdCqqxhqUgZX-vX3xk8cZKS7pPl9WpOWemYziqLIBl3FBqZdqMspR5nEFNdImP-ItLonmDhM-oH_KrjYQLxOhp7xB4wYjvXgmzoE1b_MrhJMZ2nwEVLzXpBI0O5kWpxQKOh1JW2Emo0EkmgUJEq73AeNZRv4pKRkQQ5e4mG8ylHbVtwi-Gs"/>
                                                    </div>
                                                    <div>
                                                        <p className="font-body-md text-body-md font-medium text-on-surface">고속 무선 충전 패드</p>
                                                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">옵션: 블랙</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-lg py-md text-on-surface">2</td>
                                            <td className="px-lg py-md text-right text-on-surface">₩45,000</td>
                                            <td className="px-lg py-md text-right font-medium text-on-surface">₩90,000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="bg-surface-container border border-outline-variant rounded-xl p-md shadow-sm">
                            <div className="flex items-center gap-sm mb-sm text-tertiary">
                                <span className="material-symbols-outlined text-[18px]">code</span>
                                <h4 className="font-title-sm text-title-sm">개발자 노트: API 및 상태 전이 로직</h4>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                                <div className="bg-surface-container-highest rounded-lg p-sm border border-outline-variant/50">
                                    <p className="font-label-caps text-label-caps text-on-surface-variant mb-xs">엔드포인트 내역</p>
                                    <div className="font-data-tabular text-[12px] text-on-surface space-y-xs">
                                        <p><span className="text-primary font-medium">GET</span> /api/v1/orders/ORD-20231027-0042</p>
                                        <p><span className="text-tertiary-container font-medium">PATCH</span> /api/v1/orders/.../status</p>
                                        <p className="text-on-surface-variant">Response Time: 42ms</p>
                                    </div>
                                </div>
                                <div className="bg-surface-container-highest rounded-lg p-sm border border-outline-variant/50">
                                    <p className="font-label-caps text-label-caps text-on-surface-variant mb-xs">상태 전이 트리거</p>
                                    <div className="font-data-tabular text-[12px] text-on-surface space-y-xs">
                                        <p>Current: <code className="bg-surface-container-lowest px-1 rounded text-primary border border-outline-variant/30">PREPARING_SHIPMENT</code></p>
                                        <p>Next Available Event: <code className="bg-surface-container-lowest px-1 rounded text-on-surface border border-outline-variant/30">DISPATCH</code></p>
                                        <p className="text-on-surface-variant">Locking: Inventory reserved via WMS sync.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-4 flex flex-col gap-lg">
                        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-sm">
                            <h3 className="font-title-sm text-title-sm text-on-surface mb-md">결제 요약</h3>
                            <div className="space-y-sm font-data-tabular text-data-tabular text-on-surface-variant">
                                <div className="flex justify-between items-center">
                                    <span>상품 소계</span>
                                    <span>₩410,000</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span>배송비</span>
                                    <span>₩3,000</span>
                                </div>
                                <div className="flex justify-between items-center text-primary">
                                    <span>할인 (VIP 쿠폰)</span>
                                    <span>-₩10,000</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span>부가세 (VAT 10%)</span>
                                    <span>₩40,300</span>
                                </div>
                            </div>
                            <div className="mt-md pt-md border-t border-outline-variant flex justify-between items-end">
                                <span className="font-title-sm text-title-sm text-on-surface">총 결제 금액</span>
                                <span className="font-display-lg-mobile text-display-lg-mobile text-primary font-bold">₩443,300</span>
                            </div>
                            <div className="mt-md flex items-center justify-between bg-surface-container-low p-sm rounded border border-outline-variant/50">
                                <div className="flex items-center gap-sm">
                                    <span className="material-symbols-outlined text-on-surface-variant text-[18px]">credit_card</span>
                                    <span className="font-body-sm text-body-sm text-on-surface">신용카드 (현대 **42)</span>
                                </div>
                                <span className="font-label-caps text-label-caps text-on-surface bg-primary/10 text-primary px-2 py-1 rounded">일시불</span>
                            </div>
                        </div>
                        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-sm">
                            <div className="flex justify-between items-center mb-md">
                                <h3 className="font-title-sm text-title-sm text-on-surface">고객 정보</h3>
                                <button className="text-primary font-body-sm text-body-sm hover:underline">상세보기</button>
                            </div>
                            <div className="flex items-center gap-md mb-md">
                                <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-title-sm text-title-sm font-bold">김</div>
                                <div>
                                    <p className="font-body-md text-body-md font-medium text-on-surface">김철수 (VIP)</p>
                                    <p className="font-body-sm text-body-sm text-on-surface-variant">가입일: 2021.05.12</p>
                                </div>
                            </div>
                            <div className="space-y-sm font-body-sm text-body-sm text-on-surface">
                                <div className="flex items-center gap-sm">
                                    <span className="material-symbols-outlined text-[16px] text-on-surface-variant">mail</span>
                                    chulsoo.kim@example.com
                                </div>
                                <div className="flex items-center gap-sm">
                                    <span className="material-symbols-outlined text-[16px] text-on-surface-variant">call</span>
                                    010-1234-5678
                                </div>
                            </div>
                        </div>
                        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-sm">
                            <div className="flex justify-between items-center mb-md">
                                <h3 className="font-title-sm text-title-sm text-on-surface">배송 정보</h3>
                                <button className="text-on-surface-variant hover:text-primary transition-colors">
                                    <span className="material-symbols-outlined text-[18px]">edit</span>
                                </button>
                            </div>
                            <div className="space-y-md font-body-sm text-body-sm text-on-surface">
                                <div>
                                    <p className="font-medium mb-xs">수령인</p>
                                    <p>김철수 (본인)</p>
                                </div>
                                <div>
                                    <p className="font-medium mb-xs">배송지 주소</p>
                                    <p className="text-on-surface-variant leading-relaxed">
                                        [06236]<br />
                                        서울특별시 강남구 테헤란로 123<br />
                                        프라임 타워 15층
                                    </p>
                                </div>
                                <div>
                                    <p className="font-medium mb-xs">배송 메모</p>
                                    <p className="bg-surface-container p-sm rounded border border-outline-variant/30 text-on-surface-variant italic">
                                        "도착 전 연락 바랍니다. 부재 시 경비실에 맡겨주세요."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default OrderDetail;