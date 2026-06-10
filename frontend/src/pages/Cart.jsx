import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const navigate = useNavigate();

    return (
        <main className="flex-1 bg-surface py-xl px-md sm:px-lg md:px-xl overflow-y-auto">
            <div className="max-w-7xl mx-auto flex flex-col h-full">
                <div className="flex items-center gap-sm mb-lg">
                    <h1 className="font-display-lg text-display-lg text-on-background">장바구니</h1>
                    <span className="bg-surface-variant text-on-surface-variant rounded-full px-2 py-1 text-label-caps font-label-caps ml-xs mt-2">2 Items</span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl relative">
                    {/* Cart Content Area */}
                    <div className="lg:col-span-8 space-y-md">
                        {/* Controls */}
                        <div className="flex justify-between items-center bg-surface-container-lowest border border-outline-variant rounded-lg p-md shadow-sm">
                            <label className="flex items-center gap-sm cursor-pointer hover:opacity-80 transition-opacity">
                                <input defaultChecked className="form-checkbox h-5 w-5 text-primary rounded border-outline-variant focus:ring-primary focus:ring-2 focus:ring-offset-1 focus:ring-offset-surface-container-lowest" type="checkbox"/>
                                <span className="font-data-tabular text-data-tabular text-on-surface">전체 선택 (2/2)</span>
                            </label>
                            <button className="text-secondary font-data-tabular text-data-tabular bg-surface-container-lowest border border-outline-variant px-md py-xs rounded hover:bg-surface-variant transition-colors flex items-center gap-xs shadow-sm hover:shadow">
                                <span className="material-symbols-outlined text-[18px]">delete</span>
                                선택 삭제
                            </button>
                        </div>
                        {/* Cart Items List */}
                        <div className="bg-surface-container-lowest border border-outline-variant rounded-lg shadow-sm divide-y divide-outline-variant">
                            {/* Item 1 */}
                            <div className="p-lg flex flex-col sm:flex-row gap-lg group hover:bg-surface-container-low transition-colors duration-200">
                                <div className="flex items-start gap-sm">
                                    <input defaultChecked className="form-checkbox h-5 w-5 text-primary rounded border-outline-variant mt-sm focus:ring-primary focus:ring-2 focus:ring-offset-1 focus:ring-offset-surface-container-lowest" type="checkbox"/>
                                    <img alt="Product Image" className="w-24 h-24 object-cover rounded-md border border-outline-variant bg-surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCukPkZ2sTy1DSQTRx53k41qUdDMpBz2cjhYET7HNKFl0KSOl2swIj9tJHb_e7UWSRwCjDEhms6_Bb6Sbhy4Kz88tyWswTep2gfJUUHB-Isj7eF__aqQZfjAE6GreIXnikm6f5qSFLtGsYNEXpzyUlQ-OXl63yIK0eMAeLc6Yi3U9IV6UE8uAhfsMkQ31W82mbiVCjNUpE1dBiLLeSqbyZPxlsGGn1rf8e7cN2d2ug5wrvNhjJFIetDKSyXFEeJo2VaxXaB7gZagtI"/>
                                </div>
                                <div className="flex-grow flex flex-col justify-between">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="font-title-sm text-title-sm text-on-surface mb-xs">Premium Smart Watch Pro</h3>
                                            <p className="font-body-sm text-body-sm text-on-surface-variant mb-xs">Color: Alpine White | Size: 44mm</p>
                                            <p className="font-data-tabular text-data-tabular text-on-surface-variant line-through text-xs">₩ 350,000</p>
                                            <p className="font-title-sm text-title-sm text-on-background">₩ 299,000</p>
                                        </div>
                                        <button aria-label="Remove item" className="text-outline hover:text-error transition-colors p-1">
                                            <span className="material-symbols-outlined">close</span>
                                        </button>
                                    </div>
                                    <div className="flex justify-between items-end mt-md">
                                        <div className="flex items-center border border-outline-variant rounded bg-surface-container-lowest h-9">
                                            <button className="w-9 h-full flex items-center justify-center text-on-surface-variant hover:bg-surface-variant transition-colors border-r border-outline-variant"><span className="material-symbols-outlined text-[16px]">remove</span></button>
                                            <span className="w-12 text-center font-data-tabular text-data-tabular text-on-surface">1</span>
                                            <button className="w-9 h-full flex items-center justify-center text-on-surface-variant hover:bg-surface-variant transition-colors border-l border-outline-variant"><span className="material-symbols-outlined text-[16px]">add</span></button>
                                        </div>
                                        <div className="text-right">
                                            <span className="font-body-sm text-body-sm text-on-surface-variant mr-xs">Subtotal:</span>
                                            <span className="font-title-sm text-title-sm text-primary">₩ 299,000</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Item 2 */}
                            <div className="p-lg flex flex-col sm:flex-row gap-lg group hover:bg-surface-container-low transition-colors duration-200">
                                <div className="flex items-start gap-sm">
                                    <input defaultChecked className="form-checkbox h-5 w-5 text-primary rounded border-outline-variant mt-sm focus:ring-primary focus:ring-2 focus:ring-offset-1 focus:ring-offset-surface-container-lowest" type="checkbox"/>
                                    <img alt="Product Image" className="w-24 h-24 object-cover rounded-md border border-outline-variant bg-surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2E4zkxfWiM1cw5-Er3gWL79ilEx8PPonq-dCiGeqfNeAru8qdbBucqHnDselUcKgCIj3RT9m4sFik3-Q1BxTgK7AzmzWt6XgNXvynSkOfXk21g6oMyJZ-vy4CQ0giPRj64_9PEwtyz4RKeLcAKZcG1n-4VE76y6-YbXIffulFP2GYvyimvnJRCK8gSrAVxiP4pAlNgtyP-p9xxi0j7KYJC7B_15SZ_EFzaHB2wZQhLvLkXgyREPGT5b7QSyd5tkeIqG1u-MrkGpo"/>
                                </div>
                                <div className="flex-grow flex flex-col justify-between">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="font-title-sm text-title-sm text-on-surface mb-xs">Studio Noise Cancelling Headphones</h3>
                                            <p className="font-body-sm text-body-sm text-on-surface-variant mb-xs">Color: Matte Black</p>
                                            <p className="font-title-sm text-title-sm text-on-background">₩ 185,000</p>
                                        </div>
                                        <button aria-label="Remove item" className="text-outline hover:text-error transition-colors p-1">
                                            <span className="material-symbols-outlined">close</span>
                                        </button>
                                    </div>
                                    <div className="flex justify-between items-end mt-md">
                                        <div className="flex items-center border border-outline-variant rounded bg-surface-container-lowest h-9">
                                            <button className="w-9 h-full flex items-center justify-center text-on-surface-variant hover:bg-surface-variant transition-colors border-r border-outline-variant"><span className="material-symbols-outlined text-[16px]">remove</span></button>
                                            <span className="w-12 text-center font-data-tabular text-data-tabular text-on-surface">2</span>
                                            <button className="w-9 h-full flex items-center justify-center text-on-surface-variant hover:bg-surface-variant transition-colors border-l border-outline-variant"><span className="material-symbols-outlined text-[16px]">add</span></button>
                                        </div>
                                        <div className="text-right">
                                            <span className="font-body-sm text-body-sm text-on-surface-variant mr-xs">Subtotal:</span>
                                            <span className="font-title-sm text-title-sm text-primary">₩ 370,000</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Order Summary Sidebar */}
                    <div className="lg:col-span-4">
                        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-md p-lg sticky top-[88px]">
                            <h2 className="font-headline-md text-headline-md text-on-background mb-lg pb-sm border-b border-outline-variant">Order Summary</h2>
                            <div className="space-y-md mb-lg">
                                <div className="flex justify-between items-center">
                                    <span className="font-body-md text-body-md text-on-surface-variant">상품 금액</span>
                                    <span className="font-data-tabular text-data-tabular text-on-surface">₩ 669,000</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex flex-col">
                                        <span className="font-body-md text-body-md text-on-surface-variant">배송비</span>
                                        <span className="font-body-sm text-body-sm text-secondary text-xs mt-1">Free shipping over ₩ 50,000</span>
                                    </div>
                                    <span className="font-data-tabular text-data-tabular text-on-surface">₩ 0</span>
                                </div>
                                <div className="flex justify-between items-center pt-md border-t border-outline-variant mt-sm">
                                    <span className="font-title-sm text-title-sm text-on-background">결제 예정 금액</span>
                                    <span className="font-display-lg-mobile text-display-lg-mobile text-primary">₩ 669,000</span>
                                </div>
                            </div>
                            <button className="w-full bg-primary hover:bg-surface-tint text-on-primary font-title-sm text-title-sm py-3 px-4 rounded-lg shadow transition-all hover:shadow-md active:scale-[0.98] flex justify-center items-center gap-sm" onClick={() => navigate('/payment')}>
                                주문하기
                                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                            </button>
                            <p className="font-body-sm text-body-sm text-on-surface-variant text-center mt-md flex items-center justify-center gap-xs">
                                <span className="material-symbols-outlined text-[16px] text-secondary">lock</span>
                                Secure SSL Checkout
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Cart;
