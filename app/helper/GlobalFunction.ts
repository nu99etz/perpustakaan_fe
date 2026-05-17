import { cookies } from "next/headers";

class GlobalFunction {

    async send({ url, method, data, callBack }: { url: string, method: string, data?: any, callBack?: any }) {
        const token = (await cookies()).get('token')?.value;
        const res = await fetch(url, {
            method: method,
            headers: {
                // "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            cache: 'no-store',
            body: data
        });
        const response = await res.json();
        if (callBack != undefined) {
            return callBack(response);
        }
        return response;
    }
}

export default GlobalFunction;