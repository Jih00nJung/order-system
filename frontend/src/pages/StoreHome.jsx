import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const StoreHome = () => {
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
        <main className="flex-1 bg-surface py-xl px-md sm:px-lg md:px-xl overflow-y-auto">
            <div className="max-w-7xl mx-auto flex flex-col h-full">
                <div className="mb-xl">
                    <h1 className="font-display-lg text-display-lg text-on-surface mb-sm">전체 상품</h1>
                    <p className="font-body-md text-body-md text-on-surface-variant">최신 상품들을 만나보세요.</p>
                </div>
                <div className="flex justify-between items-center mb-lg pb-md border-b border-outline-variant">
                    <div className="text-body-sm font-body-sm text-on-surface-variant">총 {products.length}개 상품</div>
                    <select className="bg-surface border border-outline-variant rounded-md px-3 py-1.5 text-body-sm font-body-sm focus:outline-none focus:border-primary">
                        <option>인기순</option>
                        <option>신상품순</option>
                        <option>낮은 가격순</option>
                        <option>높은 가격순</option>
                    </select>
                </div>
                
                {loading ? (
                    <div className="flex justify-center py-xl">
                        <p>상품을 불러오는 중...</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-gutter">
                        {products.map((product) => (
                            <Link key={product.productId} to={`/store-detail?id=${product.productId}`} className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden group hover:shadow-md transition-shadow duration-300 flex flex-col cursor-pointer block">
                                <div className="relative aspect-square overflow-hidden bg-surface-container">
                                    <img alt="상품 이미지" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOnvYJq2ax6k__Yx4HRh26dAaj6SjdPrfACmFl4zUx9eLhbqsk46Tt3w0kEeYxPiOZIYGCfyA-kkG8KDgLW6O-B3Jp8dSykFE_XQph7tk8wTINyUCbMq6OLaO2DMX0U0XVAGHh1a_WujMGfNdFsrZrXXY_Qk-FdYlSy8ZrCvwAq4wEBh2eWlVoVDh45P3iT07KB2ghtenNusqlJ6x4UFZJgpq4wNrQNFRIwVhBLO1N1zSl_laubnagH_02wJhMWWneQ4ET0dDEF2A"/>
                                    <button className="absolute top-3 right-3 p-1.5 bg-surface-container-lowest/80 backdrop-blur-sm rounded-full text-on-surface-variant hover:text-error transition-colors" onClick={(e) => e.preventDefault()}>
                                        <span className="material-symbols-outlined text-[20px]">favorite</span>
                                    </button>
                                </div>
                                <div className="p-md flex flex-col flex-grow">
                                    <div className="text-label-caps font-label-caps text-primary mb-xs">일반상품</div>
                                    <h2 className="font-title-sm text-title-sm text-on-surface mb-xs line-clamp-2">{product.name}</h2>
                                    <div className="font-data-tabular text-data-tabular text-on-surface-variant mb-md flex-grow">₩ {product.price.toLocaleString()}</div>
                                    <button className="w-full py-2 bg-primary-container text-on-primary rounded-md font-title-sm text-title-sm hover:bg-primary transition-colors flex justify-center items-center gap-xs" onClick={(e) => { e.preventDefault(); navigate('/cart'); }}>
                                        <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
                                        장바구니 담기
                                    </button>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}

                <div className="mt-xl flex justify-center items-center gap-xs">
                    <button className="w-8 h-8 flex justify-center items-center rounded-md border border-outline-variant text-on-surface-variant hover:bg-surface-variant transition-colors disabled:opacity-50" disabled>
                        <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                    </button>
                    <button className="w-8 h-8 flex justify-center items-center rounded-md bg-primary text-on-primary font-body-sm font-semibold">1</button>
                    <button className="w-8 h-8 flex justify-center items-center rounded-md border border-outline-variant text-on-surface-variant hover:bg-surface-variant transition-colors font-body-sm">2</button>
                    <button className="w-8 h-8 flex justify-center items-center rounded-md border border-outline-variant text-on-surface-variant hover:bg-surface-variant transition-colors font-body-sm">3</button>
                    <button className="w-8 h-8 flex justify-center items-center rounded-md border border-outline-variant text-on-surface-variant hover:bg-surface-variant transition-colors">
                        <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                    </button>
                </div>
            </div>
        </main>
    )
}
export default StoreHome;