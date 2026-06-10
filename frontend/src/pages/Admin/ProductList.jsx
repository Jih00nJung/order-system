import {useNavigate, Link} from 'react-router-dom';
const ProductList = () => {
    const navigate = useNavigate();
    return (
        <main className="flex-1 overflow-y-auto p-lg md:p-xl custom-scroll relative bg-background">
            <div className="max-w-container-max mx-auto h-full flex flex-col">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-md mb-xl shrink-0">
                    <div>
                        <div className="flex items-center gap-md mb-sm">
                            <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface tracking-tight">상품 목록</h2>
                            <span className="font-label-caps text-label-caps bg-surface-variant text-on-surface-variant px-sm py-[4px] rounded-md border border-outline-variant flex items-center gap-xs shadow-sm">
                                <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>api</span>
                                GET /products
                            </span>
                        </div>
                        <p className="font-body-md text-body-md text-on-surface-variant">전체 1,240개의 등록된 상품을 관리합니다.</p>
                    </div>
                    <button className="bg-primary-container text-on-primary font-title-sm text-title-sm px-lg py-[10px] rounded-lg shadow-sm hover:shadow-md transition-all flex items-center gap-sm self-start md:self-auto active:scale-95" onClick={() => navigate('/store')}>
                        <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>add</span>
                        스토어 뷰
                    </button>
                </div>
                <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md mb-xl shadow-sm flex flex-col lg:flex-row gap-md shrink-0">
                    <div className="flex-1 relative input-glow transition-all rounded-lg">
                        <span className="material-symbols-outlined absolute left-md top-1/2 text-on-surface-variant pointer-events-none" style={{ transform: 'translateY(calc(-50% - 1px))' }}>search</span>
                        <input className="w-full pl-[44px] pr-md py-[10px] bg-transparent border border-outline-variant rounded-lg font-body-md text-body-md text-on-surface placeholder-on-surface-variant/70 focus:outline-none focus:border-transparent transition-colors" placeholder="상품명, SKU 또는 바코드 검색" type="text" />
                    </div>
                    <div className="flex gap-md w-full lg:w-auto overflow-x-auto pb-sm lg:pb-0 custom-scroll">
                        <div className="relative min-w-[140px] shrink-0">
                            <select className="w-full bg-transparent border border-outline-variant rounded-lg px-md py-[10px] font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all cursor-pointer">
                                <option value="">모든 카테고리</option>
                                <option value="electronics">전자기기</option>
                                <option value="accessories">액세서리</option>
                                <option value="lifestyle">라이프스타일</option>
                            </select>
                        </div>
                        <div className="relative min-w-[140px] shrink-0">
                            <select className="w-full bg-transparent border border-outline-variant rounded-lg px-md py-[10px] font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all cursor-pointer">
                                <option value="">재고 상태 전체</option>
                                <option value="in-stock">재고 있음</option>
                                <option value="low-stock">재고 부족</option>
                                <option value="out-of-stock">품절</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-lg pb-xl">
                    <Link to="/store-detail" className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md flex flex-col gap-md hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 group hover:-translate-y-1 block cursor-pointer">
                        <div className="flex justify-between items-start mb-xs">
                            <span className="font-label-caps text-label-caps text-on-surface-variant bg-surface-variant px-sm py-[2px] rounded">EL-2023</span>
                            <button className="text-on-surface-variant hover:bg-surface-container p-xs rounded" onClick={(e) => { e.preventDefault(); navigate('/admin/product-edit'); }}>
                                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>edit</span>
                            </button>
                        </div>
                        <div className="flex-1">
                            <h3 className="font-title-sm text-title-sm text-on-surface mb-xs line-clamp-2">무선 노이즈 캔슬링 블루투스 헤드폰 프로</h3>
                            <p className="font-body-sm text-body-sm text-on-surface-variant mb-md">전자기기 &gt; 오디오</p>
                            <div className="font-headline-md text-headline-md text-primary font-bold">₩349,000</div>
                        </div>
                        <div className="bg-surface flex items-center justify-between p-sm rounded-lg border border-outline-variant/50 mt-sm">
                            <div className="flex items-center gap-sm">
                                <span className="material-symbols-outlined text-on-surface-variant" style={{ fontSize: '18px' }}>inventory_2</span>
                                <span className="font-data-tabular text-data-tabular text-on-surface">1,240 개</span>
                            </div>
                            <span className="font-label-caps text-label-caps px-sm py-[4px] rounded-full bg-[#e6f4ea] text-[#137333] flex items-center gap-xs">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#137333]"></span>정상
                            </span>
                        </div>
                    </Link>
                    <Link to="/store-detail" className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md flex flex-col gap-md hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 group hover:-translate-y-1 block cursor-pointer">
                        <div className="flex justify-between items-start mb-xs">
                            <span className="font-label-caps text-label-caps text-on-surface-variant bg-surface-variant px-sm py-[2px] rounded">KB-M87</span>
                            <button className="text-on-surface-variant hover:bg-surface-container p-xs rounded" onClick={(e) => { e.preventDefault(); navigate('/admin/product-edit'); }}>
                                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>edit</span>
                            </button>
                        </div>
                        <div className="flex-1">
                            <h3 className="font-title-sm text-title-sm text-on-surface mb-xs line-clamp-2">기계식 키보드 텐키리스 적축 스위치</h3>
                            <p className="font-body-sm text-body-sm text-on-surface-variant mb-md">전자기기 &gt; 주변기기</p>
                            <div className="font-headline-md text-headline-md text-primary font-bold">₩145,000</div>
                        </div>
                        <div className="bg-error-container/30 flex items-center justify-between p-sm rounded-lg border border-error-container/50 mt-sm">
                            <div className="flex items-center gap-sm">
                                <span className="material-symbols-outlined text-error" style={{ fontSize: '18px' }}>warning</span>
                                <span className="font-data-tabular text-data-tabular text-error font-bold">12 개</span>
                            </div>
                            <span className="font-label-caps text-label-caps px-sm py-[4px] rounded-full bg-error-container text-on-error-container flex items-center gap-xs">
                                <span className="w-1.5 h-1.5 rounded-full bg-error"></span>재고 부족
                            </span>
                        </div>
                    </Link>
                    <Link to="/store-detail" className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md flex flex-col gap-md hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 group hover:-translate-y-1 block cursor-pointer">
                        <div className="flex justify-between items-start mb-xs">
                            <span className="font-label-caps text-label-caps text-on-surface-variant bg-surface-variant px-sm py-[2px] rounded">MN-274K</span>
                            <button className="text-on-surface-variant hover:bg-surface-container p-xs rounded" onClick={(e) => { e.preventDefault(); navigate('/admin/product-edit'); }}>
                                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>edit</span>
                            </button>
                        </div>
                        <div className="flex-1">
                            <h3 className="font-title-sm text-title-sm text-on-surface mb-xs line-clamp-2">27인치 4K UHD 전문가용 IPS 모니터</h3>
                            <p className="font-body-sm text-body-sm text-on-surface-variant mb-md">전자기기 &gt; 디스플레이</p>
                            <div className="font-headline-md text-headline-md text-primary font-bold">₩450,000</div>
                        </div>
                        <div className="bg-surface flex items-center justify-between p-sm rounded-lg border border-outline-variant/50 mt-sm">
                            <div className="flex items-center gap-sm">
                                <span className="material-symbols-outlined text-on-surface-variant" style={{ fontSize: '18px' }}>inventory_2</span>
                                <span className="font-data-tabular text-data-tabular text-on-surface">85 개</span>
                            </div>
                            <span className="font-label-caps text-label-caps px-sm py-[4px] rounded-full bg-[#e6f4ea] text-[#137333] flex items-center gap-xs">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#137333]"></span>정상
                            </span>
                        </div>
                    </Link>
                    <Link to="/store-detail" className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md flex flex-col gap-md hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 group hover:-translate-y-1 block cursor-pointer">
                        <div className="flex justify-between items-start mb-xs">
                            <span className="font-label-caps text-label-caps text-on-surface-variant bg-surface-variant px-sm py-[2px] rounded">AC-LS01</span>
                            <button className="text-on-surface-variant hover:bg-surface-container p-xs rounded" onClick={(e) => { e.preventDefault(); navigate('/admin/product-edit'); }}>
                                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>edit</span>
                            </button>
                        </div>
                        <div className="flex-1">
                            <h3 className="font-title-sm text-title-sm text-on-surface mb-xs line-clamp-2">알루미늄 접이식 노트북 스탠드 거치대</h3>
                            <p className="font-body-sm text-body-sm text-on-surface-variant mb-md">액세서리 &gt; 데스크테리어</p>
                            <div className="font-headline-md text-headline-md text-primary font-bold">₩32,000</div>
                        </div>
                        <div className="bg-surface flex items-center justify-between p-sm rounded-lg border border-outline-variant/50 mt-sm">
                            <div className="flex items-center gap-sm">
                                <span className="material-symbols-outlined text-on-surface-variant" style={{ fontSize: '18px' }}>inventory_2</span>
                                <span className="font-data-tabular text-data-tabular text-on-surface">320 개</span>
                            </div>
                            <span className="font-label-caps text-label-caps px-sm py-[4px] rounded-full bg-[#e6f4ea] text-[#137333] flex items-center gap-xs">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#137333]"></span>정상
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default ProductList;