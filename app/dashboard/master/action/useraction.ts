"use server";

import { cookies } from "next/headers";

export type User = {
    id: string;
    user_name: string;
    name: string;
    address: string;
};

interface ServerActionResult {
    status?: boolean;
    error?: {
        message?: string;
        field?: string;
    };
    success?: {
        successMessage?: string;
        user?: User;
    };
}

const token = (await cookies()).get('token')?.value

export async function getAllUsers(): Promise<User[]> {
    console.log(`token ${token}`);
    const res = await fetch("http://localhost:8080/user", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        cache: 'no-store'
    });

    const data = await res.json();
    console.log(data);
    if(data['error'] != undefined && data['error'] == 'Token tidak valid!') {
        return [];
    }
    return data?.data ?? data?.users ?? data ?? [];
}

export async function createUserAction(prevState: any, formData: FormData): Promise<ServerActionResult> {
    const user_name = String(formData.get('user_name') ?? '').trim();
    const name = String(formData.get('name') ?? '').trim();
    const address = String(formData.get('address') ?? '').trim();
    const password = String(formData.get('password') ?? '').trim();

    if (!user_name) {
        return { status: false, error: { field: 'user_name', message: 'Username tidak boleh kosong.' } };
    }
    if (!name) {
        return { status: false, error: { field: 'name', message: 'Nama user tidak boleh kosong.' } };
    }
    if (!address) {
        return { status: false, error: { field: 'address', message: 'Alamat tidak boleh kosong.' } };
    }
    if (!password) {
        return { status: false, error: { field: 'password', message: 'Password tidak boleh kosong.' } };
    }

    const res = await fetch("http://localhost:8080/user/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
            user_name,
            name,
            address,
            password
        })
    });

    const data = await res.json();
    if (!res.ok || data?.error) {
        return { status: false, error: { message: data?.error ?? 'Gagal membuat user.' } };
    }

    return {
        status: true,
        success: {
            successMessage: data?.message ?? 'User berhasil dibuat.',
            user: data?.data ?? data?.user ?? {
                id: String(data?.id ?? ''),
                user_name,
                name,
                address
            }
        }
    };
}

export async function updateUserAction(prevState: any, formData: FormData): Promise<ServerActionResult> {
    const id = String(formData.get('id') ?? '').trim();
    const user_name = String(formData.get('user_name') ?? '').trim();
    const name = String(formData.get('name') ?? '').trim();
    const address = String(formData.get('address') ?? '').trim();

    if (!id) {
        return { status: false, error: { message: 'ID user tidak ditemukan.' } };
    }
    if (!user_name) {
        return { status: false, error: { field: 'user_name', message: 'Username tidak boleh kosong.' } };
    }
    if (!name) {
        return { status: false, error: { field: 'name', message: 'Nama user tidak boleh kosong.' } };
    }
    if (!address) {
        return { status: false, error: { field: 'address', message: 'Alamat tidak boleh kosong.' } };
    }

    const res = await fetch(`http://localhost:8080/user/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
            user_name,
            name,
            address
        })
    });

    const data = await res.json();
    if (!res.ok || data?.error) {
        return { status: false, error: { message: data?.error ?? 'Gagal memperbarui user.' } };
    }

    return {
        status: true,
        success: {
            successMessage: data?.message ?? 'User berhasil diperbarui.',
            user: data?.data ?? data?.user ?? { id, user_name, name, address }
        }
    };
}

export async function deleteUserAction(prevState: any, formData: FormData): Promise<ServerActionResult> {
    const id = String(formData.get('id') ?? '').trim();

    if (!id) {
        return { status: false, error: { message: 'ID user tidak ditemukan.' } };
    }

    const res = await fetch(`http://localhost:8080/user/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });

    const data = await res.json();
    if (!res.ok || data?.error) {
        return { status: false, error: { message: data?.error ?? 'Gagal menghapus user.' } };
    }

    return {
        status: true,
        success: {
            successMessage: data?.message ?? 'User berhasil dihapus.',
            user: { id, user_name: '', name: '', address: '' }
        }
    };
}