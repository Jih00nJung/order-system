import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const ProductList = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/product/list')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch products:", err);
                setLoading(false);
            });
    }, []);

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
                        <p className="font-body-md text-body-md text-on-surface-variant">전체 {products.length}개의 등록된 상품을 관리합니다.</p>
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
                
                {loading ? (
                    <div className="flex justify-center py-xl">
                        <p>상품을 불러오는 중...</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-lg pb-xl">
                        {products.map((product) => (
                            <Link key={product.productId} to={`/store-detail?id=${product.productId}`} className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md flex flex-col gap-md hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 group hover:-translate-y-1 block cursor-pointer">
                                <div className="flex justify-between items-start mb-xs">
                                    <span className="font-label-caps text-label-caps text-on-surface-variant bg-surface-variant px-sm py-[2px] rounded">PRD-{product.productId}</span>
                                    <button className="text-on-surface-variant hover:bg-surface-container p-xs rounded" onClick={(e) => { e.preventDefault(); navigate(`/admin/product-edit?id=${product.productId}`); }}>
                                        <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>edit</span>
                                    </button>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-title-sm text-title-sm text-on-surface mb-xs line-clamp-2">{product.name}</h3>
                                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-md">{product.sellerNickname || '일반상품'}</p>
                                    <div className="font-headline-md text-headline-md text-primary font-bold">₩{product.price.toLocaleString()}</div>
                                </div>
                                <div className={`flex items-center justify-between p-sm rounded-lg border mt-sm ${product.stock > 10 ? 'bg-surface border-outline-variant/50' : 'bg-error-container/30 border-error-container/50'}`}>
                                    <div className="flex items-center gap-sm">
                                        <span className={`material-symbols-outlined ${product.stock > 10 ? 'text-on-surface-variant' : 'text-error'}`} style={{ fontSize: '18px' }}>
                                            {product.stock > 10 ? 'inventory_2' : 'warning'}
                                        </span>
                                        <span className={`font-data-tabular text-data-tabular ${product.stock > 10 ? 'text-on-surface' : 'text-error font-bold'}`}>
                                            {product.stock} 개
                                        </span>
                                    </div>
                                    <span className={`font-label-caps text-label-caps px-sm py-[4px] rounded-full flex items-center gap-xs ${product.stock > 10 ? 'bg-[#e6f4ea] text-[#137333]' : 'bg-error-container text-on-error-container'}`}>
                                        <span className={`w-1.5 h-1.5 rounded-full ${product.stock > 10 ? 'bg-[#137333]' : 'bg-error'}`}></span>
                                        {product.stock > 10 ? '정상' : (product.stock > 0 ? '재고 부족' : '품절')}
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
};

export default ProductList;