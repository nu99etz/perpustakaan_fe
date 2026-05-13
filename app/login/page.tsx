"use client";
import { useActionState, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { loginAction } from "./action/loginaction";
import { useRouter } from "next/navigation";

interface LoginInput {
    email?: string,
    password?: string
}

export default function LoginPage() {
    const [state, formAction, isPending] = useActionState(loginAction, null);
    const [loginInput, loginInputState] = useState<LoginInput>({
        email: "",
        password: ""
    })
    const router = useRouter();

    useEffect(() => {
        if (!state) return;

        if (state.status === false && state?.error?.errorMessage) {
            Swal.fire({
                title: "Error",
                text: state.error.errorMessage,
                icon: 'error'
            });
            return;
        }

        if (state.status === true) {
            Swal.fire({
                title: "Success",
                text: state?.success?.successMessage,
                icon: 'success'
            }).then(() => {
                router.push('/dashboard');
            });
        }
    }, [state, router]);

    return (
        <div>
            <button id="dm-btn" className="fixed top-4 right-4 z-50 w-10 h-10 rounded-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-sm hover:scale-105 transition-transform" title="Toggle mode gelap">
                <svg id="dm-moon" className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>
                <svg id="dm-sun" className="w-4 h-4 text-yellow-500 hidden" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>
            </button>

            <div className="min-h-screen flex flex-col lg:flex-row">

                {/* <!-- ══════════════════ RIGHT PANEL ══════════════════ --> */}
                <div className="flex-1 flex items-center justify-center px-5 py-12 lg:py-0 bg-white dark:bg-slate-900 transition-colors duration-300">
                    <div className="card-enter w-full max-w-md">

                        {/* <!-- Heading --> */}
                        <div className="mb-8">
                            <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white mb-1">Selamat datang</h2>
                            <p className="text-slate-500 dark:text-slate-400 text-sm">Masuk ke akun anda</p>
                        </div>

                        {/* <!-- Form --> */}
                        <form id="login-form" noValidate className="space-y-4" action={formAction}>

                            {/* <!-- Email --> */}
                            <div>
                                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Email</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                                    </div>
                                    <input type="text" placeholder="Username" name="username" value={loginInput.email}
                                        className="inp w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white text-sm placeholder-slate-400"
                                        autoComplete="email" onChange={(e) => loginInputState({
                                            email: e.target.value
                                        })} />
                                </div>
                                {
                                    state?.error?.email != undefined && state?.error?.email != undefined ? <p className="text-xs text-red-500 mt-1">{state?.error?.email}</p> : ''
                                }
                            </div>

                            {/* <!-- Password --> */}
                            <div>
                                <div className="flex items-center justify-between mb-1.5">
                                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Kata Sandi</label>
                                    <a href="#" className="text-xs text-indigo-600 dark:text-indigo-400 font-medium hover:underline">Lupa kata sandi?</a>
                                </div>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
                                    </div>
                                    <input id="password" type="password" placeholder="••••••••" name="password"
                                        className="inp w-full pl-10 pr-11 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white text-sm placeholder-slate-400"
                                        autoComplete="current-password" />
                                    <button type="button" id="toggle-pw" className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                        {/* <!-- Eye open --> */}
                                        <svg id="eye-open" className="w-4 h-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                        {/* <!-- Eye slash --> */}
                                        <svg id="eye-slash" className="w-4 h-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors hidden" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" /></svg>
                                    </button>
                                </div>
                                {
                                    state?.error?.password != undefined && state?.error?.password != undefined ? <p className="text-xs text-red-500 mt-1">{state?.error?.password}</p> : ''
                                }
                            </div>

                            {/* <!-- Remember me --> */}
                            <div className="flex items-center gap-2.5">
                                <button type="button" id="remember-btn" className="w-5 h-5 rounded-md border-2 border-slate-300 dark:border-slate-600 flex items-center justify-center transition-colors flex-shrink-0" aria-checked="false">
                                    <svg id="remember-check" className="w-3 h-3 text-white hidden" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                                </button>
                                <label className="text-sm text-slate-600 dark:text-slate-400 cursor-pointer select-none">Ingat saya selama 30 hari</label>
                            </div>

                            {/* <!-- Submit button --> */}

                            <button type="submit" id="submit-btn" disabled={isPending}
                                className={`btn-shine w-full bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-bold py-3 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 mt-2 shadow-md shadow-indigo-200 dark:shadow-indigo-900 ${isPending ? 'opacity-30' : ''}`}>
                                <span id="btn-text">Masuk ke Dashboard</span>

                                {
                                    !isPending ? <svg id="btn-arrow" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg> : <svg id="btn-spin" className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                                }

                                {/* <!-- Spinner (hidden by default) --> */}
                            </button>
                        </form>

                        {/* <!-- Register link --> */}
                        {/* <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-6">
                            Belum punya akun?
                            <a href="#" onClick={(e) => {
                                e.preventDefault();
                                router.push('/register');
                            }} className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">Daftar sekarang</a>
                        </p> */}

                        {/* <!-- Footer note --> */}
                        <p className="text-center text-xs text-slate-400 mt-8">
                            Dengan masuk, Anda menyetujui
                            <a href="#" className="hover:underline">Syarat Layanan</a>
                            &amp;
                            <a href="#" className="hover:underline">Kebijakan Privasi</a>
                            kami.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
}