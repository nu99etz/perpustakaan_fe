export default function Header() {
    return (
        <header className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-4 lg:px-8 py-4 flex items-center justify-between sticky top-0 z-20 transition-colors duration-300">
            <div>
                <h1 className="text-base lg:text-xl font-bold text-slate-800 dark:text-white">Dashboard</h1>
                <p className="text-xs text-slate-400 hidden sm:block">Senin, 27 April 2026</p>
            </div>
            <div className="flex items-center gap-2">
                {/* <!-- Search desktop --> */}
                <div className="hidden md:flex items-center gap-2 bg-slate-100 dark:bg-slate-700 rounded-xl px-3 py-2 text-sm text-slate-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803 7.5 7.5 0 0015.803 15.803z" /></svg>
                    Cari...
                </div>

                {/* <!-- Dark mode btn --> */}
                <button className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-700 flex items-center justify-center transition-colors" title="Toggle mode">
                    <svg id="hdr-moon" className="w-4 h-4 text-slate-600 dark:text-slate-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>
                    <svg id="hdr-sun" className="w-4 h-4 text-yellow-500 hidden" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>
                </button>

                {/* <!-- Notification bell --> */}
                <div className="relative">
                    <button id="notif-btn" className="relative w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-700 flex items-center justify-center transition-colors">
                        <svg className="w-4 h-4 text-slate-600 dark:text-slate-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" /></svg>
                        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                    </button>
                    {/* <!-- Notif Panel --> */}
                    <div id="notif-drop" className="drop closed absolute right-0 mt-2 w-80 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 z-50 overflow-hidden">
                        <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-700 flex items-center justify-between">
                            <h3 className="font-bold text-sm text-slate-800 dark:text-white">Notifikasi</h3>
                            <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/40 px-2 py-0.5 rounded-lg">3 baru</span>
                        </div>
                        <ul className="divide-y divide-slate-100 dark:divide-slate-700 max-h-72 overflow-y-auto">
                            <li className="flex gap-3 items-start px-4 py-3 bg-indigo-50/50 dark:bg-indigo-900/10 hover:bg-slate-50 dark:hover:bg-slate-700/50 cursor-pointer transition-colors">
                                <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <svg className="w-3.5 h-3.5 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126z" /></svg>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-semibold text-slate-800 dark:text-white">Stok hampir habis</p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Keyboard Mekanikal tersisa 3 unit</p>
                                    <p className="text-[10px] text-slate-400 mt-1">2 menit lalu</p>
                                </div>
                                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 flex-shrink-0"></div>
                            </li>
                            <li className="flex gap-3 items-start px-4 py-3 bg-indigo-50/50 dark:bg-indigo-900/10 hover:bg-slate-50 dark:hover:bg-slate-700/50 cursor-pointer transition-colors">
                                <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-semibold text-slate-800 dark:text-white">Pembayaran diterima</p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Pesanan #ORD-0820 telah lunas</p>
                                    <p className="text-[10px] text-slate-400 mt-1">14 menit lalu</p>
                                </div>
                                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 flex-shrink-0"></div>
                            </li>
                            <li className="flex gap-3 items-start px-4 py-3 bg-indigo-50/50 dark:bg-indigo-900/10 hover:bg-slate-50 dark:hover:bg-slate-700/50 cursor-pointer transition-colors">
                                <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <svg className="w-3.5 h-3.5 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-semibold text-slate-800 dark:text-white">Pengguna baru</p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Rina Aprilia baru saja mendaftar</p>
                                    <p className="text-[10px] text-slate-400 mt-1">1 jam lalu</p>
                                </div>
                                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 flex-shrink-0"></div>
                            </li>
                            <li className="flex gap-3 items-start px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-700/50 cursor-pointer transition-colors">
                                <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <svg className="w-3.5 h-3.5 text-amber-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" /></svg>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Laporan bulanan siap</p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Ekspor laporan April 2026</p>
                                    <p className="text-[10px] text-slate-400 mt-1">3 jam lalu</p>
                                </div>
                            </li>
                        </ul>
                        <div className="px-4 py-3 border-t border-slate-100 dark:border-slate-700 text-center">
                            <button className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">Lihat semua notifikasi</button>
                        </div>
                    </div>
                </div>

                {/* <!-- Avatar / Profile --> */}
                <div className="relative">
                    <button id="profile-btn" className="w-9 h-9 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-700 dark:text-indigo-300 font-bold text-sm hover:ring-2 ring-indigo-400 transition-all">
                        AK
                    </button>
                    {/* <!-- Profile Panel --> */}
                    <div id="profile-drop" className="drop closed absolute right-0 mt-2 w-72 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 z-50 overflow-hidden">
                        <div className="px-5 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-lg">AK</div>
                            <div>
                                <p className="font-bold text-white text-sm">Ahmad Kurniawan</p>
                                <p className="text-indigo-200 text-xs mt-0.5">admin@analytica.id</p>
                                <span className="text-[10px] bg-white/20 text-white px-2 py-0.5 rounded-full mt-1 inline-block">Super Admin</span>
                            </div>
                        </div>
                        <div className="py-1.5">
                            <a href="#" className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
                                Lihat Profil Saya
                            </a>
                            <a href="#" className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                Pengaturan Akun
                            </a>
                            <a href="#" className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" /></svg>
                                Bantuan &amp; Dukungan
                            </a>
                            {/* <!-- dark toggle inside profile --> */}
                            <div className="flex items-center justify-between px-4 py-2.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors cursor-pointer">
                                <div className="flex items-center gap-3">
                                    <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>
                                    Mode Gelap
                                </div>
                                <div className="tpill w-10 h-5 rounded-full bg-slate-200 dark:bg-indigo-600 relative pointer-events-none">
                                    <div className="tthumb absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow dark:translate-x-5"></div>
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-slate-100 dark:border-slate-700 py-1.5">
                            <a href="#" className="flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" /></svg>
                                Keluar
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}