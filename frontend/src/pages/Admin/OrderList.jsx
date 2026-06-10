import {useNavigate} from 'react-router-dom';

const OrderList = () => {
    const navigate = useNavigate();
    return (
        <main className="flex-1 p-lg md:p-xl overflow-x-hidden max-w-container-max mx-auto w-full custom-scroll">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-md mb-xl">
                <div>
                    <h2 className="text-display-lg-mobile md:text-display-lg font-display-lg-mobile md:font-display-lg text-on-surface mb-xs">주문 내역</h2>
                    <p className="font-body-md text-body-md text-on-surface-variant">최근 접수된 주문 목록을 확인하고 관리합니다.</p>
                </div>
                <div className="bg-surface-container-high border border-outline-variant rounded-lg px-md py-xs inline-flex items-center gap-sm self-start md:self-end text-on-surface-variant font-data-tabular text-data-tabular">
                    <span className="material-symbols-outlined text-sm">code</span>
                    <span>GET /orders</span>
                </div>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg mb-lg shadow-sm">
                <div className="flex flex-col lg:flex-row gap-md justify-between items-start lg:items-center">
                    <div className="flex flex-wrap gap-sm">
                        <div className="relative">
                            <select className="appearance-none bg-surface border border-outline-variant rounded-lg pl-md pr-xl py-2 font-body-sm text-body-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary hover:bg-surface-container-low transition-colors cursor-pointer">
                                <option>모든 상태</option>
                                <option>생성됨 (CREATED)</option>
                                <option>결제 완료 (PAID)</option>
                                <option>배송 준비 (PREPARING)</option>
                                <option>배송 중 (SHIPPING)</option>
                                <option>완료 (COMPLETED)</option>
                                <option>취소 (CANCELLED)</option>
                            </select>
                            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-sm">expand_more</span>
                        </div>
                        <div className="relative">
                            <input className="bg-surface border border-outline-variant rounded-lg px-md py-2 font-body-sm text-body-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary hover:bg-surface-container-low transition-colors cursor-pointer" type="date" />
                        </div>
                    </div>
                    <div className="flex gap-sm w-full lg:w-auto">
                        <button className="flex-1 lg:flex-none flex items-center justify-center gap-sm px-md py-2 bg-surface border border-outline-variant text-on-surface-variant rounded-lg font-title-sm text-title-sm hover:bg-surface-container hover:shadow-md transition-all">
                            <span className="material-symbols-outlined text-sm">download</span>
                            내보내기
                        </button>
                        <button className="flex-1 lg:flex-none flex items-center justify-center gap-sm px-xl py-[10px] bg-primary-container text-on-primary-container rounded-lg font-title-sm text-title-sm shadow-sm hover:shadow-md transition-all active:scale-95 whitespace-nowrap" onClick={() => navigate('/admin/order-create')}>
                            <span className="material-symbols-outlined text-[20px]" style={{ marginTop: '2px' }}>add</span>
                            수동 주문 생성
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm overflow-hidden flex flex-col">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                        <thead>
                            <tr className="bg-surface-container border-b border-outline-variant font-label-caps text-label-caps text-on-surface-variant">
                                <th className="p-md font-semibold w-12 text-center">
                                    <input className="rounded border-outline-variant text-primary focus:ring-primary cursor-pointer" type="checkbox" />
                                </th>
                                <th className="p-md font-semibold">주문 ID</th>
                                <th className="p-md font-semibold">주문일시</th>
                                <th className="p-md font-semibold">고객명</th>
                                <th className="p-md font-semibold text-right">총 결제금액</th>
                                <th className="p-md font-semibold text-center">상태</th>
                                <th className="p-md font-semibold text-center w-24">액션</th>
                            </tr>
                        </thead>
                        <tbody className="font-data-tabular text-data-tabular text-on-surface divide-y divide-outline-variant">
                            <tr className="hover:bg-surface-container-low transition-colors group cursor-pointer" onClick={() => navigate('/admin/order-detail')}>
                                <td className="p-md text-center">
                                    <input className="rounded border-outline-variant text-primary focus:ring-primary cursor-pointer" type="checkbox" onClick={(e) => e.stopPropagation()}/>
                                </td>
                                <td className="p-md font-medium text-primary">ORD-2023-1001</td>
                                <td className="p-md text-on-surface-variant">2023-10-24 14:30</td>
                                <td className="p-md">김철수</td>
                                <td className="p-md text-right font-medium">₩ 125,000</td>
                                <td className="p-md text-center">
                                    <span className="inline-flex items-center px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-semibold">결제 완료 (PAID)</span>
                                </td>
                                <td className="p-md text-center">
                                    <button className="text-on-surface-variant hover:text-primary p-1 rounded transition-colors opacity-0 group-hover:opacity-100" onClick={(e) => e.stopPropagation()}>
                                        <span className="material-symbols-outlined text-sm">more_vert</span>
                                    </button>
                                </td>
                            </tr>
                            <tr className="hover:bg-surface-container-low transition-colors group cursor-pointer" onClick={() => navigate('/admin/order-detail')}>
                                <td className="p-md text-center">
                                    <input className="rounded border-outline-variant text-primary focus:ring-primary cursor-pointer" type="checkbox" onClick={(e) => e.stopPropagation()}/>
                                </td>
                                <td className="p-md font-medium text-primary">ORD-2023-1002</td>
                                <td className="p-md text-on-surface-variant">2023-10-24 15:05</td>
                                <td className="p-md">이영희</td>
                                <td className="p-md text-right font-medium">₩ 45,000</td>
                                <td className="p-md text-center">
                                    <span className="inline-flex items-center px-2 py-1 rounded-full bg-surface-variant text-on-surface border border-outline-variant text-xs font-semibold">생성됨 (CREATED)</span>
                                </td>
                                <td className="p-md text-center">
                                    <button className="text-on-surface-variant hover:text-primary p-1 rounded transition-colors opacity-0 group-hover:opacity-100" onClick={(e) => e.stopPropagation()}>
                                        <span className="material-symbols-outlined text-sm">more_vert</span>
                                    </button>
                                </td>
                            </tr>
                            <tr className="hover:bg-surface-container-low transition-colors group cursor-pointer" onClick={() => navigate('/admin/order-detail')}>
                                <td className="p-md text-center">
                                    <input className="rounded border-outline-variant text-primary focus:ring-primary cursor-pointer" type="checkbox" onClick={(e) => e.stopPropagation()}/>
                                </td>
                                <td className="p-md font-medium text-primary">ORD-2023-0998</td>
                                <td className="p-md text-on-surface-variant">2023-10-23 09:15</td>
                                <td className="p-md">박지성</td>
                                <td className="p-md text-right font-medium">₩ 210,000</td>
                                <td className="p-md text-center">
                                    <span className="inline-flex items-center px-2 py-1 rounded-full bg-[#fef08a]/50 text-[#854d0e] border border-[#fef08a] text-xs font-semibold">배송 준비 (PREPARING)</span>
                                </td>
                                <td className="p-md text-center">
                                    <button className="text-on-surface-variant hover:text-primary p-1 rounded transition-colors opacity-0 group-hover:opacity-100" onClick={(e) => e.stopPropagation()}>
                                        <span className="material-symbols-outlined text-sm">more_vert</span>
                                    </button>
                                </td>
                            </tr>
                            <tr className="hover:bg-surface-container-low transition-colors group cursor-pointer" onClick={() => navigate('/admin/order-detail')}>
                                <td className="p-md text-center">
                                    <input className="rounded border-outline-variant text-primary focus:ring-primary cursor-pointer" type="checkbox" onClick={(e) => e.stopPropagation()}/>
                                </td>
                                <td className="p-md font-medium text-primary">ORD-2023-0995</td>
                                <td className="p-md text-on-surface-variant">2023-10-22 16:40</td>
                                <td className="p-md">홍길동</td>
                                <td className="p-md text-right font-medium">₩ 89,000</td>
                                <td className="p-md text-center">
                                    <span className="inline-flex items-center px-2 py-1 rounded-full bg-secondary-container text-on-secondary-container border border-secondary-container text-xs font-semibold">배송 중 (SHIPPING)</span>
                                </td>
                                <td className="p-md text-center">
                                    <button className="text-on-surface-variant hover:text-primary p-1 rounded transition-colors opacity-0 group-hover:opacity-100" onClick={(e) => e.stopPropagation()}>
                                        <span className="material-symbols-outlined text-sm">more_vert</span>
                                    </button>
                                </td>
                            </tr>
                            <tr className="hover:bg-surface-container-low transition-colors group cursor-pointer" onClick={() => navigate('/admin/order-detail')}>
                                <td className="p-md text-center">
                                    <input className="rounded border-outline-variant text-primary focus:ring-primary cursor-pointer" type="checkbox" onClick={(e) => e.stopPropagation()}/>
                                </td>
                                <td className="p-md font-medium text-primary">ORD-2023-0980</td>
                                <td className="p-md text-on-surface-variant">2023-10-20 11:20</td>
                                <td className="p-md">강호동</td>
                                <td className="p-md text-right font-medium">₩ 350,000</td>
                                <td className="p-md text-center">
                                    <span className="inline-flex items-center px-2 py-1 rounded-full bg-[#bbf7d0]/50 text-[#166534] border border-[#bbf7d0] text-xs font-semibold">완료 (COMPLETED)</span>
                                </td>
                                <td className="p-md text-center">
                                    <button className="text-on-surface-variant hover:text-primary p-1 rounded transition-colors opacity-0 group-hover:opacity-100" onClick={(e) => e.stopPropagation()}>
                                        <span className="material-symbols-outlined text-sm">more_vert</span>
                                    </button>
                                </td>
                            </tr>
                            <tr className="hover:bg-surface-container-low transition-colors group cursor-pointer bg-surface/50" onClick={() => navigate('/admin/order-detail')}>
                                <td className="p-md text-center">
                                    <input className="rounded border-outline-variant text-primary focus:ring-primary cursor-pointer" disabled={true} type="checkbox" onClick={(e) => e.stopPropagation()}/>
                                </td>
                                <td className="p-md font-medium text-on-surface-variant line-through">ORD-2023-0975</td>
                                <td className="p-md text-on-surface-variant">2023-10-19 08:05</td>
                                <td className="p-md text-on-surface-variant">유재석</td>
                                <td className="p-md text-right font-medium text-on-surface-variant">₩ 55,000</td>
                                <td className="p-md text-center">
                                    <span className="inline-flex items-center px-2 py-1 rounded-full bg-error-container text-on-error-container border border-error-container text-xs font-semibold">취소 (CANCELLED)</span>
                                </td>
                                <td className="p-md text-center">
                                    <button className="text-on-surface-variant hover:text-primary p-1 rounded transition-colors opacity-0 group-hover:opacity-100" onClick={(e) => e.stopPropagation()}>
                                        <span className="material-symbols-outlined text-sm">more_vert</span>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="border-t border-outline-variant p-md flex flex-col sm:flex-row items-center justify-between gap-md bg-surface">
                    <span className="font-body-sm text-body-sm text-on-surface-variant">총 <span className="font-semibold text-on-surface">1,245</span>건 중 1 - 6</span>
                    <div className="flex items-center gap-xs">
                        <button className="p-sm border border-outline-variant rounded bg-surface hover:bg-surface-container disabled:opacity-50 disabled:cursor-not-allowed transition-colors" disabled={true}>
                            <span className="material-symbols-outlined text-sm">chevron_left</span>
                        </button>
                        <button className="px-3 py-1 border border-primary bg-primary/10 text-primary rounded font-title-sm text-title-sm font-semibold">1</button>
                        <button className="px-3 py-1 border border-transparent hover:bg-surface-container rounded font-title-sm text-title-sm transition-colors text-on-surface">2</button>
                        <button className="px-3 py-1 border border-transparent hover:bg-surface-container rounded font-title-sm text-title-sm transition-colors text-on-surface">3</button>
                        <span className="px-2 text-on-surface-variant">...</span>
                        <button className="p-sm border border-outline-variant rounded bg-surface hover:bg-surface-container transition-colors">
                            <span className="material-symbols-outlined text-sm">chevron_right</span>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default OrderList;