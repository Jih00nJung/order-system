import React from 'react';
import {useNavigate} from 'react-router-dom';

const Payment = () => {
    const navigate = useNavigate();
    return (
        <main className="flex-1 bg-surface py-xl px-md sm:px-lg md:px-xl overflow-y-auto">
            <div className="max-w-7xl mx-auto flex flex-col h-full">
                <div className="max-w-[1024px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-xl">
                    <div className="lg:col-span-8 flex flex-col gap-xl">
                        <section className="bg-surface-container-lowest rounded-xl p-lg border border-outline-variant shadow-sm">
                            <div className="flex justify-between items-center mb-md pb-sm border-b border-outline-variant">
                                <h2 className="font-headline-md text-headline-md text-on-surface">배송지 정보</h2>
                                <button className="font-label-caps text-label-caps text-primary border border-primary px-md py-xs rounded hover:bg-primary-fixed transition-colors">변경</button>
                            </div>
                            <div className="flex flex-col gap-sm">
                                <div className="flex items-center gap-sm">
                                    <span className="font-title-sm text-title-sm text-on-surface">김관리</span>
                                    <span className="bg-secondary-container text-on-secondary-container font-label-caps text-label-caps px-2 py-1 rounded-sm">기본 배송지</span>
                                </div>
                                <p className="font-body-md text-body-md text-on-surface-variant">
                                    010-1234-5678<br/>
                                    서울특별시 강남구 테헤란로 123<br/>
                                    물류센터 B동 402호 (06234)
                                </p>
                                <div className="mt-sm">
                                    <label className="font-label-caps text-label-caps text-on-surface-variant block mb-xs">배송 요청사항</label>
                                    <select className="w-full font-body-md text-body-md border border-outline-variant rounded-lg px-md py-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-shadow bg-surface">
                                        <option>문 앞에 놓아주세요.</option>
                                        <option>경비실에 맡겨주세요.</option>
                                        <option>배송 전 연락주세요.</option>
                                        <option>직접 입력</option>
                                    </select>
                                </div>
                            </div>
                        </section>
                        <section className="bg-surface-container-lowest rounded-xl p-lg border border-outline-variant shadow-sm">
                            <div className="mb-md pb-sm border-b border-outline-variant">
                                <h2 className="font-headline-md text-headline-md text-on-surface">주문 상품 <span className="text-primary">2</span>건</h2>
                            </div>
                            <div className="flex flex-col gap-md">
                                <div className="flex gap-md items-start p-sm rounded-lg hover:bg-surface-container-low transition-colors">
                                    <div className="w-20 h-20 bg-surface-variant rounded flex-shrink-0 bg-cover bg-center border border-outline-variant" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCMF47tYtdqhKLmz6DrqO_F2zPXU2grCnbsbnoIiA4QDq7YgIXnws0cIonDGpjFgRZ8K8ZntuGE98fSMtmlVTIceIbQnAFszn2fOmdgwVpZQZEG1HYcZEhWcHMTI17N3cQIur-vDn17JS1yzZqSvFecalvlI_UFs1IMA9sgOzalD3gyzaYi2z7N7FuBsDO1MsDjjBZW3bTmHQbGR7VsTUNRB5hICsudrHMtUlb0i4EITCIuA1_D9OM0IfLpde65SD-o2nqBnUExcKY')"}}></div>
                                    <div className="flex-grow">
                                        <h3 className="font-title-sm text-title-sm text-on-surface">고성능 서버 랙 마운트 모듈 Type-A</h3>
                                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">옵션: 표준형 / 수량: 1개</p>
                                    </div>
                                    <div className="font-data-tabular text-data-tabular text-on-surface whitespace-nowrap">1,250,000 원</div>
                                </div>
                                <div className="flex gap-md items-start p-sm rounded-lg hover:bg-surface-container-low transition-colors">
                                    <div className="w-20 h-20 bg-surface-variant rounded flex-shrink-0 bg-cover bg-center border border-outline-variant" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBCgmpXHWJpsOvcDWf86xsEQl5nUEW5WcCiCY8R9rvm133nL8PXkVsuHx50kNuRP53UxM3KH2m8nnsuKb4k5unfyulClrSP8VmM7sx0GIPvwJ6a9mNxgQAOSalVjWQjJ3Lq99HPuSeCDpbsI2_ixIe0cDnmxg6_CDglnYQtp1I0F8qY_tnZoh4FvIhgkRpZbBYpEuE5qNNET4lpSvHe8STpH8ziUr2Ofb3BpJMVnwav7PRffEnt8PHn3sYAT9zS-Qd22wUa1dP2veA')"}}></div>
                                    <div className="flex-grow">
                                        <h3 className="font-title-sm text-title-sm text-on-surface">CAT.6A 차폐 통신 케이블 50m</h3>
                                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">옵션: 블루 / 수량: 3개</p>
                                    </div>
                                    <div className="font-data-tabular text-data-tabular text-on-surface whitespace-nowrap">120,000 원</div>
                                </div>
                            </div>
                        </section>
                        <section className="bg-surface-container-lowest rounded-xl p-lg border border-outline-variant shadow-sm">
                            <div className="mb-md pb-sm border-b border-outline-variant">
                                <h2 className="font-headline-md text-headline-md text-on-surface">결제 수단</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
                                <label className="cursor-pointer relative">
                                    <input defaultChecked className="peer sr-only" name="payment_method" type="radio"/>
                                    <div className="h-full border border-outline-variant rounded-lg p-md flex flex-col items-center justify-center gap-sm hover:bg-surface-container-low transition-all peer-checked:border-primary peer-checked:bg-primary-fixed peer-checked:ring-1 peer-checked:ring-primary">
                                        <span className="material-symbols-outlined text-3xl text-on-surface-variant peer-checked:text-primary">credit_card</span>
                                        <span className="font-title-sm text-title-sm text-on-surface">신용/체크카드</span>
                                    </div>
                                </label>
                                <label className="cursor-pointer relative">
                                    <input className="peer sr-only" name="payment_method" type="radio"/>
                                    <div className="h-full border border-outline-variant rounded-lg p-md flex flex-col items-center justify-center gap-sm hover:bg-surface-container-low transition-all peer-checked:border-primary peer-checked:bg-primary-fixed peer-checked:ring-1 peer-checked:ring-primary">
                                        <span className="material-symbols-outlined text-3xl text-on-surface-variant peer-checked:text-primary">account_balance</span>
                                        <span className="font-title-sm text-title-sm text-on-surface">실시간 계좌이체</span>
                                    </div>
                                </label>
                                <label className="cursor-pointer relative">
                                    <input className="peer sr-only" name="payment_method" type="radio"/>
                                    <div className="h-full border border-outline-variant rounded-lg p-md flex flex-col items-center justify-center gap-sm hover:bg-surface-container-low transition-all peer-checked:border-primary peer-checked:bg-primary-fixed peer-checked:ring-1 peer-checked:ring-primary">
                                        <span className="material-symbols-outlined text-3xl text-on-surface-variant peer-checked:text-primary">phone_iphone</span>
                                        <span className="font-title-sm text-title-sm text-on-surface">간편결제</span>
                                    </div>
                                </label>
                            </div>
                            <div className="mt-md bg-surface-container rounded-lg p-md">
                                <select className="w-full font-body-md text-body-md border border-outline-variant rounded-lg px-md py-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-shadow bg-surface-container-lowest">
                                    <option>카드를 선택해주세요</option>
                                    <option>신한카드</option>
                                    <option>국민카드</option>
                                    <option>현대카드 (법인)</option>
                                </select>
                                <div className="mt-sm flex items-center gap-xs">
                                    <input className="rounded border-outline-variant text-primary focus:ring-primary" id="save_card" type="checkbox"/>
                                    <label className="font-body-sm text-body-sm text-on-surface-variant cursor-pointer" htmlFor="save_card">기본 결제 수단으로 저장</label>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="lg:col-span-4">
                        <aside className="sticky top-[100px] bg-surface-container-lowest rounded-xl p-lg border border-outline-variant shadow-[0_4px_6px_-1px_rgb(0,0,0,0.1)]">
                            <h2 className="font-headline-md text-headline-md text-on-surface mb-md">결제 상세</h2>
                            <div className="flex flex-col gap-sm font-body-md text-body-md text-on-surface">
                                <div className="flex justify-between items-center">
                                    <span className="text-on-surface-variant">총 상품금액</span>
                                    <span className="font-data-tabular text-data-tabular">1,370,000 원</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-on-surface-variant">배송비</span>
                                    <span className="font-data-tabular text-data-tabular">5,000 원</span>
                                </div>
                                <div className="flex justify-between items-center text-primary">
                                    <span>특별 할인</span>
                                    <span className="font-data-tabular text-data-tabular">- 20,000 원</span>
                                </div>
                            </div>
                            <div className="mt-md pt-md border-t border-outline-variant">
                                <div className="flex justify-between items-end mb-lg">
                                    <span className="font-title-sm text-title-sm text-on-surface">최종 결제 금액</span>
                                    <span className="font-display-lg text-display-lg text-primary">1,355,000<span className="font-title-sm text-title-sm ml-xs">원</span></span>
                                </div>
                                <div className="bg-surface-container-low p-sm rounded mb-lg flex items-start gap-sm">
                                    <span className="material-symbols-outlined text-on-surface-variant text-[18px] mt-[2px]">info</span>
                                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.</p>
                                </div>
                                <button className="w-full bg-primary text-on-primary py-md rounded-lg font-title-sm text-title-sm hover:bg-on-primary-fixed-variant shadow-sm transition-all active:scale-[0.98] flex items-center justify-center gap-sm" onClick={() => navigate('/payment-success')}>
                                    <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>lock</span>
                                    1,355,000원 결제하기
                                </button>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default Payment;