'use client';
import { Paginate } from "@/app/type/Paginate";
import { useEffect, useState } from "react";

interface PaginationProps {
    pagination?: Paginate;
    callBack?: any
}

export default function Pagination({ pagination, callBack }: PaginationProps) {
    let totalPages = pagination?.totalPage ?? 0;
    let currentPage = pagination?.page ?? 1;
    let limit = pagination?.limit ?? 10;
    let totalData = pagination?.totalData ?? 0;

    // Calculate the range of items being shown
    let from = totalData === 0 ? 0 : (currentPage - 1) * limit + 1;
    let to = Math.min(currentPage * limit, totalData);

    return (
        <div className="border-t border-slate-100 dark:border-slate-700 px-5 py-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between w-full">
            <span className="text-sm text-slate-500 dark:text-slate-400">
                Menampilkan <span className="font-medium text-slate-700 dark:text-slate-300">{from}</span> hingga <span className="font-medium text-slate-700 dark:text-slate-300">{to}</span> dari <span className="font-medium text-slate-700 dark:text-slate-300">{totalData}</span> hasil
            </span>
            <div className="flex items-center space-x-1">
                <button
                    onClick={() => callBack(currentPage - 1, limit)}
                    className="px-3 py-1 text-sm border border-slate-200 dark:border-slate-700 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50 transition-colors"
                    disabled={currentPage <= 1}
                >
                    Sebelumnya
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                    <button
                        key={pageNumber}
                        onClick={() => callBack(pageNumber, limit)}
                        className={`px-3 py-1 text-sm border rounded-lg transition-colors ${pageNumber === currentPage
                            ? "bg-indigo-50 text-indigo-600 border-indigo-200 dark:bg-indigo-900/30 dark:border-indigo-800/50 dark:text-indigo-400 font-medium"
                            : "text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"
                            }`}
                    >
                        {pageNumber}
                    </button>
                ))}

                <button
                    onClick={() => callBack(currentPage + 1, limit)}
                    className="px-3 py-1 text-sm border border-slate-200 dark:border-slate-700 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50 transition-colors"
                    disabled={currentPage >= totalPages}
                >
                    Selanjutnya
                </button>
            </div>
        </div>
    );
}