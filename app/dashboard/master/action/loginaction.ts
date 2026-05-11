"use server";

import { cookies } from "next/headers";

interface LoginAction {
    email?: string,
    password?: string,
    token?: string,
    errorMessage?: string,
    successMessage?: string
}

export async function loginAction(prevState: any, formData: FormData) {
    
    let status = undefined;
    let response: LoginAction = {
        email: undefined,
        password: undefined,
        token: undefined,
        errorMessage: undefined,
        successMessage: undefined
    }

    if (formData.get('username') === undefined || formData.get('username') === "") {
        status = false;
        response.email = "Username tidak boleh kosong."
    }

    if (formData.get('password') === undefined || formData.get('password') === "") {
        status = false;
        response.password = "Kata sandi tidak boleh kosong."
    }

    if (status != undefined && !status) {
        return { error: response }
    }

    const res = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "user_name": formData.get("username"),
            "password": formData.get("password")
        })
    })
    const data = await res.json();
    if (data['error'] !== undefined) {
        status = false;
        response.errorMessage = data['error'];
        return {
            status: status,
            error: response
        };
    } else {
        status = true;
        response.successMessage = data['message'];
        response.token = data['token'];
        
        const cookieStore = await cookies();
        cookieStore.set('token', data['token']);

        return {
            status: status,
            success: response
        }
    }
}