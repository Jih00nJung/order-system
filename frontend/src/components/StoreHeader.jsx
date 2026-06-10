import { Link, useNavigate } from 'react-router-dom';

const StoreHeader = () => {
    const navigate = useNavigate();
    return (
        <header className="w-full top-0 sticky bg-surface border-b border-outline-variant shadow-sm z-50">
            <div className="flex flex-col md:flex-row justify-between items-center px-lg py-md max-w-container-max mx-auto w-full gap-md md:gap-lg">
                <div className="flex items-center w-full md:w-auto gap-lg justify-between md:justify-start">
                    <Link to="/store" className="text-headline-md font-headline-md text-primary">Efficient Flow</Link>
                    <div className="relative hidden md:block w-64">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
                        <input className="w-full pl-10 pr-4 py-2 bg-surface-container border border-outline-variant rounded-full focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 text-body-sm font-body-sm transition-all" placeholder="상품 검색..." type="text" />
                    </div>
                </div>
                <nav className="hidden md:flex items-center gap-lg">
                    <Link to="/store" className="text-primary font-title-sm border-b-2 border-primary pb-1 cursor-pointer active:opacity-70">Shop</Link>
                    <a className="text-on-surface-variant font-body-md hover:text-primary transition-colors duration-200 cursor-pointer active:opacity-70">Categories</a>
                    <a className="text-on-surface-variant font-body-md hover:text-primary transition-colors duration-200 cursor-pointer active:opacity-70">Deals</a>
                    <Link to="/mypage-orders" className="text-on-surface-variant font-body-md hover:text-primary transition-colors duration-200 cursor-pointer active:opacity-70">Orders</Link>
                </nav>
                <div className="flex items-center gap-md">
                    <button className="p-2 rounded-full hover:bg-surface-variant transition-colors text-on-surface-variant" onClick={() => navigate('/payment')}>
                        <span className="material-symbols-outlined">shopping_cart</span>
                    </button>
                    <button className="p-2 rounded-full hover:bg-surface-variant transition-colors text-on-surface-variant" onClick={() => navigate('/mypage-orders')}>
                        <span className="material-symbols-outlined">account_circle</span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default StoreHeader;