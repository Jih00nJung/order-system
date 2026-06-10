import React from 'react';
import {useNavigate} from 'react-router-dom';
import SideNav from "../../components/SideNav";

const Shipments = () => {
    const navigate = useNavigate();
    return (
        <div className="flex h-screen w-full">
            <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
                <main className="flex-1 overflow-y-auto p-xl custom-scroll">
                    <div className="max-w-[1440px] mx-auto w-full">
                        <div className="mb-lg">
                            <h2 className="font-display-lg text-display-lg text-on-surface">배송 상세 정보</h2>
                            <p className="font-body-md text-body-md text-secondary mt-xs">고객님의 소중한 상품이 안전하게 배송되고
                                있습니다.</p>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg flex-1">
                            <div className="lg:col-span-2 flex flex-col gap-lg">
                                <section className="bg-surface border border-outline-variant rounded-xl p-lg shadow-sm">
                                    <div
                                        className="flex flex-col md:flex-row md:items-center justify-between gap-md border-b border-outline-variant pb-md mb-md">
                                        <div>
                                            <span
                                                className="inline-block px-sm py-xs bg-surface-container-high text-on-surface-variant font-label-caps text-label-caps rounded mb-sm">주문번호 ORD-20231027-001</span>
                                            <h3 className="font-headline-md text-headline-md text-on-surface">프리미엄 무선
                                                노이즈 캔슬링 헤드폰</h3>
                                        </div>
                                        <div className="text-left md:text-right">
                                            <p className="font-body-sm text-body-sm text-secondary mb-xs">결제 금액</p>
                                            <p className="font-title-sm text-title-sm text-primary font-bold">349,000원</p>
                                        </div>
                                    </div>
                                    <div className="py-md overflow-x-auto">
                                        <div className="min-w-[500px] flex items-center justify-between relative px-md">
                                            <div
                                                className="absolute top-1/2 left-[10%] right-[10%] h-1 bg-surface-container-highest -translate-y-1/2 z-0"></div>
                                            <div
                                                className="absolute top-1/2 left-[10%] w-[50%] h-1 bg-primary -translate-y-1/2 z-0 transition-all duration-500"></div>
                                            <div className="relative z-10 flex flex-col items-center gap-sm">
                                                <div
                                                    className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-sm">
                                                    <span
                                                        className="material-symbols-outlined text-sm">inventory_2</span>
                                                </div>
                                                <span
                                                    className="font-label-caps text-label-caps text-on-surface">배송 준비중</span>
                                            </div>
                                            <div className="relative z-10 flex flex-col items-center gap-sm">
                                                <div
                                                    className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-sm">
                                                    <span className="material-symbols-outlined text-sm">hail</span>
                                                </div>
                                                <span
                                                    className="font-label-caps text-label-caps text-on-surface">배송 시작</span>
                                            </div>
                                            <div className="relative z-10 flex flex-col items-center gap-sm">
                                                <div
                                                    className="w-12 h-12 rounded-full bg-primary-container text-on-primary-container border-4 border-surface flex items-center justify-center shadow-md animate-pulse">
                                                    <span className="material-symbols-outlined">local_shipping</span>
                                                </div>
                                                <span
                                                    className="font-label-caps text-label-caps text-primary font-bold">배송 중</span>
                                            </div>
                                            <div
                                                className="relative z-10 flex flex-col items-center gap-sm opacity-50 grayscale">
                                                <div
                                                    className="w-10 h-10 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center border border-outline-variant">
                                                    <span className="material-symbols-outlined text-sm">home</span>
                                                </div>
                                                <span
                                                    className="font-label-caps text-label-caps text-secondary">배송 완료</span>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section
                                    className="bg-surface border border-outline-variant rounded-xl p-lg shadow-sm flex-1">
                                    <h3 className="font-title-sm text-title-sm text-on-surface mb-lg flex items-center gap-sm">
                                        <span className="material-symbols-outlined text-secondary">history</span>
                                        배송 이력
                                    </h3>
                                    <div
                                        className="relative pl-sm border-l-2 border-surface-container-highest ml-sm flex flex-col gap-lg">
                                        <div className="relative pl-lg">
                                            <div
                                                className="absolute w-3 h-3 bg-primary rounded-full -left-[23px] top-1 border-4 border-surface shadow-sm"></div>
                                            <div
                                                className="flex flex-col sm:flex-row sm:items-baseline gap-xs sm:gap-md mb-xs">
                                                <span
                                                    className="font-label-caps text-label-caps text-primary bg-primary-fixed text-on-primary-fixed px-xs py-[2px] rounded">배송 중</span>
                                                <time
                                                    className="font-data-tabular text-data-tabular text-secondary">2023.10.29
                                                    14:00
                                                </time>
                                            </div>
                                            <p className="font-body-md text-body-md text-on-surface">고객님의 상품이 배송지에 도착할
                                                예정입니다.</p>
                                            <p className="font-body-sm text-body-sm text-secondary mt-xs flex items-center gap-xs">
                                                <span
                                                    className="material-symbols-outlined text-[16px]">person</span> 배송기사:
                                                홍길동
                                            </p>
                                        </div>
                                        <div className="relative pl-lg">
                                            <div
                                                className="absolute w-3 h-3 bg-outline-variant rounded-full -left-[23px] top-1 border-4 border-surface"></div>
                                            <div
                                                className="flex flex-col sm:flex-row sm:items-baseline gap-xs sm:gap-md mb-xs">
                                                <span
                                                    className="font-label-caps text-label-caps text-secondary bg-surface-container-high px-xs py-[2px] rounded">배송 중</span>
                                                <time
                                                    className="font-data-tabular text-data-tabular text-secondary">2023.10.28
                                                    20:00
                                                </time>
                                            </div>
                                            <p className="font-body-md text-body-md text-on-surface-variant">간선하차 -
                                                옥천Hub</p>
                                        </div>
                                        <div className="relative pl-lg">
                                            <div
                                                className="absolute w-3 h-3 bg-outline-variant rounded-full -left-[23px] top-1 border-4 border-surface"></div>
                                            <div
                                                className="flex flex-col sm:flex-row sm:items-baseline gap-xs sm:gap-md mb-xs">
                                                <span
                                                    className="font-label-caps text-label-caps text-secondary bg-surface-container-high px-xs py-[2px] rounded">배송 시작</span>
                                                <time
                                                    className="font-data-tabular text-data-tabular text-secondary">2023.10.28
                                                    10:00
                                                </time>
                                            </div>
                                            <p className="font-body-md text-body-md text-on-surface-variant">상품이
                                                출고되었습니다.</p>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div className="flex flex-col gap-lg">
                                <section className="bg-surface border border-outline-variant rounded-xl p-lg shadow-sm">
                                    <h3 className="font-title-sm text-title-sm text-on-surface mb-md flex items-center gap-sm border-b border-outline-variant pb-sm">
                                        <span
                                            className="material-symbols-outlined text-secondary">local_post_office</span>
                                        배송 정보
                                    </h3>
                                    <dl className="flex flex-col gap-md">
                                        <div>
                                            <dt className="font-body-sm text-body-sm text-secondary mb-xs">택배사</dt>
                                            <dd className="font-body-md text-body-md text-on-surface font-medium flex items-center justify-between">
                                                CJ대한통운
                                                <a className="text-primary font-label-caps text-label-caps hover:underline"
                                                   href="#">조회 사이트</a>
                                            </dd>
                                        </div>
                                        <div>
                                            <dt className="font-body-sm text-body-sm text-secondary mb-xs">송장번호</dt>
                                            <dd className="font-data-tabular text-data-tabular text-on-surface font-medium flex items-center gap-sm">
                                                1234567890
                                                <button className="text-secondary hover:text-primary transition-colors"
                                                        title="복사하기">
                                                    <span
                                                        className="material-symbols-outlined text-sm">content_copy</span>
                                                </button>
                                            </dd>
                                        </div>
                                        <div className="pt-sm border-t border-surface-container-highest">
                                            <dt className="font-body-sm text-body-sm text-secondary mb-xs">수령인</dt>
                                            <dd className="font-body-md text-body-md text-on-surface">김관리</dd>
                                        </div>
                                        <div>
                                            <dt className="font-body-sm text-body-sm text-secondary mb-xs">배송지 주소</dt>
                                            <dd className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                                                서울특별시 강남구 테헤란로 123<br/>
                                                스마트빌딩 4층 402호
                                            </dd>
                                        </div>
                                    </dl>
                                </section>
                                <section
                                    className="bg-surface border border-outline-variant rounded-xl overflow-hidden shadow-sm h-48 relative group cursor-pointer">
                                    <div className="absolute inset-0 bg-surface-container-high">
                                        <img alt="Map view"
                                             className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                             src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaziWu4u6cFzZY_rnjd3RlcK6Bq7tTrfL1UjX8p1moRUody1QnTMKUbLEGoJDwLKFlpl4I6iuLM55MQl5Ai0nttrqfTgJLtAhxDuk7REyVbhdODD7aGVjVzoMWX9xSfPLV5cS9KVsr_hiUPt8PsimMnmZorTLyArVBCO7e6dw3HbGVfXbWu8liTeVUEIoEWbKx4dXzPNgjq0kdJIvxkzyEBwbw-SrdNA5DwbuWjCy6UkY-vYZ970YHF72Xe05d3TD0F1IksVC_PYg"/>
                                    </div>
                                    <div
                                        className="absolute bottom-0 left-0 w-full p-md bg-gradient-to-t from-black/60 to-transparent">
                                        <p className="font-label-caps text-label-caps text-white flex items-center gap-xs">
                                            <span className="material-symbols-outlined text-sm">location_on</span>
                                            실시간 위치 확인 (Beta)
                                        </p>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div
                            className="mt-lg pt-lg border-t border-outline-variant flex flex-col sm:flex-row items-center justify-end gap-md">
                            <button
                                className="w-full sm:w-auto px-6 py-2.5 bg-white border border-outline-variant text-on-surface-variant font-title-sm text-title-sm rounded-lg hover:bg-surface-container-low hover:text-on-surface transition-colors shadow-sm active:scale-95 duration-150">
                                문의하기
                            </button>
                            <button
                                className="w-full sm:w-auto px-6 py-2.5 bg-primary text-white font-title-sm text-title-sm rounded-lg hover:bg-primary-fixed-variant transition-colors shadow-sm hover:shadow-md active:scale-95 duration-150"
                                onClick={() => navigate('/orders')}>
                                주문 내역으로 돌아가기
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
export default Shipments;