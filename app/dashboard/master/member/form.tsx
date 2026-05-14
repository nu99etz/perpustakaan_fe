import { Member } from "./action/MemberAction";

interface MemberPageProps {
    createAction?: any;
    formValues?: Member;
}

export default function MemberForm({ createAction, formValues }: MemberPageProps) {
    return (
        <div>
            <div className="flex items-start justify-between gap-4 pb-4 mb-4 border-b border-slate-200 dark:border-slate-700">
                <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">Form Member</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Gunakan form di bawah untuk menyimpan data pengguna.</p>
                </div>
            </div>
            <form action={createAction} className="space-y-4">
                <input type="hidden" name="id" value={formValues?.member_id} />
                <div>
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Nama Member</label>
                    <input
                        name="member_name"
                        value={formValues?.member_name}
                        // onChange={e => setField("user_name", e.target.value)}
                        className="mt-2 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white px-4 py-3 text-sm shadow-sm"
                        placeholder="nama member"
                    />
                </div>
                <div>
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Alamat Member</label>
                    <textarea
                        name="member_address"
                        value={formValues?.member_address}
                        // onChange={e => setField("address", e.target.value)}
                        className="mt-2 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white px-4 py-3 text-sm shadow-sm resize-none"
                        placeholder="Alamat"
                        rows={4}
                    />
                </div>
                {/* <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                    type="submit"
                    disabled={createPending}
                    className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:opacity-50"
                >
                    {editing ? (createPending ? "Menyimpan..." : "Perbarui User") : (createPending ? "Menyimpan..." : "Buat User")}
                </button>
                <button
                    type="button"
                    onClick={resetForm}
                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                >
                    Batal
                </button>
            </div> */}
            </form>
        </div>
    );
}