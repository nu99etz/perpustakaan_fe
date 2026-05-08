export default function Dashboard() {
    return (
        <div>
            {/* <!-- Banner --> */}
            <div className="bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl p-5 lg:p-6 flex items-center justify-between overflow-hidden relative mb-3">
                <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full bg-white opacity-5"></div>
                <div className="absolute right-10 bottom-0 w-24 h-24 rounded-full bg-white opacity-5"></div>
                <div>
                    <p className="text-indigo-200 text-sm mb-1">Selamat datang kembali 👋</p>
                    <h2 className="text-white font-bold text-lg lg:text-2xl">Ahmad Kurniawan</h2>
                    <p className="text-indigo-200 text-xs mt-1">Ringkasan performa bulan ini tersedia</p>
                </div>
                <button className="flex-shrink-0 bg-white text-indigo-600 text-xs font-semibold px-4 py-2 rounded-xl hover:bg-indigo-50 transition-colors">Lihat Laporan</button>
            </div>

            {/* <!-- Stat cards --> */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-3">
                <div className="stat-card bg-white dark:bg-slate-800 rounded-2xl p-4 border border-slate-100 dark:border-slate-700 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                        <div className="w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-900/40 flex items-center justify-center"><svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75" /></svg></div>
                        <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 dark:text-emerald-400 px-2 py-0.5 rounded-lg">+12%</span>
                    </div>
                    <p className="text-2xl font-bold text-slate-800 dark:text-white">Rp128M</p>
                    <p className="text-xs text-slate-400 mt-0.5">Total Pendapatan</p>
                </div>
                <div className="stat-card bg-white dark:bg-slate-800 rounded-2xl p-4 border border-slate-100 dark:border-slate-700 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                        <div className="w-9 h-9 rounded-xl bg-violet-50 dark:bg-violet-900/40 flex items-center justify-center"><svg className="w-4 h-4 text-violet-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg></div>
                        <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 dark:text-emerald-400 px-2 py-0.5 rounded-lg">+8%</span>
                    </div>
                    <p className="text-2xl font-bold text-slate-800 dark:text-white">3.421</p>
                    <p className="text-xs text-slate-400 mt-0.5">Total Pengguna</p>
                </div>
                <div className="stat-card bg-white dark:bg-slate-800 rounded-2xl p-4 border border-slate-100 dark:border-slate-700 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                        <div className="w-9 h-9 rounded-xl bg-amber-50 dark:bg-amber-900/40 flex items-center justify-center"><svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
                        <span className="text-xs font-semibold text-red-500 bg-red-50 dark:bg-red-900/30 dark:text-red-400 px-2 py-0.5 rounded-lg">-3%</span>
                    </div>
                    <p className="text-2xl font-bold text-slate-800 dark:text-white">847</p>
                    <p className="text-xs text-slate-400 mt-0.5">Pesanan Baru</p>
                </div>
                <div className="stat-card bg-white dark:bg-slate-800 rounded-2xl p-4 border border-slate-100 dark:border-slate-700 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                        <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-900/40 flex items-center justify-center"><svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg></div>
                        <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 dark:text-emerald-400 px-2 py-0.5 rounded-lg">+21%</span>
                    </div>
                    <p className="text-2xl font-bold text-slate-800 dark:text-white">1.204</p>
                    <p className="text-xs text-slate-400 mt-0.5">Produk Terjual</p>
                </div>
            </div>

            {/* <!-- Chart + Activity --> */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-2xl p-5 border border-slate-100 dark:border-slate-700 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-slate-800 dark:text-white">Pendapatan Bulanan</h3>
                        <select className="text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 border-0 rounded-lg px-2 py-1.5 outline-none"><option>2026</option><option>2025</option></select>
                    </div>
                    <div className="flex items-end gap-1.5 h-36 px-1" id="bar-chart"></div>
                    <div className="flex gap-1.5 mt-2 px-1" id="bar-labels"></div>
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 border border-slate-100 dark:border-slate-700 shadow-sm">
                    <h3 className="font-bold text-slate-800 dark:text-white mb-4">Aktivitas Terbaru</h3>
                    <ul className="space-y-3">
                        <li className="flex gap-3 items-start"><div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center text-indigo-700 dark:text-indigo-400 font-bold text-xs flex-shrink-0">BR</div><div><p className="text-sm text-slate-700 dark:text-slate-300 font-medium">Budi Raharjo</p><p className="text-xs text-slate-400">Pesanan baru #ORD-0821 · 2 mnt</p></div></li>
                        <li className="flex gap-3 items-start"><div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center text-emerald-700 dark:text-emerald-400 font-bold text-xs flex-shrink-0">SW</div><div><p className="text-sm text-slate-700 dark:text-slate-300 font-medium">Siti Wahyuni</p><p className="text-xs text-slate-400">Pembayaran dikonfirmasi · 14 mnt</p></div></li>
                        <li className="flex gap-3 items-start"><div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center text-amber-700 dark:text-amber-400 font-bold text-xs flex-shrink-0">DP</div><div><p className="text-sm text-slate-700 dark:text-slate-300 font-medium">Dimas Prasetyo</p><p className="text-xs text-slate-400">Produk ditambahkan · 32 mnt</p></div></li>
                        <li className="flex gap-3 items-start"><div className="w-8 h-8 rounded-full bg-violet-100 dark:bg-violet-900/40 flex items-center justify-center text-violet-700 dark:text-violet-400 font-bold text-xs flex-shrink-0">RA</div><div><p className="text-sm text-slate-700 dark:text-slate-300 font-medium">Rina Aprilia</p><p className="text-xs text-slate-400">Akun baru terdaftar · 1 jam</p></div></li>
                        <li className="flex gap-3 items-start"><div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/40 flex items-center justify-center text-red-700 dark:text-red-400 font-bold text-xs flex-shrink-0">FH</div><div><p className="text-sm text-slate-700 dark:text-slate-300 font-medium">Fajar Hidayat</p><p className="text-xs text-slate-400">Laporan dikirim · 2 jam</p></div></li>
                    </ul>
                </div>
            </div>

            {/* <!-- Orders table --> */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm overflow-hidden">
                <div className="px-5 py-4 flex items-center justify-between border-b border-slate-100 dark:border-slate-700">
                    <h3 className="font-bold text-slate-800 dark:text-white">Pesanan Terbaru</h3>
                    <a href="#" className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">Lihat Semua</a>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead><tr className="bg-slate-50 dark:bg-slate-700/50 text-left text-xs text-slate-400 uppercase tracking-wide">
                            <th className="px-5 py-3 font-semibold">ID Pesanan</th>
                            <th className="px-5 py-3 font-semibold">Pelanggan</th>
                            <th className="px-5 py-3 font-semibold hidden md:table-cell">Produk</th>
                            <th className="px-5 py-3 font-semibold">Total</th>
                            <th className="px-5 py-3 font-semibold">Status</th>
                        </tr></thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors"><td className="px-5 py-3 font-mono text-slate-500 text-xs">#ORD-0821</td><td className="px-5 py-3 font-medium text-slate-700 dark:text-slate-300">Budi Raharjo</td><td className="px-5 py-3 text-slate-500 dark:text-slate-400 hidden md:table-cell">Laptop Gaming Pro</td><td className="px-5 py-3 font-semibold text-slate-800 dark:text-white">Rp14.500.000</td><td className="px-5 py-3"><span className="bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs font-semibold px-2.5 py-1 rounded-lg">Diproses</span></td></tr>
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors"><td className="px-5 py-3 font-mono text-slate-500 text-xs">#ORD-0820</td><td className="px-5 py-3 font-medium text-slate-700 dark:text-slate-300">Siti Wahyuni</td><td className="px-5 py-3 text-slate-500 dark:text-slate-400 hidden md:table-cell">Headset Wireless</td><td className="px-5 py-3 font-semibold text-slate-800 dark:text-white">Rp875.000</td><td className="px-5 py-3"><span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-semibold px-2.5 py-1 rounded-lg">Selesai</span></td></tr>
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors"><td className="px-5 py-3 font-mono text-slate-500 text-xs">#ORD-0819</td><td className="px-5 py-3 font-medium text-slate-700 dark:text-slate-300">Dimas Prasetyo</td><td className="px-5 py-3 text-slate-500 dark:text-slate-400 hidden md:table-cell">Mouse Ergonomik</td><td className="px-5 py-3 font-semibold text-slate-800 dark:text-white">Rp320.000</td><td className="px-5 py-3"><span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-semibold px-2.5 py-1 rounded-lg">Selesai</span></td></tr>
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors"><td className="px-5 py-3 font-mono text-slate-500 text-xs">#ORD-0818</td><td className="px-5 py-3 font-medium text-slate-700 dark:text-slate-300">Rina Aprilia</td><td className="px-5 py-3 text-slate-500 dark:text-slate-400 hidden md:table-cell">Keyboard Mekanikal</td><td className="px-5 py-3 font-semibold text-slate-800 dark:text-white">Rp1.200.000</td><td className="px-5 py-3"><span className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-semibold px-2.5 py-1 rounded-lg">Dibatalkan</span></td></tr>
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors"><td className="px-5 py-3 font-mono text-slate-500 text-xs">#ORD-0817</td><td className="px-5 py-3 font-medium text-slate-700 dark:text-slate-300">Fajar Hidayat</td><td className="px-5 py-3 text-slate-500 dark:text-slate-400 hidden md:table-cell">Monitor 4K</td><td className="px-5 py-3 font-semibold text-slate-800 dark:text-white">Rp5.600.000</td><td className="px-5 py-3"><span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-semibold px-2.5 py-1 rounded-lg">Dikirim</span></td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}