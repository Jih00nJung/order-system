import {useNavigate, Link} from 'react-router-dom';

const StoreHome = () => {
    const navigate = useNavigate();
    return (
        <main className="flex-1 bg-surface py-xl px-md sm:px-lg md:px-xl overflow-y-auto">
            <div className="max-w-7xl mx-auto flex flex-col h-full">
                <div className="mb-xl">
                    <h1 className="font-display-lg text-display-lg text-on-surface mb-sm">전체 상품</h1>
                    <p className="font-body-md text-body-md text-on-surface-variant">최신 상품들을 만나보세요.</p>
                </div>
                <div className="flex justify-between items-center mb-lg pb-md border-b border-outline-variant">
                    <div className="text-body-sm font-body-sm text-on-surface-variant">총 24개 상품</div>
                    <select className="bg-surface border border-outline-variant rounded-md px-3 py-1.5 text-body-sm font-body-sm focus:outline-none focus:border-primary">
                        <option>인기순</option>
                        <option>신상품순</option>
                        <option>낮은 가격순</option>
                        <option>높은 가격순</option>
                    </select>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-gutter">
                    <Link to="/store-detail" className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden group hover:shadow-md transition-shadow duration-300 flex flex-col cursor-pointer block">
                        <div className="relative aspect-square overflow-hidden bg-surface-container">
                            <img alt="상품 이미지" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOnvYJq2ax6k__Yx4HRh26dAaj6SjdPrfACmFl4zUx9eLhbqsk46Tt3w0kEeYxPiOZIYGCfyA-kkG8KDgLW6O-B3Jp8dSykFE_XQph7tk8wTINyUCbMq6OLaO2DMX0U0XVAGHh1a_WujMGfNdFsrZrXXY_Qk-FdYlSy8ZrCvwAq4wEBh2eWlVoVDh45P3iT07KB2ghtenNusqlJ6x4UFZJgpq4wNrQNFRIwVhBLO1N1zSl_laubnagH_02wJhMWWneQ4ET0dDEF2A"/>
                            <button className="absolute top-3 right-3 p-1.5 bg-surface-container-lowest/80 backdrop-blur-sm rounded-full text-on-surface-variant hover:text-error transition-colors" onClick={(e) => e.preventDefault()}>
                                <span className="material-symbols-outlined text-[20px]">favorite</span>
                            </button>
                        </div>
                        <div className="p-md flex flex-col flex-grow">
                            <div className="text-label-caps font-label-caps text-primary mb-xs">전자기기</div>
                            <h2 className="font-title-sm text-title-sm text-on-surface mb-xs line-clamp-2">프리미엄 스마트 워치 시리즈 7</h2>
                            <div className="font-data-tabular text-data-tabular text-on-surface-variant mb-md flex-grow">₩ 350,000</div>
                            <button className="w-full py-2 bg-primary-container text-on-primary rounded-md font-title-sm text-title-sm hover:bg-primary transition-colors flex justify-center items-center gap-xs" onClick={(e) => { e.preventDefault(); navigate('/cart'); }}>
                                <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
                                장바구니 담기
                            </button>
                        </div>
                    </Link>
                    <Link to="/store-detail" className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden group hover:shadow-md transition-shadow duration-300 flex flex-col cursor-pointer block">
                        <div className="relative aspect-square overflow-hidden bg-surface-container">
                            <img alt="상품 이미지" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuApjCrspS8FJdtFwn1QIjS2kjBey5ayVszOGRoCME4koOeyiVIHjfHVy3Dx30fMw6BfPcYBGBFhpfwV3gJWhQvFdWgo83yLyOg9V20k6vSu0429DXbQPgjgIz6SDe4unpb144o1PyAbbPz2rQPDQ6lP8CgfL51JXlPNlXxdVl2NvR_pzazBKCV1UVaPBupGwGTu5HC7u1lQqiL--THU4rzt9i_YD22F8nXLMurB-9Zj361h7Kw0kzIef-FK9E39PvY2yrNm-OaMo5M"/>
                            <button className="absolute top-3 right-3 p-1.5 bg-surface-container-lowest/80 backdrop-blur-sm rounded-full text-on-surface-variant hover:text-error transition-colors" onClick={(e) => e.preventDefault()}>
                                <span className="material-symbols-outlined text-[20px]">favorite</span>
                            </button>
                        </div>
                        <div className="p-md flex flex-col flex-grow">
                            <div className="text-label-caps font-label-caps text-primary mb-xs">음향기기</div>
                            <h2 className="font-title-sm text-title-sm text-on-surface mb-xs line-clamp-2">노이즈 캔슬링 무선 헤드폰</h2>
                            <div className="font-data-tabular text-data-tabular text-on-surface-variant mb-md flex-grow">₩ 280,000</div>
                            <button className="w-full py-2 bg-primary-container text-on-primary rounded-md font-title-sm text-title-sm hover:bg-primary transition-colors flex justify-center items-center gap-xs" onClick={(e) => { e.preventDefault(); navigate('/cart'); }}>
                                <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
                                장바구니 담기
                            </button>
                        </div>
                    </Link>
                    <Link to="/store-detail" className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden group hover:shadow-md transition-shadow duration-300 flex flex-col cursor-pointer block">
                        <div className="relative aspect-square overflow-hidden bg-surface-container">
                            <img alt="상품 이미지" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwVnqaLm50PoofKB2v0Z8Uf6XESja7l2y4NXOw-jlGorsr2nVaCZHW9zFK8Rxl97wkfg79C41xbw3tPhHi9tXR_SmWR6OmuzWbWIC556HWe7cGOIl4BUASuGRoRSrWvAEQAgerZB_HbL6HurH2UKAbKzQFiqW0ol9kppJO1ps8V7PzhU896cohvrZ73kO58zMGSUm43A7oK8dAdtWqktvg74WQ_MgqKAlX9y-_yzcSEMLWyrlxo6F0HezQxMAdZ1JjSCTdHDrcdpk"/>
                            <button className="absolute top-3 right-3 p-1.5 bg-surface-container-lowest/80 backdrop-blur-sm rounded-full text-on-surface-variant hover:text-error transition-colors" onClick={(e) => e.preventDefault()}>
                                <span className="material-symbols-outlined text-[20px]">favorite</span>
                            </button>
                        </div>
                        <div className="p-md flex flex-col flex-grow">
                            <div className="text-label-caps font-label-caps text-primary mb-xs">라이프스타일</div>
                            <h2 className="font-title-sm text-title-sm text-on-surface mb-xs line-clamp-2">미니멀 세라믹 머그컵 세트</h2>
                            <div className="font-data-tabular text-data-tabular text-on-surface-variant mb-md flex-grow">₩ 32,000</div>
                            <button className="w-full py-2 bg-primary-container text-on-primary rounded-md font-title-sm text-title-sm hover:bg-primary transition-colors flex justify-center items-center gap-xs" onClick={(e) => { e.preventDefault(); navigate('/cart'); }}>
                                <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
                                장바구니 담기
                            </button>
                        </div>
                    </Link>
                    <Link to="/store-detail" className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden group hover:shadow-md transition-shadow duration-300 flex flex-col cursor-pointer block">
                        <div className="relative aspect-square overflow-hidden bg-surface-container">
                            <img alt="상품 이미지" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkD000nH529aFpY-ml9LjpRRX89hZCHpc5r1nzqEC9man6s1GO5cOADJe7csYEnKmY58wrUzIjsGkHqnygm1DtqZymjgmMs-I7o2Tq2pgDPZzThfBn_As3jNmOQiJrwnJPLdbfO22gxYZeWaOgHsjiNIPn3W5XFCiAKFVsYTH5-rwOUwHWMCi0uSoTXXQl7QOQbBea4hedi9YyZFdUeelS9ROxeZHGWLzp2P87I_Cjh-LmUZj_teyx7XGjEgcCnhObk2dANb0oYOo"/>
                            <button className="absolute top-3 right-3 p-1.5 bg-surface-container-lowest/80 backdrop-blur-sm rounded-full text-on-surface-variant hover:text-error transition-colors" onClick={(e) => e.preventDefault()}>
                                <span className="material-symbols-outlined text-[20px]">favorite</span>
                            </button>
                        </div>
                        <div className="p-md flex flex-col flex-grow">
                            <div className="text-label-caps font-label-caps text-primary mb-xs">카메라</div>
                            <h2 className="font-title-sm text-title-sm text-on-surface mb-xs line-clamp-2">클래식 폴라로이드 카메라</h2>
                            <div className="font-data-tabular text-data-tabular text-on-surface-variant mb-md flex-grow">₩ 145,000</div>
                            <button className="w-full py-2 bg-primary-container text-on-primary rounded-md font-title-sm text-title-sm hover:bg-primary transition-colors flex justify-center items-center gap-xs" onClick={(e) => { e.preventDefault(); navigate('/cart'); }}>
                                <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
                                장바구니 담기
                            </button>
                        </div>
                    </Link>
                    <Link to="/store-detail" className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden group hover:shadow-md transition-shadow duration-300 flex flex-col cursor-pointer block">
                        <div className="relative aspect-square overflow-hidden bg-surface-container">
                            <img alt="상품 이미지" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGM9D63kkALD8qsYQkhcGSueysT1A5g8UXT7ujqMe6vFD1jeLr1yQI1unAzlvUBd9rdAXMr-hjS_n-gb8wmdFFhNUf3H12thufhz2tGx9O24ImWxOxQQWaaw8E2dMOHQVrbcLTp2X25tXjk32ohiJIfBdwOGxdu5Jm6W-H8_3Y_sHoK1uYd4BNWbJimala7-qcm7cF6GBSpOwFvR9ewJt82m3gw99FkywZ9jkVLoaR444HB0wa768RjusMvnecKib8as9gQo1PuGE"/>
                            <button className="absolute top-3 right-3 p-1.5 bg-surface-container-lowest/80 backdrop-blur-sm rounded-full text-on-surface-variant hover:text-error transition-colors" onClick={(e) => e.preventDefault()}>
                                <span className="material-symbols-outlined text-[20px]">favorite</span>
                            </button>
                        </div>
                        <div className="p-md flex flex-col flex-grow">
                            <div className="text-label-caps font-label-caps text-primary mb-xs">신발</div>
                            <h2 className="font-title-sm text-title-sm text-on-surface mb-xs line-clamp-2">초경량 런닝화 레드 에디션</h2>
                            <div className="font-data-tabular text-data-tabular text-on-surface-variant mb-md flex-grow">₩ 129,000</div>
                            <button className="w-full py-2 bg-primary-container text-on-primary rounded-md font-title-sm text-title-sm hover:bg-primary transition-colors flex justify-center items-center gap-xs" onClick={(e) => { e.preventDefault(); navigate('/cart'); }}>
                                <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
                                장바구니 담기
                            </button>
                        </div>
                    </Link>
                </div>
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