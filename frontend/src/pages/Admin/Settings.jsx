import React from 'react';
import {useLocation} from 'react-router-dom';
import StoreFooter from "../../components/StoreFooter";

const Settings = () => {
    const location = useLocation();
    const isAdmin = location.pathname.startsWith('/admin');

    const content = (
        <div className="max-w-200 mx-auto w-full">
            <header className="mb-xl">
                <h2 className="text-display-lg md:font-display-lg text-on-background">프로필
                    설정</h2>
                <p className="text-body-md font-body-md text-on-surface-variant mt-sm">계정의 기본 정보를 확인하고 수정할 수 있습니다.</p>
            </header>
            <div
                className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-md">
                <div
                    className="flex flex-col md:flex-row items-start md:items-center gap-xl pb-xl border-b border-outline-variant mb-xl">
                    <div className="relative group cursor-pointer">
                        <div
                            className="w-24 h-24 rounded-full bg-surface-container-highest border-2 border-outline-variant overflow-hidden flex items-center justify-center">
                            <span
                                className="material-symbols-outlined text-[48px] text-on-surface-variant">person</span>
                        </div>
                        <div
                            className="absolute inset-0 bg-on-background/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <span
                                className="material-symbols-outlined text-surface-container-lowest">photo_camera</span>
                        </div>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-headline-md font-headline-md text-on-surface mb-xs">김관리</h3>
                        <div
                            className="flex items-center gap-sm text-body-sm font-body-sm text-on-surface-variant mb-sm">
                            <span className="material-symbols-outlined text-[16px]">mail</span>
                            <span>admin@oms.system.com</span>
                        </div>
                        <div className="pt-lg border-t border-outline-variant flex justify-between items-center">
                            <div>
                                <h4 className="font-title-sm text-title-sm text-on-surface">비밀번호</h4>
                                <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">마지막 변경일: 30일
                                    전</p>
                            </div>
                            <button
                                className="bg-surface-container-lowest border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-all duration-200 px-md py-sm rounded-lg font-title-sm text-title-sm"
                                type="button">
                                비밀번호 변경
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    if (isAdmin) {
        return (
            <main className="flex-1 overflow-y-auto p-lg md:p-xl custom-scroll">
                {content}
            </main>
        );
    }

    return (
        <div className="flex flex-col min-h-screen">
            <main className="grow w-full max-w-container-max mx-auto px-lg py-xl custom-scroll">
                {content}
            </main>
            <StoreFooter/>
        </div>
    );
}

export default Settings;