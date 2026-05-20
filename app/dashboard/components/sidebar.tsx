'use client';
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function Sidebar() {

    const router = useRouter();

    const pathName = usePathname();
    const [isMasterOpen, setIsMasterOpen] = useState(pathName.includes('/dashboard/master'));

    return (
        <aside className="hidden lg:flex flex-col w-64 bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 fixed inset-y-0 left-0 z-20 transition-colors duration-300">
            <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-700 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                </div>
                <span className="font-bold text-slate-800 dark:text-white text-lg tracking-tight">Analytica</span>
            </div>
            <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
                <a href="#" onClick={() => router.push('/dashboard')} className={`nav-link ${pathName == '/dashboard' ? 'active' : ''} flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>
                    Dashboard
                </a>
                <button
                    onClick={() => setIsMasterOpen(!isMasterOpen)}
                    className={`w-full nav-link ${pathName.includes('/dashboard/master') ? 'active' : ''} flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors cursor-pointer`}
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 .621-.504 1.125-1.125 1.125h-2.25c-.621 0-1.125-.504-1.125-1.125V3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v3zM18.75 16.375c0 .621-.504 1.125-1.125 1.125h-2.25c-.621 0-1.125-.504-1.125-1.125v-3c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v3zM11.25 12.75c0 .621-.504 1.125-1.125 1.125H7.875c-.621 0-1.125-.504-1.125-1.125v-3c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v3zM11.25 21c0 .621-.504 1.125-1.125 1.125H7.875c-.621 0-1.125-.504-1.125-1.125v-3c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v3z" /></svg>
                    <span>Master Data</span>
                    <svg className={`w-4 h-4 ml-auto transition-transform duration-200 ${isMasterOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </button>

                <div className={`overflow-hidden transition-all duration-300 ${isMasterOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="pl-4 mt-1 space-y-1 border-l-2 border-slate-100 dark:border-slate-700 ml-5">
                        <a href="#" onClick={() => router.push('/dashboard/master/user')} className={`nav-link ${pathName == '/dashboard/master/user' ? 'active' : ''} flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-colors`}>
                            <div className={`w-1.5 h-1.5 rounded-full ${pathName == '/dashboard/master/user' ? 'bg-white' : 'bg-slate-400'}`}></div>
                            Pengguna
                        </a>
                        <a href="#" onClick={() => router.push('/dashboard/master/member')} className={`nav-link ${pathName == '/dashboard/master/member' ? 'active' : ''} flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-colors`}>
                            <div className={`w-1.5 h-1.5 rounded-full ${pathName == '/dashboard/master/member' ? 'bg-white' : 'bg-slate-400'}`}></div>
                            Member
                        </a>
                        <a href="#" onClick={() => router.push('/dashboard/master/book')} className={`nav-link ${pathName == '/dashboard/master/book' ? 'active' : ''} flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-colors`}>
                            <div className={`w-1.5 h-1.5 rounded-full ${pathName == '/dashboard/master/book' ? 'bg-white' : 'bg-slate-400'}`}></div>
                            Buku
                        </a>
                    </div>
                </div>
            </nav>
            <div className="px-4 py-4 border-t border-slate-100 dark:border-slate-700 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-700 dark:text-indigo-300 font-bold text-sm">AK</div>
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-slate-800 dark:text-white truncate">Ahmad Kurniawan</p>
                    <p className="text-xs text-slate-400 truncate">admin@analytica.id</p>
                </div>
                <svg className="w-4 h-4 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" /></svg>
            </div>
        </aside>
    );
}