"use client";

import { Book } from "@/app/type/Book";
import { useState, useRef } from "react";

interface BookFormPageProps {
    createAction?: any;
    formValues?: Book;
    createPending?: boolean;
    resetForm?: () => void;
    editing?: boolean;
}

export default function BookForm({ createAction, formValues, createPending, resetForm, editing }: BookFormPageProps) {
    const [preview, setPreview] = useState<string | null>(formValues != undefined ? `http://localhost:8080/uploads/${formValues.book_cover}` || null : null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const triggerFileInput = () => {
        fileInputRef.current?.click();
    };

    return (
        <div>
            <div className="flex items-start justify-between gap-4 pb-4 mb-4 border-b border-slate-200 dark:border-slate-700">
                <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">Form Buku</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Gunakan form di bawah untuk menyimpan data pengguna.</p>
                </div>
            </div>
            <form action={createAction} className="space-y-4" encType="multipart/form-data">
                <input type="hidden" name="book_id" value={formValues?.book_id} />

                <div className="flex flex-col items-center gap-4 mb-6">
                    <div
                        onClick={triggerFileInput}
                        className="relative group cursor-pointer"
                    >
                        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 flex items-center justify-center transition group-hover:border-indigo-500">
                            {preview ? (
                                <img src={preview} alt="Preview" className="w-full h-full object-cover" />
                            ) : (
                                <svg className="w-10 h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                </svg>
                            )}
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition">
                            <span className="text-white text-xs font-semibold">Ganti Foto</span>
                        </div>
                    </div>
                    <div className="text-center">
                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Cover Buku</label>
                        <p className="text-xs text-slate-500 mt-1">Klik gambar untuk upload</p>
                    </div>
                    <input
                        type="file"
                        name="book_cover"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        className="hidden"
                        accept="image/*"
                    />
                </div>

                <div className="grid grid-flow-col grid-rows-3 gap-4">
                    <div className="row-span-3">
                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Kode ISBN</label>
                        <input
                            name="book_isbn"
                            defaultValue={formValues?.book_isbn}
                            className="mt-2 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white px-4 py-3 text-sm shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none transition"
                            placeholder="kode isbn"
                        />
                    </div>
                    <div className="row-span-3">
                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Judul Buku</label>
                        <input
                            name="book_title"
                            defaultValue={formValues?.book_title}
                            className="mt-2 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white px-4 py-3 text-sm shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none transition"
                            placeholder="judul buku"
                        />
                    </div>
                </div>

                <div className="grid grid-flow-col grid-rows-3 gap-4">
                    <div className="row-span-3">
                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Penerbit Buku</label>
                        <input
                            name="book_author"
                            defaultValue={formValues?.book_author}
                            className="mt-2 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white px-4 py-3 text-sm shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none transition"
                            placeholder="Penerbit Buku"
                        />
                    </div>
                    <div className="row-span-3">
                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Tahun Buku</label>
                        <input
                            name="book_year"
                            defaultValue={formValues?.book_year}
                            className="mt-2 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white px-4 py-3 text-sm shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none transition"
                            placeholder="tahun buku"
                            type="number"
                        />
                    </div>
                    <div className="row-span-3">
                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Kategori Buku</label>
                        <input
                            name="book_category"
                            defaultValue={formValues?.book_category}
                            className="mt-2 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white px-4 py-3 text-sm shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none transition"
                            placeholder="kategori buku"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end pt-4">
                    <button
                        type="button"
                        onClick={resetForm}
                        className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                    >
                        Batal
                    </button>
                    <button
                        type="submit"
                        disabled={createPending}
                        className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:opacity-50 shadow-md shadow-indigo-200 dark:shadow-none"
                    >
                        {editing ? (createPending ? "Menyimpan..." : "Perbarui Buku") : (createPending ? "Menyimpan..." : "Simpan Buku")}
                    </button>
                </div>
            </form>
        </div>
    );
}