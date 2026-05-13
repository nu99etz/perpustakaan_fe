interface ServerActionResult {
    status?: boolean;
    error?: {
        message?: string;
        field?: string;
    };
    success?: {
        successMessage?: string;
        data?: any;
    };
}
