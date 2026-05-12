"use server";

import globalFn from "@/app/helper/Helper";
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

export async function getAllUsers(): Promise<User[]> {
    const data = await globalFn().send({
        url: "http://localhost:8080/user?page=1&limit=5",
        method: "GET"
    });
    if (data['error'] != undefined && data['error'] == 'Token tidak valid!') {
        return [];
    }
    let users: User[] = [];
    for (let i = 0; i < data?.length; i++) {
        users.push({
            id: data[i]['id_user'],
            user_name: data[i]['user_name'],
            name: data[i]['nama_lengkap_user'],
            address: data[i]['alamat']
        })
    }
    return users;
}

export async function getUserById(id: string): Promise<User | null> {
    const data = await globalFn().send({
        url: `http://localhost:8080/user?id=${id}`,
        method: "GET"
    });
    console.log(data);
    if (!data || data?.error) {
        return null;
    }

    let user: User;
    user = {
        id: data['id_user'],
        user_name: data['user_name'],
        name: data['nama_lengkap_user'],
        address: data['alamat']
    };
    return user;
}

export async function createUserAction(prevState: any, formData: FormData): Promise<ServerActionResult> {
    const user_name = String(formData.get('user_name') ?? '').trim();
    const name = String(formData.get('name') ?? '').trim();
    const address = String(formData.get('address') ?? '').trim();
    const password = String(formData.get('password') ?? '').trim();
    const id = formData.get("id") ? String(formData.get("id")) : undefined;

    if (!user_name) {
        return { status: false, error: { field: 'user_name', message: 'Username tidak boleh kosong.' } };
    }
    if (!name) {
        return { status: false, error: { field: 'name', message: 'Nama user tidak boleh kosong.' } };
    }
    if (!address) {
        return { status: false, error: { field: 'address', message: 'Alamat tidak boleh kosong.' } };
    }

    let data: any;

    data = {
        user_name: user_name,
        nama_lengkap_user: name,
        alamat: address,
        password: password
    }

    if (id != undefined) {
        data = {
            ...data,
            id_user: parseInt(id)
        }
    }

    const response = await globalFn().send({
        url: id != undefined ? "http://localhost:8080/user/update" : "http://localhost:8080/user/create",
        method: id != undefined ? "PUT" : "POST",
        data: JSON.stringify(data)
    })

    if (response?.error) {
        return { status: false, error: { message: response?.error ?? 'Gagal membuat user.' } };
    }

    return {
        status: true,
        success: {
            successMessage: response?.message ?? 'User berhasil dibuat.',
            user: response?.data ?? response?.user ?? {
                id: String(response?.id ?? ''),
                user_name,
                name,
                address
            }
        }
    };
}

export async function deleteUserAction(prevState: any, formData: FormData): Promise<ServerActionResult> {
    const token = (await cookies()).get('token')?.value
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