import { getAllUsers } from "../action/useraction";
import UserCrud from "./UserCrud";

export default async function UserPage() {
    const users = await getAllUsers();

    return (
        <div className="space-y-6">
            <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-700 shadow-sm p-5">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Master User</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Kelola data pengguna aplikasi di sini.</p>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-indigo-50 text-indigo-700 px-3 py-1 text-xs font-semibold dark:bg-indigo-900/30 dark:text-indigo-200">
                        CRUD dengan server actions
                    </span>
                </div>
            </div>
            <UserCrud initialUsers={users} />
        </div>
    );
}