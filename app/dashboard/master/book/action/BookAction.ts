"use server";

import globalFn from "@/app/helper/Helper";
import { Book } from "@/app/type/Book";
import { Paginate } from "@/app/type/Paginate";

export async function getAllBooks({ page, limit }: { page: number, limit: number }): Promise<Paginate> {
    const data = await globalFn().send({
        url: `http://localhost:8080/book?page=${page}&limit=${limit}`,
        method: "GET"
    });
    let books: Book[] = [];
    let paginateData: Paginate;
    if (data['status'] == true) {
        if (Array.isArray(data['data'])) {
            for (let i = 0; i < data['data'].length; i++) {
                var dataFor = data['data'][i]
                books.push({
                    book_id: dataFor['book_id'],
                    book_isbn: dataFor['book_isbn'],
                    book_author: dataFor['book_author'],
                    book_category: dataFor['book_category'],
                    book_cover: dataFor['book_cover'],
                    book_title: dataFor['book_title'],
                    book_year: dataFor['book_year'],
                    created_at: dataFor['created_at'],
                    updated_at: dataFor['updated_at'],
                    created_by: dataFor['created_by'],
                    deleted_at: dataFor['deleted_at']
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
        data: books,
        message: data['message'],
        totalData: data['pagination']['total_data'],
        totalPage: data['pagination']['total_page'],
        offset: data['pagination']['offset']
    }
    return paginateData;
}

// export async function getMemberById(id: number): Promise<Member | null> {
//     const data = await globalFn().send({
//         url: `http://localhost:8080/member?id=${id}`,
//         method: "GET"
//     });

//     if (data['status'] == false) {
//         return null;
//     }

//     let member: Member;
//     member = {
//         member_id: data['data']['member_id'],
//         member_name: data['data']['member_name'],
//         member_code: data['data']['member_code'],
//         member_address: data['data']['member_address'],
//         member_photo: data['data']['member_photo']
//     };
//     return member;
// }

// export async function createMemberAction(prevState: any, formData: FormData): Promise<ServerActionResult> {
//     const memberName = String(formData.get('member_name') ?? '').trim();
//     const memberAddress = String(formData.get('member_address') ?? '').trim();
//     const memberId = formData.get("member_id") ? String(formData.get("member_id")) : undefined;
//     const memberPhoto = formData.get("member_photo") as File;

//     if (!memberName) {
//         return { status: false, error: { field: 'user_name', message: 'Nama member tidak boleh kosong.' } };
//     }

//     if (!memberAddress) {
//         return { status: false, error: { field: 'name', message: 'Alamat member tidak boleh kosong.' } };
//     }

//     if (!memberPhoto || memberPhoto.size == 0) {
//         if (memberId != undefined) {
//             formData.delete("member_photo");
//         } else {
//             return { status: false, error: { field: 'member_photo', message: 'Harap upload foto member.' } };
//         }
//     }

//     const response = await globalFn().send({
//         url: memberId != undefined ? "http://localhost:8080/member/update" : "http://localhost:8080/member/create",
//         method: memberId != undefined ? "PUT" : "POST",
//         data: formData
//     })

//     if (response['status'] == false) {
//         return { status: false, error: { message: response['message'] ?? 'Gagal membuat member.' } };
//     }

//     return {
//         status: true,
//         success: {
//             successMessage: response?.message ?? 'User berhasil dibuat.',
//         }
//     };
// }

// export async function deleteMemberAction(memberId: number): Promise<ServerActionResult> {
//     const response = await globalFn().send({
//         url: `http://localhost:8080/member/delete?id=${memberId}`,
//         method: "DELETE"
//     });

//     if (response['status'] == false) {
//         return { status: false, error: { message: response['message'] ?? 'Gagal menghapus member.' } };
//     }

//     return {
//         status: true,
//         success: {
//             successMessage: response['message'] ?? 'Member berhasil dihapus.'
//         }
//     };
// }