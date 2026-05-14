import { useModal } from "@/app/context/ModalContext";

export default function Modal() {
    const { isOpen, content, closeModal } = useModal();

    if (!isOpen) return null;
    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 px-4 py-6 ${!isOpen ? "animate-modal-backdrop-close" : "animate-modal-backdrop"}`}
            onClick={closeModal}
        >
            <div
                className={`w-full max-w-2xl rounded-3xl bg-white dark:bg-slate-900 shadow-2xl border border-slate-200 dark:border-slate-700 p-6 ${!isOpen ? "animate-modal-content-close" : "animate-modal-content"}`}
                onClick={e => e.stopPropagation()}
            >
                <div className="flex items-start justify-end">
                    <button
                        type="button"
                        onClick={closeModal}
                        className="rounded-full border border-slate-200 bg-white p-2 text-slate-600 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                        aria-label="Tutup modal"
                    >
                        ✕
                    </button>
                </div>
                {content}
            </div>
        </div>
    );
}