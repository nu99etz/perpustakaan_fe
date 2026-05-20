'use client';
import { Book } from "@/app/type/Book";
import { useActionState, useEffect, useState } from "react";
import { createBookAction, deletBookAction, getAllBooks, getBookById } from "./action/BookAction";
import Modal from "../../components/modal";
import { Paginate } from "@/app/type/Paginate";
import Pagination from "../../components/pagination";
import { useModal } from "@/app/context/ModalContext";
import BookForm from "./form";
import Swal from "sweetalert2";

export default function MemberPage() {
    const [books, setBooks] = useState<Book[]>([]);
    const [pagination, setPagination] = useState<Paginate>();
    const [isLoading, setLoadingState] = useState(false);
    const [deleteAction, setDeleteState] = useState(false);
    const { openModal, closeModal } = useModal();

    const [createState, createAction, createPending] = useActionState(createBookAction, null);

    async function fetchBooks() {
        setLoadingState(true);
        const data = await getAllBooks({
            page: pagination?.page ?? 1,
            limit: 10
        });
        setBooks(data.data);
        setPagination(data);
        setLoadingState(false);
    }

    useEffect(() => {
        if (!createState) return;

        if (createState.status === false && createState.error?.message) {
            Swal.fire("Error", createState.error.message, "error");
            return;
        }

        if (createState.status === true) {
            closeModal();
            Swal.fire("Sukses", createState?.success?.successMessage ?? "Buku dibuat.", "success").then(async () => {
                await fetchBooks();
            });
        }
    }, [createState]);

    useEffect(() => {
        fetchBooks();
    }, []);

    function openCreateModal() {
        openModal(<BookForm createAction={createAction} createPending={createPending} />)
    }

    async function startEdit(bookId: number) {
        setLoadingState(true);
        try {
            const book = await getBookById(bookId);
            openModal(<BookForm createAction={createAction} createPending={createPending} formValues={book!} editing={true} />)
        } catch (error: any) {
            Swal.fire("Error", error?.message ?? "Gagal mengambil data book.", "error");
        } finally {
            setLoadingState(false);
        }
    }

    function confirmDelete(bookId: number) {
        Swal.fire({
            title: "Hapus Buku?",
            text: "Data buku ini akan dihapus secara permanen.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#ef4444",
            cancelButtonColor: "#64748b",
            confirmButtonText: "Ya, Hapus!",
            cancelButtonText: "Batal",
            reverseButtons: true,
        }).then(async (result) => {
            if (result.isConfirmed) {
                setDeleteState(true);
                const result = await deletBookAction(bookId);
                if (!result.status) {
                    Swal.fire("Error", result?.error?.message, "error").then(() => {
                        setDeleteState(false);
                    });
                } else {
                    Swal.fire("Sukses", result?.success?.successMessage, "success").then(async () => {
                        setDeleteState(false);
                        await fetchBooks();
                    });
                }
            }
        });
    }

    return (
        <div className="space-y-6">
            <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-700 shadow-sm p-5">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Master Buku</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Kelola data buku aplikasi di sini.</p>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-indigo-50 text-indigo-700 px-3 py-1 text-xs font-semibold dark:bg-indigo-900/30 dark:text-indigo-200">
                        CRUD dengan server actions
                    </span>
                </div>
            </div>
            <div className="relative">
                <Modal />
                <div className="grid gap-6">
                    <section className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-700 shadow-sm overflow-hidden">
                        <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <h4 className="font-bold text-slate-900 dark:text-white">Daftar Buku</h4>
                                <span className="text-sm text-slate-500 dark:text-slate-400">Total: {pagination?.totalData}</span>
                            </div>
                            <button
                                type="button"
                                onClick={openCreateModal}
                                className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
                            >
                                Tambah Buku
                            </button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-slate-50 dark:bg-slate-700/50 text-left text-xs text-slate-400 uppercase tracking-wide">
                                        <th className="px-5 py-3 font-semibold">No</th>
                                        <th className="px-5 py-3 font-semibold text-center">Foto</th>
                                        <th className="px-5 py-3 font-semibold">ISBN</th>
                                        <th className="px-5 py-3 font-semibold">Judul Buku</th>
                                        <th className="px-5 py-3 font-semibold">Penerbit Buku</th>
                                        <th className="px-5 py-3 font-semibold">Tahun Buku</th>
                                        <th className="px-5 py-3 font-semibold">Kategori Buku</th>
                                        <th className="px-5 py-3 font-semibold">Dibuat Oleh</th>
                                        <th className="px-5 py-3 font-semibold">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                                    {books.map((book, index) => (
                                        <tr key={book.book_id} className="hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors">
                                            <td className="px-5 py-3 font-mono text-slate-500 text-xs">{(pagination?.offset ?? 0) + (index + 1)}</td>
                                            <td className="px-5 py-3">
                                                <div className="flex justify-center">
                                                    <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                                                        {book.book_cover ? (
                                                            <img src={`http://localhost:8080/uploads/${book.book_cover}`} alt={book.book_title} className="w-full h-full object-cover" />
                                                        ) : (
                                                            <span className="text-xs font-bold text-slate-400 uppercase">
                                                                {book.book_title?.substring(0, 2)}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-5 py-3 font-medium text-slate-700 dark:text-slate-300">{book.book_isbn}</td>
                                            <td className="px-5 py-3 text-slate-500 dark:text-slate-400">{book.book_title}</td>
                                            <td className="px-5 py-3 text-slate-800 dark:text-white">{book.book_author}</td>
                                            <td className="px-5 py-3 text-slate-800 dark:text-white">{book.book_year}</td>
                                            <td className="px-5 py-3 text-slate-800 dark:text-white">{book.book_category}</td>
                                            <td className="px-5 py-3 text-slate-800 dark:text-white">{book.user?.name}</td>
                                            <td className="px-5 py-3 space-x-2">
                                                <button
                                                    type="button"
                                                    onClick={() => startEdit(book.book_id!)}
                                                    // disabled={loadingUser}
                                                    className="rounded-xl border border-indigo-500 px-3 py-1 text-xs font-semibold text-indigo-700 hover:bg-indigo-50 disabled:cursor-not-allowed disabled:opacity-60 dark:border-indigo-400 dark:text-indigo-300 dark:hover:bg-indigo-900/40"
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => confirmDelete(book.book_id!)}
                                                    disabled={deleteAction}
                                                    className="rounded-xl border border-red-500 bg-red-50 px-3 py-1 text-xs font-semibold text-red-700 hover:bg-red-100 dark:border-red-400 dark:bg-red-900/20 dark:text-red-300 disabled:cursor-not-allowed disabled:opacity-60"
                                                >
                                                    {deleteAction ? "Proses Hapus ..." : "Hapus"}
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                    {books.length === 0 && (
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
                        <Pagination pagination={pagination} callBack={fetchBooks}></Pagination>
                    </section>
                </div>
            </div>
        </div>
    );
}