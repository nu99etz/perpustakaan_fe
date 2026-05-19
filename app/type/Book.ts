import { User } from "../dashboard/master/user/action/UserAction";

export type Book = {
    book_id?: number;
    book_isbn?: string;
    book_title?: string;
    book_author?: string;
    book_year?: string;
    book_category?: string;
    created_by?: number;
    book_cover?: string;
    created_at?: string;
    updated_at?: string;
    deleted_at?: string;
    user?: User;
};