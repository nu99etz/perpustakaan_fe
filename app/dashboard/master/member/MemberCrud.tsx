"use client";

import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useActionState } from "react";
import Pagination from "../../components/pagination";
import { Paginate } from "@/app/type/Paginate";
import { Member } from "./action/MemberAction";
import MemberForm from "./form";
import Modal from "../../components/modal";
import { useModal } from "@/app/context/ModalContext";

interface MemberCrudProps {
    pagination?: Paginate;
}

const emptyForm = {
    id: "",
    user_name: "",
    name: "",
    address: "",
    password: ""
};

export default function MemberCrud({ pagination }: MemberCrudProps) {
    const [members, setMembers] = useState<Member[]>(pagination?.data);
    const [formValues, setFormValues] = useState({ ...emptyForm });
    const [editing, setEditing] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [closing, setClosing] = useState(false);
    const [loadingMember, setLoadingMember] = useState(false);

    // const [createState, createAction, createPending] = useActionState(createUserAction, null);
    // const [deleteState, deleteAction, deletePending] = useActionState(deleteUserAction, null);
    const [paginationState, setPagination] = useState<Paginate>();
    const { openModal } = useModal();

    useEffect(() => {
        setMembers(pagination?.data);
        setPagination(pagination)
    }, [pagination?.data, pagination]);

    // useEffect(() => {
    //     if (!createState) return;

    //     if (createState.status === false && createState.error?.message) {
    //         Swal.fire("Error", createState.error.message, "error");
    //         return;
    //     }

    //     if (createState.status === true && createState.success?.user) {
    //         closeModal();
    //         Swal.fire("Sukses", createState.success.successMessage ?? "User dibuat.", "success").then(async () => {
    //             await fetchUsers(paginationState?.page ?? 1, paginationState?.limit ?? 10);
    //         });
    //     }
    // }, [createState]);

    // useEffect(() => {
    //     if (!deleteState) return;

    //     if (deleteState.status === false && deleteState.error?.message) {
    //         Swal.fire("Error", deleteState.error.message, "error");
    //         return;
    //     }

    //     if (deleteState.status === true && deleteState.success?.user?.id) {
    //         setUsers(prev => prev.filter(user => user.id !== deleteState.success!.user!.id));
    //         Swal.fire("Sukses", deleteState.success.successMessage ?? "User dihapus.", "success").then(async () => {
    //             await fetchUsers(paginationState?.page ?? 1, paginationState?.limit ?? 10);
    //         });
    //     }
    // }, [deleteState]);

    // function setField(field: string, value: string) {
    //     setFormValues(prev => ({ ...prev, [field]: value }));
    // }

    // async function startEdit(userId: string) {
    //     setLoadingUser(true);
    //     setClosing(false);
    //     try {
    //         const user = await getUserById(userId);
    //         setFormValues({
    //             id: user?.id ?? userId,
    //             user_name: user?.user_name ?? "",
    //             name: user?.name ?? "",
    //             address: user?.address ?? "",
    //             password: ""
    //         });
    //         setEditing(true);
    //         setShowModal(true);
    //     } catch (error: any) {
    //         Swal.fire("Error", error?.message ?? "Gagal mengambil data user.", "error");
    //     } finally {
    //         setLoadingUser(false);
    //     }
    // }

    function openCreateModal() {
        // setFormValues({ ...emptyForm });
        // setEditing(false);
        // setClosing(false);
        // setShowModal(true);
        openModal(<MemberForm />)
    }

    // function closeModal() {
    //     setClosing(true);
    //     window.setTimeout(() => {
    //         setShowModal(false);
    //         setClosing(false);
    //         setFormValues({ ...emptyForm });
    //         setEditing(false);
    //     }, 220);
    // }

    // function resetForm() {
    //     closeModal();
    // }

    // async function fetchUsers(page: number, limit: number) {
    //     const pagination = await getAllUsers({
    //         page: page,
    //         limit: limit
    //     });
    //     setUsers(pagination.data);
    //     setPagination(pagination);
    // }

    // function confirmDelete(id: string) {
    //     Swal.fire({
    //         title: "Hapus User?",
    //         text: "Data user ini akan dihapus secara permanen.",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#ef4444",
    //         cancelButtonColor: "#64748b",
    //         confirmButtonText: "Ya, Hapus!",
    //         cancelButtonText: "Batal",
    //         reverseButtons: true,
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             const formData = new FormData();
    //             formData.append("id", id);
    //             deleteAction(formData);
    //         }
    //     });
    // }

    return (
        <div className="relative">

            <Modal />

            <div className="grid gap-6">
                <section className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-700 shadow-sm overflow-hidden">
                    <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <h4 className="font-bold text-slate-900 dark:text-white">Daftar Member</h4>
                            <span className="text-sm text-slate-500 dark:text-slate-400">Total: {pagination?.totalData}</span>
                        </div>
                        <button
                            type="button"
                            onClick={openCreateModal}
                            className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
                        >
                            Tambah Member
                        </button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="bg-slate-50 dark:bg-slate-700/50 text-left text-xs text-slate-400 uppercase tracking-wide">
                                    <th className="px-5 py-3 font-semibold">No</th>
                                    <th className="px-5 py-3 font-semibold">Kode Member</th>
                                    <th className="px-5 py-3 font-semibold">Nama Member</th>
                                    <th className="px-5 py-3 font-semibold">Alamat Member</th>
                                    <th className="px-5 py-3 font-semibold">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                                {members.map((member, index) => (
                                    <tr key={member.member_id} className="hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors">
                                        <td className="px-5 py-3 font-mono text-slate-500 text-xs">{(paginationState?.offset ?? 0) + (index + 1)}</td>
                                        <td className="px-5 py-3 font-medium text-slate-700 dark:text-slate-300">{member.member_code}</td>
                                        <td className="px-5 py-3 text-slate-500 dark:text-slate-400">{member.member_name}</td>
                                        <td className="px-5 py-3 text-slate-800 dark:text-white">{member.member_address}</td>
                                        <td className="px-5 py-3 space-x-2">
                                            {/* <button
                                                type="button"
                                                onClick={() => startEdit(user.id)}
                                                disabled={loadingUser}
                                                className="rounded-xl border border-indigo-500 px-3 py-1 text-xs font-semibold text-indigo-700 hover:bg-indigo-50 disabled:cursor-not-allowed disabled:opacity-60 dark:border-indigo-400 dark:text-indigo-300 dark:hover:bg-indigo-900/40"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => confirmDelete(user.id)}
                                                disabled={deletePending}
                                                className="rounded-xl border border-red-500 bg-red-50 px-3 py-1 text-xs font-semibold text-red-700 hover:bg-red-100 dark:border-red-400 dark:bg-red-900/20 dark:text-red-300 disabled:cursor-not-allowed disabled:opacity-60"
                                            >
                                                {deletePending ? "..." : "Hapus"}
                                            </button> */}
                                        </td>
                                    </tr>
                                ))}
                                {members.length === 0 && (
                                    <tr>
                                        <td colSpan={5} className="px-5 py-6 text-center text-sm text-slate-500 dark:text-slate-400">
                                            Tidak ada member untuk ditampilkan.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    {/* Pagination Layout */}
                    {/* <Pagination pagination={paginationState} callBack={fetchUsers}></Pagination> */}
                </section>
            </div>
        </div>
    );
}
