import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const ProductEdit = () => {
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState(true);

    return (
        <div className="flex-1 flex flex-col relative pb-20 overflow-y-auto custom-scroll">
            <main className="flex-1 p-lg md:p-xl max-w-container-max mx-auto w-full">
                {/* Page Header */}
                <div className="flex items-center gap-md mb-xl">
                    <button onClick={() => navigate(-1)} className="text-secondary hover:text-primary transition-colors flex items-center justify-center p-2 rounded-full hover:bg-surface-container-low">
                        <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0"}}>arrow_back</span>
                    </button>
                    <div>
                        <h1 className="font-display-lg text-display-lg text-on-surface">상품 수정 (Edit Product)</h1>
                        <p className="font-body-md text-body-md text-on-surface-variant mt-1">상품 정보 및 재고, 가격을 수정합니다.</p>
                    </div>
                </div>
                {/* Form Layout */}
                <form className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
                    {/* Left Column: General & Media */}
                    <div className="lg:col-span-8 space-y-lg">
                        {/* General Information Card */}
                        <div className="bg-white rounded-lg border border-outline-variant shadow-sm overflow-hidden">
                            <div className="px-lg py-md border-b border-outline-variant bg-surface-container-lowest">
                                <h2 className="font-title-sm text-title-sm text-on-surface">기본 정보 (General Information)</h2>
                            </div>
                            <div className="p-lg space-y-md">
                                <div>
                                    <label className="block font-label-caps text-label-caps text-on-surface-variant mb-2">상품명 (Product Name) <span className="text-error">*</span></label>
                                    <input className="w-full px-md py-2 border border-outline-variant rounded-lg font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" type="text" defaultValue="무선 노이즈 캔슬링 블루투스 헤드폰 프로"/>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                                    <div>
                                        <label className="block font-label-caps text-label-caps text-on-surface-variant mb-2">SKU <span className="text-error">*</span></label>
                                        <input className="w-full px-md py-2 border border-outline-variant rounded-lg font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-surface-container-lowest cursor-not-allowed" readOnly type="text" defaultValue="NC-HP-PRO-BLK"/>
                                    </div>
                                    <div>
                                        <label className="block font-label-caps text-label-caps text-on-surface-variant mb-2">카테고리 (Category) <span className="text-error">*</span></label>
                                        <div className="relative">
                                            <select className="w-full px-md py-2 border border-outline-variant rounded-lg font-body-md text-body-md text-on-surface appearance-none focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white">
                                                <option>가전/디지털 &gt; 음향기기 &gt; 헤드폰</option>
                                                <option>가전/디지털 &gt; 음향기기 &gt; 이어폰</option>
                                                <option>가전/디지털 &gt; 모바일 액세서리</option>
                                            </select>
                                            <span className="material-symbols-outlined absolute right-md top-1/2 -translate-y-1/2 text-outline pointer-events-none" style={{fontVariationSettings: "'FILL' 0"}}>expand_more</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label className="block font-label-caps text-label-caps text-on-surface-variant mb-2">상세 설명 (Description)</label>
                                    <textarea className="w-full px-md py-sm border border-outline-variant rounded-lg font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-y" rows="6" defaultValue={"최고의 노이즈 캔슬링 기술이 적용된 프리미엄 무선 블루투스 헤드폰입니다.\n- 40mm 커스텀 드라이버 탑재\n- 최대 40시간 연속 재생 배터리\n- 주변 소리 듣기 모드 지원\n- 멀티포인트 연결 지원"}></textarea>
                                </div>
                            </div>
                        </div>
                        {/* Media Card */}
                        <div className="bg-white rounded-lg border border-outline-variant shadow-sm overflow-hidden">
                            <div className="px-lg py-md border-b border-outline-variant bg-surface-container-lowest">
                                <h2 className="font-title-sm text-title-sm text-on-surface">미디어 (Media)</h2>
                            </div>
                            <div className="p-lg">
                                <div className="border-2 border-dashed border-outline-variant rounded-lg p-xl flex flex-col items-center justify-center text-center bg-surface-container-low hover:bg-surface-container-high transition-colors cursor-pointer">
                                    <span className="material-symbols-outlined text-outline text-4xl mb-sm" style={{fontVariationSettings: "'FILL' 0"}}>cloud_upload</span>
                                    <p className="font-body-md text-body-md text-on-surface mb-1">이미지를 드래그하거나 클릭하여 업로드하세요.</p>
                                    <p className="font-body-sm text-body-sm text-on-surface-variant">PNG, JPG up to 5MB</p>
                                </div>
                                <div className="mt-md flex gap-md overflow-x-auto pb-sm">
                                    <div className="relative w-24 h-24 rounded-lg border border-outline-variant overflow-hidden flex-shrink-0 group">
                                        <img alt="product preview" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbm-V447C2FgOm0dQtDHhK_-wRfFENPpv955V3NTRftZOITjz4mxLf56xIKQfFMW9JiA2JfsMX4KqksdpUmyS1Rz3f9clfiefFXqnknXTV_lxhIjd-KOEN_Tn5ZS7tLN6lQkMwQqEBC-S3oOxWlvks_0Au1TXlSiVLs3DnkcMZ8mSQ888vXejQ00zKqTPygjwBFugU2Hp9sbMqsYHNzh1_Vqt2SY1qg5DOOVdQO0oAJ2KnTIh66CyzLNbHsk0R7vNCNH8K4vYZwyk"/>
                                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                            <button className="text-white hover:text-error" type="button"><span className="material-symbols-outlined text-sm">delete</span></button>
                                        </div>
                                        <div className="absolute top-1 left-1 bg-surface-container-lowest text-on-surface text-[10px] px-1 rounded font-label-caps border border-outline-variant">대표</div>
                                    </div>
                                    <div className="relative w-24 h-24 rounded-lg border border-outline-variant overflow-hidden flex-shrink-0 group">
                                        <img alt="product side preview" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCi_DHlntQRWn0OggAa4NwC0mKN5bUA7zKwe5kcKBSvQwauWR1z7sHHXWgOWEYbftiyt8Yowosi5CTHbZW5xbkHVpDtFk4_7oR4twHIOqfDY2FKuBwXoLUB2ph7Yo116kMgBEHwRJvR3RcDX-DP_kyby1ViOLQbwgDVB9bOxNmucGG5Ry8BUv-F5RYLu1kaciT_FGkM9dyR7LQRsXgkpDYq5-pdDkFqMIShkyqyzwQlx_3DxjkI3XKAWzQn16KBT8bhk8FDhtBAipU"/>
                                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                            <button className="text-white hover:text-error" type="button"><span className="material-symbols-outlined text-sm">delete</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right Column: Inventory, Pricing & Status */}
                    <div className="lg:col-span-4 space-y-lg">
                        {/* Status & Visibility Card */}
                        <div className="bg-white rounded-lg border border-outline-variant shadow-sm overflow-hidden">
                            <div className="px-lg py-md border-b border-outline-variant bg-surface-container-lowest">
                                <h2 className="font-title-sm text-title-sm text-on-surface">상태 (Status)</h2>
                            </div>
                            <div className="p-lg">
                                <div className="flex items-center justify-between p-sm border border-outline-variant rounded-lg bg-surface-container-low">
                                    <div className="flex items-center gap-sm">
                                        <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-primary-container' : 'bg-surface-variant'}`}></span>
                                        <span className="font-body-md text-body-md text-on-surface font-medium">{isActive ? '활성 (Active)' : '비활성 (Inactive)'}</span>
                                    </div>
                                    <button 
                                        type="button" 
                                        onClick={() => setIsActive(!isActive)}
                                        style={{ width: '44px', height: '24px', padding: '2px', backgroundColor: isActive ? '#004ac6' : '#e1e2ed', borderRadius: '9999px', display: 'flex', alignItems: 'center', transition: 'background-color 0.2s', border: 'none', cursor: 'pointer', outline: 'none' }}
                                    >
                                        <div style={{ width: '20px', height: '20px', backgroundColor: '#ffffff', borderRadius: '50%', transform: isActive ? 'translateX(20px)' : 'translateX(0)', transition: 'transform 0.2s', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }} />
                                    </button>
                                </div>
                                <p className="font-body-sm text-body-sm text-on-surface-variant mt-sm px-sm">상품이 스토어에 노출되고 구매 가능합니다.</p>
                            </div>
                        </div>
                        {/* Pricing Card */}
                        <div className="bg-white rounded-lg border border-outline-variant shadow-sm overflow-hidden">
                            <div className="px-lg py-md border-b border-outline-variant bg-surface-container-lowest">
                                <h2 className="font-title-sm text-title-sm text-on-surface">가격 (Pricing)</h2>
                            </div>
                            <div className="p-lg space-y-md">
                                <div>
                                    <label className="block font-label-caps text-label-caps text-on-surface-variant mb-2">판매가 (Price) <span className="text-error">*</span></label>
                                    <div className="relative flex items-center">
                                        <input className="w-full pl-md pr-10 py-2 border border-outline-variant rounded-lg font-data-tabular text-data-tabular text-on-surface text-right focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" type="text" defaultValue="349,000"/>
                                        <span className="absolute right-md text-on-surface-variant font-body-sm pointer-events-none">원</span>
                                    </div>
                                </div>
                                <div>
                                    <label className="block font-label-caps text-label-caps text-on-surface-variant mb-2">할인가 (Sale Price)</label>
                                    <div className="relative flex items-center">
                                        <input className="w-full pl-md pr-10 py-2 border border-outline-variant rounded-lg font-data-tabular text-data-tabular text-on-surface text-right focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" type="text" defaultValue="299,000"/>
                                        <span className="absolute right-md text-on-surface-variant font-body-sm pointer-events-none">원</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-sm pt-sm">
                                    <input defaultChecked className="w-4 h-4 text-primary border-outline-variant rounded focus:ring-primary" id="vat" type="checkbox"/>
                                    <label className="font-body-sm text-body-sm text-on-surface" htmlFor="vat">부가세(VAT) 포함</label>
                                </div>
                            </div>
                        </div>
                        {/* Inventory Card */}
                        <div className="bg-white rounded-lg border border-outline-variant shadow-sm overflow-hidden">
                            <div className="px-lg py-md border-b border-outline-variant bg-surface-container-lowest">
                                <h2 className="font-title-sm text-title-sm text-on-surface">재고 (Inventory)</h2>
                            </div>
                            <div className="p-lg space-y-md">
                                <div className="flex justify-between items-center bg-surface-container-low p-sm rounded-lg mb-md">
                                    <span className="font-body-sm text-body-sm text-on-surface-variant">현재 상태</span>
                                    <span className="bg-[#dcfce7] text-[#166534] px-2 py-0.5 rounded text-label-caps font-label-caps">In Stock</span>
                                </div>
                                <div>
                                    <label className="block font-label-caps text-label-caps text-on-surface-variant mb-2">현재 재고 <span className="text-error">*</span></label>
                                    <input className="w-full px-md py-2 border border-outline-variant rounded-lg font-data-tabular text-data-tabular text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" type="number" defaultValue="142"/>
                                </div>
                                <div>
                                    <label className="block font-label-caps text-label-caps text-on-surface-variant mb-2">안전 재고</label>
                                    <input className="w-full px-md py-2 border border-outline-variant rounded-lg font-data-tabular text-data-tabular text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" type="number" defaultValue="20"/>
                                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 text-xs">재고가 이 수량 이하로 떨어지면 경고가 표시됩니다.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </main>
            {/* Sticky Footer Action Bar */}
            <div className="fixed bottom-0 md:left-64 left-0 right-0 p-lg z-10 transition-all pointer-events-none">
                <div className="max-w-container-max mx-auto flex justify-end gap-md pointer-events-auto">
                    <button className="min-w-[100px] px-md py-2 border border-outline-variant rounded-lg bg-surface-container-lowest text-on-surface font-title-sm text-title-sm hover:bg-surface-container-low transition-colors shadow-sm active:scale-95 duration-150" type="button" onClick={() => navigate(-1)}>
                        취소
                    </button>
                    <button className="min-w-[100px] px-md py-2 rounded-lg bg-primary text-white font-title-sm text-title-sm hover:bg-primary-fixed-variant transition-colors shadow-sm active:scale-95 duration-150 flex items-center justify-center gap-2" type="submit">
                        <span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "'FILL' 1"}}>save</span>
                        저장
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductEdit;
