"use server";

import globalFn from "@/app/helper/Helper";
import { Paginate } from "@/app/type/Paginate";

export type Member = {
    member_id?: number;
    member_name?: string;
    member_code?: string;
    member_photo?: string;
    member_address?: string;
    created_at?: string;
    updated_at?: string;
    deleted_at?: string;
};

export async function getAllMembers({ page, limit }: { page: number, limit: number }): Promise<Paginate> {
    const data = await globalFn().send({
        url: `http://localhost:8080/member?page=${page}&limit=${limit}`,
        method: "GET"
    });
    let members: Member[] = [];
    let paginateData: Paginate;
    if (data['status'] == true) {
        if (Array.isArray(data['data'])) {
            for (let i = 0; i < data['data'].length; i++) {
                var dataFor = data['data'][i]
                members.push({
                    member_id: dataFor['member_id'],
                    member_name: dataFor['member_name'],
                    member_code: dataFor['member_code'],
                    member_address: dataFor['member_address'],
                    member_photo: dataFor['member_photo'],
                })
            }
        }
    } else {
        return {
            message: data['message']
        };
    }
    paginateData = {
        page: data['pagination']['current_page'],
        limit: data['pagination']['limit'],
        data: members,
        message: data['message'],
        totalData: data['pagination']['total_data'],
        totalPage: data['pagination']['total_page'],
        offset: data['pagination']['offset']
    }
    return paginateData;
}

// export async function getUserById(id: string): Promise<User | null> {
//     const data = await globalFn().send({
//         url: `http://localhost:8080/user?id=${id}`,
//         method: "GET"
//     });

//     if (data['status'] == false) {
//         return null;
//     }

//     let user: User;
//     user = {
//         id: data['data']['id_user'],
//         user_name: data['data']['user_name'],
//         name: data['data']['nama_lengkap_user'],
//         address: data['data']['alamat']
//     };
//     return user;
// }

// export async function createUserAction(prevState: any, formData: FormData): Promise<ServerActionResult> {
//     const user_name = String(formData.get('user_name') ?? '').trim();
//     const name = String(formData.get('name') ?? '').trim();
//     const address = String(formData.get('address') ?? '').trim();
//     const password = String(formData.get('password') ?? '').trim();
//     const id = formData.get("id") ? String(formData.get("id")) : undefined;

//     if (!user_name) {
//         return { status: false, error: { field: 'user_name', message: 'Username tidak boleh kosong.' } };
//     }
//     if (!name) {
//         return { status: false, error: { field: 'name', message: 'Nama user tidak boleh kosong.' } };
//     }
//     if (!address) {
//         return { status: false, error: { field: 'address', message: 'Alamat tidak boleh kosong.' } };
//     }

//     let data: any;

//     data = {
//         user_name: user_name,
//         nama_lengkap_user: name,
//         alamat: address,
//         password: password
//     }

//     if (id != undefined) {
//         data = {
//             ...data,
//             id_user: parseInt(id)
//         }
//     }

//     const response = await globalFn().send({
//         url: id != undefined ? "http://localhost:8080/user/update" : "http://localhost:8080/user/create",
//         method: id != undefined ? "PUT" : "POST",
//         data: JSON.stringify(data)
//     })

//     if (response['status'] == false) {
//         return { status: false, error: { message: response['message'] ?? 'Gagal membuat user.' } };
//     }

//     return {
//         status: true,
//         success: {
//             successMessage: response?.message ?? 'User berhasil dibuat.',
//             user: response?.data ?? response?.user ?? {
//                 id: String(response?.id ?? ''),
//                 user_name,
//                 name,
//                 address
//             }
//         }
//     };
// }

// export async function deleteUserAction(prevState: any, formData: FormData): Promise<ServerActionResult> {
//     const id = String(formData.get('id') ?? '').trim();

//     if (!id) {
//         return { status: false, error: { message: 'ID user tidak ditemukan.' } };
//     }

//     const response = await globalFn().send({
//         url: `http://localhost:8080/user/delete?id=${id}`,
//         method: "DELETE"
//     });

//     if (response['status'] == false) {
//         return { status: false, error: { message: response['message'] ?? 'Gagal menghapus user.' } };
//     }

//     return {
//         status: true,
//         success: {
//             successMessage: response['message'] ?? 'User berhasil dihapus.',
//             user: { id, user_name: '', name: '', address: '' }
//         }
//     };
// }