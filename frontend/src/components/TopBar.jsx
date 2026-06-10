const TopBar = ({ title = "OMS", showSearch = false }) => {
    return (
        <header className="bg-surface border-b border-outline-variant shrink-0 z-10 flex-shrink-0">
            <div className="flex justify-between items-center w-full px-lg py-sm max-w-container-max mx-auto h-16">
                <div className="flex items-center gap-md">
                    <button className="md:hidden text-on-surface-variant hover:bg-surface-container p-sm rounded-full transition-colors">
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                    <div className="font-title-sm text-title-sm font-extrabold text-primary md:hidden">{title}</div>
                    {showSearch && (
                        <div className="relative hidden md:block w-64">
                            <span className="material-symbols-outlined absolute left-sm top-1/2 text-on-surface-variant text-[18px] pointer-events-none" style={{ transform: 'translateY(calc(-50% - 1px))' }}>search</span>
                            <input className="bg-surface-container-lowest border border-outline-variant text-body-sm font-body-sm rounded-lg pl-[36px] pr-md py-xs w-full focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" placeholder="통합 검색..." type="text" />
                        </div>
                    )}
                </div>
                <div className="flex items-center gap-sm">
                    <button className="text-on-surface-variant hover:bg-surface-container p-sm rounded-full transition-opacity duration-150 active:opacity-70 relative">
                        <span className="material-symbols-outlined">notifications</span>
                        <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full"></span>
                    </button>
                    <button className="text-on-surface-variant hover:bg-surface-container p-sm rounded-full transition-opacity duration-150 active:opacity-70">
                        <span className="material-symbols-outlined">help_outline</span>
                    </button>
                    <div className="w-8 h-8 rounded-full bg-surface-container-highest overflow-hidden border border-outline-variant ml-sm cursor-pointer">
                        <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                            <span className="material-symbols-outlined text-primary text-sm">person</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default TopBar;