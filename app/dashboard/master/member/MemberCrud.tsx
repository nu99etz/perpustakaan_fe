"use client";

import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useActionState } from "react";
import Pagination from "../../components/pagination";
import { Paginate } from "@/app/type/Paginate";
import { createMemberAction, deleteMemberAction, getAllMembers, getMemberById, Member } from "./action/MemberAction";
import MemberForm from "./form";
import Modal from "../../components/modal";
import { useModal } from "@/app/context/ModalContext";

interface MemberCrudProps {
    pagination?: Paginate;
}

export default function MemberCrud({ pagination }: MemberCrudProps) {
    const [members, setMembers] = useState<Member[]>(pagination?.data);
    const [closing, setClosing] = useState(false);
    const [loadingMember, setLoadingMember] = useState(false);
    const [deleteAction, setDeleteState] = useState(false);

    const [createState, createAction, createPending] = useActionState(createMemberAction, null);
    const [paginationState, setPagination] = useState<Paginate>();
    const { openModal, closeModal } = useModal();

    useEffect(() => {
        setMembers(pagination?.data);
        setPagination(pagination)
    }, [pagination?.data, pagination]);

    useEffect(() => {
        if (!createState) return;

        if (createState.status === false && createState.error?.message) {
            Swal.fire("Error", createState.error.message, "error");
            return;
        }

        if (createState.status === true) {
            closeModal();
            Swal.fire("Sukses", createState?.success?.successMessage ?? "Member dibuat.", "success").then(async () => {
                await fetchMembers(paginationState?.page ?? 1, paginationState?.limit ?? 10);
            });
        }
    }, [createState]);

    async function startEdit(memberId: number) {
        setLoadingMember(true);
        setClosing(false);
        try {
            const member = await getMemberById(memberId);
            openModal(<MemberForm createAction={createAction} createPending={createPending} formValues={member!} editing={true} />)
        } catch (error: any) {
            Swal.fire("Error", error?.message ?? "Gagal mengambil data user.", "error");
        } finally {
            setLoadingMember(false);
        }
    }

    function openCreateModal() {
        openModal(<MemberForm createAction={createAction} createPending={createPending} />)
    }

    async function fetchMembers(page: number, limit: number) {
        const pagination = await getAllMembers({
            page: page,
            limit: limit
        });
        setMembers(pagination.data);
        setPagination(pagination);
    }

    function confirmDelete(memberId: number) {
        Swal.fire({
            title: "Hapus User?",
            text: "Data member ini akan dihapus secara permanen.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#ef4444",
            cancelButtonColor: "#64748b",
            confirmButtonText: "Ya, Hapus!",
            cancelButtonText: "Batal",
            reverseButtons: true,
        }).then(async (result) => {
            setDeleteState(false);
            if (result.isConfirmed) {
                setDeleteState(true);
                const result = await deleteMemberAction(memberId);
                if (!result.status) {
                    Swal.fire("Error", result?.error?.message, "error").then(() => {
                        setDeleteState(false);
                    });
                } else {
                    Swal.fire("Sukses", result?.success?.successMessage, "success").then(async () => {
                        setDeleteState(false);
                        await fetchMembers(paginationState?.page ?? 1, paginationState?.limit ?? 10);
                    });
                }
            }
        });
    }

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
                                    <th className="px-5 py-3 font-semibold text-center">Foto</th>
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
                                        <td className="px-5 py-3">
                                            <div className="flex justify-center">
                                                <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                                                    {member.member_photo ? (
                                                        <img src={`http://localhost:8080/uploads/${member.member_photo}`} alt={member.member_name} className="w-full h-full object-cover" />
                                                    ) : (
                                                        <span className="text-xs font-bold text-slate-400 uppercase">
                                                            {member.member_name?.substring(0, 2)}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-5 py-3 font-medium text-slate-700 dark:text-slate-300">{member.member_code}</td>
                                        <td className="px-5 py-3 text-slate-500 dark:text-slate-400">{member.member_name}</td>
                                        <td className="px-5 py-3 text-slate-800 dark:text-white">{member.member_address}</td>
                                        <td className="px-5 py-3 space-x-2">
                                            <button
                                                type="button"
                                                onClick={() => startEdit(member.member_id!)}
                                                // disabled={loadingUser}
                                                className="rounded-xl border border-indigo-500 px-3 py-1 text-xs font-semibold text-indigo-700 hover:bg-indigo-50 disabled:cursor-not-allowed disabled:opacity-60 dark:border-indigo-400 dark:text-indigo-300 dark:hover:bg-indigo-900/40"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => confirmDelete(member.member_id!)}
                                                disabled={deleteAction}
                                                className="rounded-xl border border-red-500 bg-red-50 px-3 py-1 text-xs font-semibold text-red-700 hover:bg-red-100 dark:border-red-400 dark:bg-red-900/20 dark:text-red-300 disabled:cursor-not-allowed disabled:opacity-60"
                                            >
                                                {deleteAction ? "Proses Hapus ..." : "Hapus"}
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                {members.length === 0 && (
                                    <tr>
                                        <td colSpan={6} className="px-5 py-6 text-center text-sm text-slate-500 dark:text-slate-400">
                                            Tidak ada member untuk ditampilkan.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    {/* Pagination Layout */}
                    <Pagination pagination={paginationState} callBack={fetchMembers}></Pagination>
                </section>
            </div>
        </div>
    );
}
