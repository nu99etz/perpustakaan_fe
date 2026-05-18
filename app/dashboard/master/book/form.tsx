"use client";

import { useState, useRef } from "react";
import { Member } from "./action/MemberAction";

interface MemberPageProps {
    createAction?: any;
    formValues?: Member;
    createPending?: boolean;
    resetForm?: () => void;
    editing?: boolean;
}

export default function MemberForm({ createAction, formValues, createPending, resetForm, editing }: MemberPageProps) {
    const [preview, setPreview] = useState<string | null>(formValues != undefined ? `http://localhost:8080/uploads/${formValues.member_photo}` || null : null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    console.log(createPending);

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
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">Form Member</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Gunakan form di bawah untuk menyimpan data pengguna.</p>
                </div>
            </div>
            <form action={createAction} className="space-y-4" encType="multipart/form-data">
                <input type="hidden" name="member_id" value={formValues?.member_id} />

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
                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Foto Member</label>
                        <p className="text-xs text-slate-500 mt-1">Klik gambar untuk upload</p>
                    </div>
                    <input
                        type="file"
                        name="member_photo"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        className="hidden"
                        accept="image/*"
                    />
                </div>

                <div>
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Nama Member</label>
                    <input
                        name="member_name"
                        defaultValue={formValues?.member_name}
                        className="mt-2 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white px-4 py-3 text-sm shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none transition"
                        placeholder="nama member"
                    />
                </div>
                <div>
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Alamat Member</label>
                    <textarea
                        name="member_address"
                        defaultValue={formValues?.member_address}
                        className="mt-2 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white px-4 py-3 text-sm shadow-sm resize-none focus:ring-2 focus:ring-indigo-500 outline-none transition"
                        placeholder="Alamat"
                        rows={4}
                    />
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
                        {editing ? (createPending ? "Menyimpan..." : "Perbarui Member") : (createPending ? "Menyimpan..." : "Simpan Member")}
                    </button>
                </div>
            </form>
        </div>
    );
}