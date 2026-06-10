import { Link, useLocation } from 'react-router-dom';

const SideNav = () => {
    const location = useLocation();
    const isAdmin = location.pathname.startsWith('/admin');

    const adminMenus = [
        { name: '대시보드', path: '/admin/dashboard', icon: 'dashboard' },
        { name: '상품 관리', path: '/admin/products', icon: 'inventory_2' },
        { name: '주문 관리', path: '/admin/orders', icon: 'shopping_cart' },
        { name: '설정', path: '/admin/settings', icon: 'settings' }
    ];

    const userMenus = [
        { name: '상품 목록', path: '/store', icon: 'storefront' },
        { name: '장바구니', path: '/cart', icon: 'shopping_cart' },
        { name: '주문 내역', path: '/mypage-orders', icon: 'receipt_long' },
        { name: '배송 조회', path: '/shipments', icon: 'local_shipping' },
        { name: '설정', path: '/settings', icon: 'settings' }
    ];

    const menus = isAdmin ? adminMenus : userMenus;

    return (
        <nav
            className="bg-surface-container-lowest border-r border-outline-variant flex flex-col h-screen sticky top-0 w-64 shrink-0 hidden md:flex z-20 transition-all duration-200">
            <div className="p-lg pb-sm border-b border-outline-variant/30">
                <div className="flex items-center gap-sm px-md py-md mb-md">
                    <span className="material-symbols-outlined text-primary text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>deployed_code</span>
                    <span className="font-title-md text-title-md text-on-surface">OMS 시스템</span>
                </div>
            </div>
            
            <ul className="flex flex-col gap-sm p-md flex-1 overflow-y-auto">
                {menus.map((menu) => {
                    const isActive = location.pathname.startsWith(menu.path);
                    return (
                        <li key={menu.path}>
                            <Link 
                                to={menu.path} 
                                className={`flex items-center gap-md px-md py-sm rounded-lg transition-all duration-200 group ${
                                    isActive 
                                        ? 'bg-secondary-container text-on-secondary-container font-bold active:scale-95' 
                                        : 'text-on-surface-variant hover:bg-surface-container-high font-body-md text-body-md'
                                }`}
                            >
                                <span className={`material-symbols-outlined ${isActive ? 'icon-fill' : 'group-hover:text-primary transition-colors'}`}>
                                    {menu.icon}
                                </span>
                                {menu.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
            
            <div className="p-md border-t border-outline-variant/30">
                <Link to={isAdmin ? "/admin/settings" : "/settings"}
                      className="flex items-center gap-md px-md py-sm rounded-lg hover:bg-surface-container-high cursor-pointer transition-colors">
                    <div
                        className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center border border-outline-variant overflow-hidden">
                        <span className="material-symbols-outlined text-on-surface-variant text-[18px]">person</span>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="font-body-sm text-body-sm text-on-surface truncate font-medium">
                            {isAdmin ? '김관리 매니저' : '일반 사용자'}
                        </p>
                    </div>
                </Link>
            </div>
        </nav>
    );
};

export default SideNav;