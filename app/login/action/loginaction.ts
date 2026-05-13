"use server";

import globalFn from "@/app/helper/Helper";
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

    const data = await globalFn().send({
        url: "http://localhost:8080/auth/login",
        method: "POST",
        data: JSON.stringify({
            "user_name": formData.get("username"),
            "password": formData.get("password")
        })
    });
    if (data['status'] == true) {
        status = true;
        response.successMessage = data['message'];
        response.token = data['data']['jwt_token'];

        const cookieStore = await cookies();
        cookieStore.set('token', data['data']['jwt_token']);

        return {
            status: status,
            success: response
        }
    } else {
        status = false;
        response.errorMessage = data['message'];
        return {
            status: status,
            error: response
        };
    }
}