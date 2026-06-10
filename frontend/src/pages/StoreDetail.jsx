import React from 'react';
import {useNavigate} from 'react-router-dom';

const StoreDetail = () => {
    const navigate = useNavigate();
    return (
        <main className="flex-1 bg-surface py-xl px-md sm:px-lg md:px-xl overflow-y-auto">
            <div className="max-w-7xl mx-auto flex flex-col h-full">
                {/* Breadcrumb */}
                <nav aria-label="Breadcrumb" className="flex text-on-surface-variant font-body-sm mb-lg">
                    <ol className="inline-flex items-center space-x-1 md:space-x-3">
                        <li className="inline-flex items-center">
                            <span className="hover:text-primary transition-colors cursor-pointer" onClick={() => navigate('/')}>Home</span>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <span className="material-symbols-outlined text-sm mx-1">chevron_right</span>
                                <span className="hover:text-primary transition-colors cursor-pointer">Electronics</span>
                            </div>
                        </li>
                        <li aria-current="page">
                            <div className="flex items-center">
                                <span className="material-symbols-outlined text-sm mx-1">chevron_right</span>
                                <span className="text-on-surface">Premium Wireless Headphones</span>
                            </div>
                        </li>
                    </ol>
                </nav>
                {/* Product Hero Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-xl mb-xl">
                    {/* Product Images */}
                    <div className="flex flex-col gap-md">
                        <div className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden aspect-square flex items-center justify-center relative shadow-sm">
                            <img alt="Premium Wireless Headphones" className="object-cover w-full h-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA26RT94C7E3VCFk29N862TxrZRpnlc1ZiITKAkv8ptZeT1__haGBlLolYiuvRoYCARKJ2419s7pKbpm5jzGxeGoZ8lBQDBgCKv7txNAul_N9MawEWCgTlvuoRtHLVFssYeKmOjiRL3A4tLKbljSSRxFgQE36AfyrPE1tL-mwEiuylAd5WTsaza1fqrWv_Snh7BXK6eT-CHTs28B8itLgFgQh-S7BnzDudr5X89w6f_XAssmQU6iUZyo8sbfBQ-mVFhH4TFb7oC2pI"/>
                        </div>
                        {/* Thumbnail Strip */}
                        <div className="flex gap-md overflow-x-auto pb-sm">
                            <button className="flex-shrink-0 w-24 h-24 border-2 border-primary rounded-md overflow-hidden focus:outline-none">
                                <img alt="Thumbnail 1" className="object-cover w-full h-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJAfMGnO70hIf_B5TrAHJWHiQcPAH4lwEGqc3QQet2gfM_enrit-IofjkWDslZhQWDAUt2bvP6TTnfmOSmYTMU3ki0PaMUD3UtVJheg-JnwYtbv8i2q7jxA499cj4cQzHTE_su171ZpNQSVHIxDeGVJ7YuCcpT1tJJGpSzkyDQ0Rn3NpcLGycWT9-Nc5BrUpaHt455GvLTMtfge4j3s0dz7Y5sSwXBavMGWaC8rd9F6cA2rBzgzNAdyHO9kHtHXyRcmoqFDiNSWwA"/>
                            </button>
                            <button className="flex-shrink-0 w-24 h-24 border border-outline-variant rounded-md overflow-hidden hover:border-primary transition-colors focus:outline-none">
                                <img alt="Thumbnail 2" className="object-cover w-full h-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY0vUKyv1Yvv-buWnN0d-M6Y8JGVhp_MheDDyVgfcgQABbAQpg11LCYlr2ic6TZ1EeCBylxU-fdSVBgJRIvfU_-5YRgDZHPu2l7tkv9jSSN0mnePCyQUJvJoF01WQeED08sydaRWcAs6lYeNN4PK0r9zwwDWKJ1-u7Ni713jlIpYiUZhndgOO9hOu7R3YLwZAHTGWY2NpXCQ6QYehdbMxxFn4h0jHwy4wlf1QSkBe_CeTs9GeGVtjLarxirkbDVz-rTiOf9CgMaFg"/>
                            </button>
                            <button className="flex-shrink-0 w-24 h-24 border border-outline-variant rounded-md overflow-hidden hover:border-primary transition-colors focus:outline-none">
                                <img alt="Thumbnail 3" className="object-cover w-full h-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiqyMZPCD27rZu3qSp2HECRC7B-KGjZdOunOVB0Cb6ZPzAbBTZ-Mz9nJd2LfVE4BALr5S4JVhFzLW_al-wN_4FY4oSyN4Xk2Ti3eSSBduLlQOxbbMUUsj2IWCi3sRdM64yfn3QE-E13Zin8PZ150Bzd3YcEgcCrmUb3JvLtHmd3QCXfb4ialz5cr0VBKy7DZZy8sFCOPXfA1gKR1xB0Bd58jPTLp0e3--UXg8SMADz0eSGa-uh861zphl76JRq18QfeFEd7rNz2qM"/>
                            </button>
                        </div>
                    </div>
                    {/* Product Info & Actions */}
                    <div className="flex flex-col gap-lg">
                        <div>
                            <div className="flex items-center gap-sm mb-xs">
                                <span className="bg-primary-container text-on-primary text-label-caps font-label-caps px-2 py-1 rounded-sm">베스트셀러</span>
                                <span className="text-on-surface-variant font-body-sm">BrandName</span>
                            </div>
                            <h1 className="font-display-lg text-display-lg text-on-surface mb-md">Premium Wireless ANC Headphones Pro</h1>
                            <div className="flex items-end gap-sm mb-md">
                                <span className="font-display-lg text-display-lg text-primary">₩299,000</span>
                                <span className="text-on-surface-variant font-body-md line-through pb-1">₩349,000</span>
                            </div>
                            <div className="flex items-center gap-sm mb-lg">
                                <span className="flex items-center text-[#f59e0b]">
                                    <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                                    <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                                    <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                                    <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                                    <span className="material-symbols-outlined">star_half</span>
                                </span>
                                <span className="text-on-surface-variant font-body-sm">(128 리뷰)</span>
                            </div>
                        </div>
                        <div className="bg-surface-container-low p-md rounded-lg border border-outline-variant mb-md">
                            <p className="font-body-md text-on-surface">
                                최고 수준의 액티브 노이즈 캔슬링과 고해상도 오디오를 지원하는 프리미엄 무선 헤드폰입니다. 하루 종일 착용해도 편안한 인체공학적 디자인을 자랑합니다.
                            </p>
                        </div>
                        {/* Stock Status */}
                        <div className="flex items-center gap-sm font-data-tabular text-data-tabular">
                            <span className="material-symbols-outlined text-[18px] text-[#16a34a]">check_circle</span>
                            <span className="text-on-surface">재고 있음 (오후 2시 이전 주문 시 오늘 출발)</span>
                        </div>
                        <hr className="border-outline-variant"/>
                        {/* Options & Quantity */}
                        <div className="flex flex-col gap-md">
                            <div>
                                <label className="block font-title-sm text-title-sm text-on-surface mb-sm">색상</label>
                                <div className="flex gap-sm">
                                    <button aria-label="Midnight Black" className="w-8 h-8 rounded-full bg-[#1e293b] border-2 border-primary focus:outline-none ring-2 ring-transparent focus:ring-primary-fixed-dim"></button>
                                    <button aria-label="Cloud White" className="w-8 h-8 rounded-full bg-[#f1f5f9] border border-outline-variant focus:outline-none ring-2 ring-transparent focus:ring-primary-fixed-dim"></button>
                                    <button aria-label="Navy Blue" className="w-8 h-8 rounded-full bg-[#0f172a] border border-outline-variant focus:outline-none ring-2 ring-transparent focus:ring-primary-fixed-dim"></button>
                                </div>
                            </div>
                            <div className="flex items-center gap-md">
                                <label className="font-title-sm text-title-sm text-on-surface">수량</label>
                                <div className="flex items-center border border-outline-variant rounded-md overflow-hidden bg-surface-container-lowest">
                                    <button aria-label="Decrease quantity" className="p-2 hover:bg-surface-container-low transition-colors text-on-surface-variant focus:outline-none">
                                        <span className="material-symbols-outlined text-[20px]">remove</span>
                                    </button>
                                    <input className="w-12 text-center border-none focus:ring-0 font-data-tabular text-data-tabular text-on-surface bg-transparent p-0" min="1" type="number" defaultValue="1"/>
                                    <button aria-label="Increase quantity" className="p-2 hover:bg-surface-container-low transition-colors text-on-surface-variant focus:outline-none">
                                        <span className="material-symbols-outlined text-[20px]">add</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Action Buttons */}
                        <div className="flex gap-md mt-md">
                            <button className="flex-1 bg-surface-container-lowest text-on-surface-variant border border-outline-variant font-title-sm text-title-sm py-3 px-6 rounded-lg hover:shadow-md transition-shadow flex items-center justify-center gap-sm" onClick={() => navigate('/cart')}>
                                <span className="material-symbols-outlined">shopping_cart</span>
                                장바구니 담기
                            </button>
                            <button className="flex-1 bg-primary text-on-primary font-title-sm text-title-sm py-3 px-6 rounded-lg hover:shadow-md transition-shadow hover:bg-primary-container active:scale-95 transition-all" onClick={() => navigate('/payment')}>
                                바로 구매하기
                            </button>
                        </div>
                        <button className="w-full mt-2 bg-surface-container-low text-on-surface font-body-md py-2 px-4 rounded-md flex justify-center items-center gap-sm border border-outline-variant hover:bg-surface-container-highest transition-colors">
                            <span className="material-symbols-outlined">favorite</span>
                            관심상품 등록
                        </button>
                    </div>
                </div>
                {/* Detail Tabs */}
                <div className="mt-xl">
                    <div className="border-b border-outline-variant flex gap-xl mb-xl">
                        <button className="pb-md border-b-2 border-primary font-title-sm text-title-sm text-primary">상품 상세</button>
                        <button className="pb-md border-b-2 border-transparent font-title-sm text-title-sm text-on-surface-variant hover:text-primary transition-colors">배송/교환/반품</button>
                        <button className="pb-md border-b-2 border-transparent font-title-sm text-title-sm text-on-surface-variant hover:text-primary transition-colors">상품 문의</button>
                    </div>
                    {/* Detail Content */}
                    <div className="max-w-3xl mx-auto space-y-xl">
                        <section>
                            <h2 className="font-headline-md text-headline-md text-on-surface mb-md">압도적인 노이즈 캔슬링</h2>
                            <p className="font-body-md text-on-surface-variant mb-md leading-relaxed">
                                주변 소음을 실시간으로 분석하여 차단하는 듀얼 노이즈 센서 기술이 적용되었습니다.
                                지하철이나 비행기 안에서도 온전히 음악에만 집중할 수 있는 나만의 공간을 만들어 드립니다.
                            </p>
                            <div className="w-full aspect-[21/9] bg-surface-container-low rounded-lg overflow-hidden relative">
                                <img alt="Noise Cancelling Feature" className="object-cover w-full h-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmSMsxUard04qkwNat65hR9kjdfyIU5rvOLS4n9LQ8-ZejLHjd2h38AtjfCOmphnivPz6z1bDXfGeklEuPO67MGIuKvl2yCu5b2WiqekUKLMXdtu9F1cAtiefLWnR_eqRdDcQnoq2X5WTahpVqd_mNrVLZTu5vhem0jdHJ8qc7cy6SsW4ep73RE_M1YCigiPcUpg26cC3ciIWu_T8cKw7B0fSljRjDpwRhuGg0aetjRLJcKUmetUlbSl2xPy-9taz_f45TCszYIbI"/>
                            </div>
                        </section>
                        <section>
                            <h2 className="font-headline-md text-headline-md text-on-surface mb-md">스튜디오급 고해상도 오디오</h2>
                            <p className="font-body-md text-on-surface-variant mb-lg leading-relaxed">
                                40mm 커스텀 드라이버가 장착되어 깊고 풍부한 베이스부터 선명한 고음까지 원음 그대로의 감동을 전달합니다.
                                LDAC 코덱을 지원하여 무선에서도 하이레졸루션 오디오 감상이 가능합니다.
                            </p>
                            <div className="grid grid-cols-2 gap-md">
                                <div className="bg-surface-container p-lg rounded-lg border border-outline-variant flex flex-col items-center text-center">
                                    <span className="material-symbols-outlined text-[48px] text-primary mb-md" style={{fontVariationSettings: "'FILL' 1"}}>graphic_eq</span>
                                    <h3 className="font-title-sm text-title-sm text-on-surface mb-sm">고해상도 지원</h3>
                                    <p className="font-body-sm text-on-surface-variant">원음에 가까운 사운드</p>
                                </div>
                                <div className="bg-surface-container p-lg rounded-lg border border-outline-variant flex flex-col items-center text-center">
                                    <span className="material-symbols-outlined text-[48px] text-primary mb-md" style={{fontVariationSettings: "'FILL' 1"}}>battery_charging_full</span>
                                    <h3 className="font-title-sm text-title-sm text-on-surface mb-sm">최대 30시간 재생</h3>
                                    <p className="font-body-sm text-on-surface-variant">고속 충전 지원 (10분 충전 5시간)</p>
                                </div>
                            </div>
                        </section>
                        {/* Shipping & Returns Info */}
                        <section className="mt-2xl pt-xl border-t border-outline-variant" id="shipping-info">
                            <h2 className="font-headline-md text-headline-md text-on-surface mb-lg">배송 및 교환/반품 안내</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                                {/* Shipping Box */}
                                <div className="bg-surface-container-lowest p-lg rounded-lg border border-outline-variant shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex items-center gap-sm mb-md text-primary">
                                        <span className="material-symbols-outlined">local_shipping</span>
                                        <h3 className="font-title-sm text-title-sm">배송 정보</h3>
                                    </div>
                                    <ul className="space-y-sm font-body-sm text-on-surface-variant">
                                        <li className="flex justify-between border-b border-outline-variant border-dashed pb-2">
                                            <span>배송 방법</span>
                                            <span className="text-on-surface font-medium">일반 택배 (CJ대한통운)</span>
                                        </li>
                                        <li className="flex justify-between border-b border-outline-variant border-dashed pb-2">
                                            <span>배송비</span>
                                            <span className="text-on-surface font-medium">무료 (도서산간 3,000원 추가)</span>
                                        </li>
                                        <li className="flex justify-between border-b border-outline-variant border-dashed pb-2">
                                            <span>배송 기간</span>
                                            <span className="text-on-surface font-medium">결제 완료 후 1~2일 소요</span>
                                        </li>
                                        <li className="pt-1">
                                            <p className="text-xs text-on-surface-variant opacity-80">* 당일 오후 2시 이전 결제 건에 한해 당일 출고됩니다.</p>
                                        </li>
                                    </ul>
                                </div>
                                {/* Return Box */}
                                <div className="bg-surface-container-lowest p-lg rounded-lg border border-outline-variant shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex items-center gap-sm mb-md text-[#ba1a1a]">
                                        <span className="material-symbols-outlined">assignment_return</span>
                                        <h3 className="font-title-sm text-title-sm">교환/반품 안내</h3>
                                    </div>
                                    <ul className="space-y-sm font-body-sm text-on-surface-variant">
                                        <li className="flex justify-between border-b border-outline-variant border-dashed pb-2">
                                            <span>반품 배송비</span>
                                            <span className="text-on-surface font-medium">편도 3,000원 (최초 배송비 무료인 경우 6,000원 부과)</span>
                                        </li>
                                        <li className="flex justify-between border-b border-outline-variant border-dashed pb-2">
                                            <span>교환 배송비</span>
                                            <span className="text-on-surface font-medium">6,000원</span>
                                        </li>
                                        <li className="flex justify-between border-b border-outline-variant border-dashed pb-2">
                                            <span>신청 기한</span>
                                            <span className="text-on-surface font-medium">상품 수령 후 7일 이내</span>
                                        </li>
                                        <li className="pt-1">
                                            <p className="text-xs text-on-surface-variant opacity-80">* 단순 변심에 의한 교환/반품 시 배송비는 고객 부담입니다. 포장 훼손 시 반품이 불가할 수 있습니다.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default StoreDetail;