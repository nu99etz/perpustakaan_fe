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

export async function getMemberById(id: number): Promise<Member | null> {
    const data = await globalFn().send({
        url: `http://localhost:8080/member?id=${id}`,
        method: "GET"
    });

    if (data['status'] == false) {
        return null;
    }

    let member: Member;
    member = {
        member_id: data['data']['member_id'],
        member_name: data['data']['member_name'],
        member_code: data['data']['member_code'],
        member_address: data['data']['member_address'],
        member_photo: data['data']['member_photo']
    };
    return member;
}

export async function createMemberAction(prevState: any, formData: FormData): Promise<ServerActionResult> {
    const memberName = String(formData.get('member_name') ?? '').trim();
    const memberAddress = String(formData.get('member_address') ?? '').trim();
    const memberId = formData.get("member_id") ? String(formData.get("member_id")) : undefined;
    const memberPhoto = formData.get("member_photo") as File;

    if (!memberName) {
        return { status: false, error: { field: 'user_name', message: 'Nama member tidak boleh kosong.' } };
    }

    if (!memberAddress) {
        return { status: false, error: { field: 'name', message: 'Alamat member tidak boleh kosong.' } };
    }

    if (!memberPhoto || memberPhoto.size == 0) {
        if (memberId != undefined) {
            formData.delete("member_photo");
        } else {
            return { status: false, error: { field: 'member_photo', message: 'Harap upload foto member.' } };
        }
    }

    const response = await globalFn().send({
        url: memberId != undefined ? "http://localhost:8080/member/update" : "http://localhost:8080/member/create",
        method: memberId != undefined ? "PUT" : "POST",
        data: formData
    })

    if (response['status'] == false) {
        return { status: false, error: { message: response['message'] ?? 'Gagal membuat member.' } };
    }

    return {
        status: true,
        success: {
            successMessage: response?.message ?? 'User berhasil dibuat.',
        }
    };
}

export async function deleteMemberAction(memberId: number): Promise<ServerActionResult> {
    const response = await globalFn().send({
        url: `http://localhost:8080/member/delete?id=${memberId}`,
        method: "DELETE"
    });

    if (response['status'] == false) {
        return { status: false, error: { message: response['message'] ?? 'Gagal menghapus member.' } };
    }

    return {
        status: true,
        success: {
            successMessage: response['message'] ?? 'Member berhasil dihapus.'
        }
    };
}