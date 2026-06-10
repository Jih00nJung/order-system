import {useNavigate} from 'react-router-dom';

const OrderCreate = () => {
    const navigate = useNavigate();
    return (
        <main className="flex-1 overflow-y-auto p-xl custom-scroll">
            <div className="max-w-container-max mx-auto">
                <div className="mb-lg flex justify-between items-end">
                    <div>
                        <h2 className="font-display-lg text-display-lg text-on-surface tracking-tight">주문 생성</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant mt-xs">새로운 고객 주문을 수동으로 입력하고 결제를 처리합니다.</p>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-gutter">
                    <div className="col-span-12 lg:col-span-8 space-y-lg">
                        <section className="bg-surface-container-lowest rounded-lg border border-outline-variant shadow-sm p-lg">
                            <h3 className="font-title-sm text-title-sm text-on-surface mb-md flex items-center gap-sm">
                                <span className="material-symbols-outlined text-primary">person_search</span>
                                고객 정보
                            </h3>
                            <div className="flex gap-md mb-md">
                                <div className="flex-1 relative flex items-center">
                                    <span className="material-symbols-outlined absolute left-3 text-outline pointer-events-none">search</span>
                                    <input className="w-full pl-10 pr-3 py-2 border border-outline-variant rounded-DEFAULT font-body-md text-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="고객 ID, 이메일 또는 이름으로 검색" type="text"/>
                                </div>
                                <button className="bg-surface-container-high text-on-surface font-label-caps text-label-caps px-md py-sm rounded-DEFAULT border border-outline-variant hover:bg-surface-variant transition-colors">
                                    신규 고객
                                </button>
                            </div>
                            <div className="bg-surface-container-low border border-primary/20 rounded-DEFAULT p-md flex items-start gap-md">
                                <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-secondary shrink-0">
                                    <span className="font-title-sm text-title-sm font-bold">김</span>
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-sm">
                                        <h4 className="font-title-sm text-title-sm text-on-surface">김철수</h4>
                                        <span className="bg-surface-container-highest text-on-surface-variant font-label-caps text-[10px] px-2 py-0.5 rounded-full">VIP</span>
                                    </div>
                                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">chulsoo.kim@example.com</p>
                                    <p className="font-body-sm text-body-sm text-on-surface-variant">010-1234-5678</p>
                                </div>
                                <button className="text-error hover:bg-error-container p-xs rounded transition-colors" title="고객 변경">
                                    <span className="material-symbols-outlined" style={{fontSize: '18px'}}>close</span>
                                </button>
                            </div>
                        </section>
                        <section className="bg-surface-container-lowest rounded-lg border border-outline-variant shadow-sm p-lg">
                            <h3 className="font-title-sm text-title-sm text-on-surface mb-md flex items-center gap-sm">
                                <span className="material-symbols-outlined text-primary">local_shipping</span>
                                결제 및 배송
                            </h3>
                            <div className="grid grid-cols-2 gap-md">
                                <div>
                                    <label className="block font-label-caps text-label-caps text-on-surface-variant mb-xs">결제 수단</label>
                                    <select className="w-full border border-outline-variant rounded-DEFAULT p-sm font-body-md text-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-transparent appearance-none">
                                        <option>법인 신용카드 (끝자리 4242)</option>
                                        <option>무통장 입금</option>
                                        <option>월말 결산 (B2B)</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block font-label-caps text-label-caps text-on-surface-variant mb-xs">배송 방법</label>
                                    <select className="w-full border border-outline-variant rounded-DEFAULT p-sm font-body-md text-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-transparent appearance-none">
                                        <option>일반 택배 (영업일 기준 2-3일)</option>
                                        <option>퀵 서비스 (당일)</option>
                                        <option>방문 수령</option>
                                    </select>
                                </div>
                                <div className="col-span-2 mt-sm">
                                    <label className="block font-label-caps text-label-caps text-on-surface-variant mb-xs">배송지 주소</label>
                                    <div className="border border-outline-variant rounded-DEFAULT p-sm font-body-sm text-body-sm text-on-surface bg-surface-container-lowest flex justify-between items-center">
                                        <span>서울특별시 강남구 테헤란로 123, 4층 OMS 빌딩 (06123)</span>
                                        <button className="text-primary font-label-caps text-label-caps hover:underline">수정</button>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="bg-surface-container-lowest rounded-lg border border-outline-variant shadow-sm p-lg">
                            <div className="flex justify-between items-center mb-md">
                                <h3 className="font-title-sm text-title-sm text-on-surface flex items-center gap-sm">
                                    <span className="material-symbols-outlined text-primary">list_alt</span>
                                    주문 항목
                                </h3>
                                <button className="flex items-center gap-xs text-primary font-label-caps text-label-caps hover:bg-surface-container px-sm py-xs rounded transition-colors">
                                    <span className="material-symbols-outlined" style={{fontSize: '16px'}}>add</span>
                                    상품 추가
                                </button>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b border-outline-variant">
                                            <th className="py-sm px-sm font-label-caps text-label-caps text-on-surface-variant w-[40%]">상품명 (SKU)</th>
                                            <th className="py-sm px-sm font-label-caps text-label-caps text-on-surface-variant text-right">단가</th>
                                            <th className="py-sm px-sm font-label-caps text-label-caps text-on-surface-variant text-center w-24">수량</th>
                                            <th className="py-sm px-sm font-label-caps text-label-caps text-on-surface-variant text-right">합계</th>
                                            <th className="py-sm px-sm font-label-caps text-label-caps text-on-surface-variant text-center w-12"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="font-data-tabular text-data-tabular text-on-surface">
                                        <tr className="border-b border-outline-variant/30 hover:bg-surface-container-low transition-colors group h-[48px]">
                                            <td className="py-sm px-sm">
                                                <div>산업용 라우터 X-PRO</div>
                                                <div className="text-[11px] text-on-surface-variant font-body-sm mt-0.5">SKU: NET-RT-XPRO-01</div>
                                            </td>
                                            <td className="py-sm px-sm text-right">₩ 1,250,000</td>
                                            <td className="py-sm px-sm text-center">
                                                <input className="w-16 border border-outline-variant rounded p-1 text-center font-data-tabular text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-transparent" type="number" defaultValue="2"/>
                                            </td>
                                            <td className="py-sm px-sm text-right font-medium">₩ 2,500,000</td>
                                            <td className="py-sm px-sm text-center">
                                                <button className="text-outline hover:text-error opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <span className="material-symbols-outlined" style={{fontSize: '18px'}}>delete</span>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr className="border-b border-outline-variant/30 hover:bg-surface-container-low transition-colors group h-[48px]">
                                            <td className="py-sm px-sm">
                                                <div>Cat6 UTP 케이블 (300m)</div>
                                                <div className="text-[11px] text-on-surface-variant font-body-sm mt-0.5">SKU: CAB-UTP6-300</div>
                                            </td>
                                            <td className="py-sm px-sm text-right">₩ 85,000</td>
                                            <td className="py-sm px-sm text-center">
                                                <input className="w-16 border border-outline-variant rounded p-1 text-center font-data-tabular text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-transparent" type="number" defaultValue="5"/>
                                            </td>
                                            <td className="py-sm px-sm text-right font-medium">₩ 425,000</td>
                                            <td className="py-sm px-sm text-center">
                                                <button className="text-outline hover:text-error opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <span className="material-symbols-outlined" style={{fontSize: '18px'}}>delete</span>
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="mt-md pt-sm border-t border-outline-variant/30 flex gap-sm items-center">
                                <div className="flex-1 relative flex items-center">
                                    <span className="material-symbols-outlined absolute left-3 text-outline pointer-events-none" style={{fontSize: '18px'}}>barcode_scanner</span>
                                    <input className="w-full pl-10 pr-3 py-1.5 border border-outline-variant rounded-DEFAULT font-body-sm text-body-sm bg-surface-container-lowest focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="SKU 스캔 또는 입력..." type="text"/>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="col-span-12 lg:col-span-4 space-y-lg relative">
                        <div className="sticky top-0 space-y-lg">
                            <section className="bg-surface-container-lowest rounded-lg border border-outline-variant shadow-sm p-lg">
                                <h3 className="font-title-sm text-title-sm text-on-surface mb-lg flex items-center gap-sm">
                                    <span className="material-symbols-outlined text-primary">receipt_long</span>
                                    결제 요약
                                </h3>
                                <div className="space-y-sm font-data-tabular text-data-tabular">
                                    <div className="flex justify-between text-on-surface-variant">
                                        <span>소계 (2개 항목)</span>
                                        <span>₩ 2,925,000</span>
                                    </div>
                                    <div className="flex justify-between text-on-surface-variant">
                                        <span>할인 (VIP 5%)</span>
                                        <span className="text-error">- ₩ 146,250</span>
                                    </div>
                                    <div className="flex justify-between text-on-surface-variant">
                                        <span>부가세 (10%)</span>
                                        <span>₩ 277,875</span>
                                    </div>
                                    <div className="flex justify-between text-on-surface-variant">
                                        <span>배송비</span>
                                        <span>₩ 0</span>
                                    </div>
                                    <div className="border-t border-outline-variant/50 pt-sm mt-sm flex justify-between items-center">
                                        <span className="font-title-sm text-title-sm text-on-surface">총 결제 금액</span>
                                        <span className="font-headline-md text-headline-md text-primary font-bold">₩ 3,056,625</span>
                                    </div>
                                </div>
                                <div className="mt-xl space-y-sm">
                                    <button className="w-full bg-gradient-to-r from-primary to-[#0056b3] text-on-primary font-title-sm text-title-sm py-md rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all flex justify-center items-center gap-sm shadow-md" onClick={() => navigate('/admin/orders')}>
                                        <span className="material-symbols-outlined" style={{fontSize: '20px'}}>check_circle</span>
                                        주문 생성 완료
                                    </button>
                                    <button className="w-full bg-surface-container-lowest border border-outline-variant text-on-surface-variant font-label-caps text-label-caps py-sm rounded-DEFAULT hover:bg-surface-container transition-colors">
                                        임시 저장
                                    </button>
                                </div>
                            </section>
                            <section className="bg-surface-container rounded-lg border border-outline-variant p-lg">
                                <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-8 flex items-center gap-xs uppercase">
                                    <span className="material-symbols-outlined" style={{fontSize: '16px'}}>code</span>
                                    개발자 노트: 트랜잭션 흐름
                                </h3>
                                <div className="relative border-l-2 border-outline-variant/30 ml-3 pl-md space-y-lg">
                                    <div className="relative">
                                        <div className="absolute -left-[23px] top-1 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-surface-container"></div>
                                        <div className="font-body-sm text-body-sm font-medium text-on-surface">1. 재고 확인</div>
                                        <div className="text-[12px] text-on-surface-variant font-body-sm mt-1.5">선택된 창고의 재고 제약 조건을 확인합니다.</div>
                                    </div>
                                    <div className="relative">
                                        <div className="absolute -left-[23px] top-1 w-2.5 h-2.5 rounded-full bg-outline-variant ring-4 ring-surface-container"></div>
                                        <div className="font-body-sm text-body-sm font-medium text-on-surface-variant">2. 재고 할당</div>
                                        <div className="text-[12px] text-on-surface-variant font-body-sm mt-1.5">초과 판매를 방지하기 위해 아이템을 잠금 처리합니다 (TTL: 15분).</div>
                                    </div>
                                    <div className="relative">
                                        <div className="absolute -left-[23px] top-1 w-2.5 h-2.5 rounded-full bg-outline-variant ring-4 ring-surface-container"></div>
                                        <div className="font-body-sm text-body-sm font-medium text-on-surface-variant">3. 결제 승인 처리</div>
                                        <div className="text-[12px] text-on-surface-variant font-body-sm mt-1.5">외부 PG 게이트웨이 API를 호출합니다.</div>
                                    </div>
                                    <div className="relative">
                                        <div className="absolute -left-[23px] top-1 w-2.5 h-2.5 rounded-full bg-outline-variant ring-4 ring-surface-container"></div>
                                        <div className="font-body-sm text-body-sm font-medium text-on-surface-variant">4. DB 트랜잭션 커밋</div>
                                        <div className="text-[12px] text-on-surface-variant font-body-sm mt-1.5">`Order`, `LineItems`를 작성하고 `Inventory`를 업데이트합니다.</div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default OrderCreate;
