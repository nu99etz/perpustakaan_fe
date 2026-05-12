export default function Pagination() {
    return (
        <div className="border-t border-slate-100 dark:border-slate-700 px-5 py-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-sm text-slate-500 dark:text-slate-400">
                Menampilkan <span className="font-medium text-slate-700 dark:text-slate-300">1</span> hingga <span className="font-medium text-slate-700 dark:text-slate-300">10</span> dari <span className="font-medium text-slate-700 dark:text-slate-300">97</span> hasil
            </span>
            <div className="flex items-center space-x-1">
                <button
                    className="px-3 py-1 text-sm border border-slate-200 dark:border-slate-700 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50 transition-colors"
                    disabled
                >
                    Sebelumnya
                </button>
                <button className="px-3 py-1 text-sm border border-slate-200 dark:border-slate-700 rounded-lg bg-indigo-50 text-indigo-600 font-medium dark:bg-indigo-900/30 dark:border-indigo-800/50 dark:text-indigo-400 transition-colors">
                    1
                </button>
                <button className="px-3 py-1 text-sm border border-slate-200 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                    2
                </button>
                <button className="px-3 py-1 text-sm border border-slate-200 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                    3
                </button>
                <span className="px-2 text-slate-400">...</span>
                <button className="px-3 py-1 text-sm border border-slate-200 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                    10
                </button>
                <button className="px-3 py-1 text-sm border border-slate-200 dark:border-slate-700 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                    Selanjutnya
                </button>
            </div>
        </div>
    );
}