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
                    deleted_at: dataFor['deleted_at'],
                    user: {
                        name: dataFor['User']['nama_lengkap_user']
                    }
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

export async function getBookById(id: number): Promise<Book | null> {
    const data = await globalFn().send({
        url: `http://localhost:8080/book?id=${id}`,
        method: "GET"
    });

    if (data['status'] == false) {
        return null;
    }

    let book: Book;
    book = {
        book_id: data['data']['book_id'],
        book_author: data['data']['book_author'],
        book_category: data['data']['book_category'],
        book_cover: data['data']['book_cover'],
        book_isbn: data['data']['book_isbn'],
        book_title: data['data']['book_title'],
        book_year: data['data']['book_year'],
        created_by: data['data']['created_by'],
        created_at: data['data']['created_at'],
        deleted_at: data['data']['deleted_at'],
        updated_at: data['data']['updated_at']
    };
    return book;
}

export async function createBookAction(prevState: any, formData: FormData): Promise<ServerActionResult> {
    const bookIsbn = String(formData.get('book_isbn') ?? '').trim();
    const bookTitle = String(formData.get('book_title') ?? '').trim();
    const bookAuthor = String(formData.get('book_author') ?? '').trim();
    const bookYear = String(formData.get('book_year') ?? '').trim();
    const bookCategory = String(formData.get('book_category') ?? '').trim();
    const bookId = formData.get("book_id") ? String(formData.get("book_id")) : undefined;
    const bookCover = formData.get("book_cover") as File;

    if (!bookIsbn) {
        return { status: false, error: { field: 'book_isbn', message: 'ISBN buku tidak boleh kosong.' } };
    }

    if (!bookTitle) {
        return { status: false, error: { field: 'book_isbn', message: 'judul buku tidak boleh kosong.' } };
    }

    if (!bookAuthor) {
        return { status: false, error: { field: 'book_author', message: 'penerbit buku tidak boleh kosong.' } };
    }

    if (!bookYear) {
        return { status: false, error: { field: 'book_year', message: 'tahun buku tidak boleh kosong.' } };
    }

    if (!bookCategory) {
        return { status: false, error: { field: 'book_category', message: 'kategori buku tidak boleh kosong.' } };
    }

    if (!bookCover || bookCover.size == 0) {
        formData.delete("book_cover");
    }

    const response = await globalFn().send({
        url: bookId != undefined ? "http://localhost:8080/book/update" : "http://localhost:8080/book/create",
        method: bookId != undefined ? "PUT" : "POST",
        data: formData
    })

    if (response['status'] == false) {
        return { status: false, error: { message: response['message'] ?? 'Gagal membuat buku.' } };
    }

    return {
        status: true,
        success: {
            successMessage: response?.message ?? 'Buku berhasil dibuat.',
        }
    };
}

export async function deletBookAction(bookId: number): Promise<ServerActionResult> {
    const response = await globalFn().send({
        url: `http://localhost:8080/book/delete?id=${bookId}`,
        method: "DELETE"
    });

    if (response['status'] == false) {
        return { status: false, error: { message: response['message'] ?? 'Gagal menghapus buku.' } };
    }

    return {
        status: true,
        success: {
            successMessage: response['message'] ?? 'Buku berhasil dihapus.'
        }
    };
}