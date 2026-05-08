export default function BottomNav() {
    return (
        <nav className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 transition-colors duration-300">
            <div className="flex items-center justify-around px-1 py-2">

                {/* <!-- Beranda --> */}
                <button className="bnav-item active flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-xl">
                    <svg className="bnav-icon w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>
                    <span className="bnav-label text-[9px]">Beranda</span>
                </button>

                {/* <!-- Notifikasi --> */}
                <button className="bnav-item relative flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-xl">
                    <svg className="bnav-icon w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" /></svg>
                    <span className="bnav-label text-[9px]">Notifikasi</span>
                    <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[8px] font-bold rounded-full flex items-center justify-center">3</span>
                </button>

                {/* <!-- FAB --> */}
                <button className="flex-shrink-0 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg shadow-indigo-300 dark:shadow-indigo-900 -mt-5" style={{ width: '50px', height: '50px' }} >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
                </button>

                {/* <!-- Profil --> */}
                <button className="bnav-item flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-xl">
                    <svg className="bnav-icon w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
                    <span className="bnav-label text-[9px]">Profil</span>
                </button>

                {/* <!-- Dark Mode --> */}
                <button className="bnav-item flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-xl">
                    <svg id="bn-moon" className="bnav-icon w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>
                    <svg id="bn-sun" className="bnav-icon w-5 h-5 hidden" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>
                    <span className="bnav-label text-[9px]" id="bn-label">Gelap</span>
                </button>

            </div>
        </nav>
    );
}