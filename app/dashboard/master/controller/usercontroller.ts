import { NextResponse } from "next/server"

export class UserController {
    static async submitLogin(formData: FormData, setData: any) {
        const res = await fetch("http://localhost:8080/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "user_name": formData.get("username"),
                "password": formData.get("password")
            })
        })
        const data = await res.json();
        const response = NextResponse.json({});
        if(data['error'] !== undefined) {
            
        } else {
            console.log(`masuk kesini ${data['token']}`)
            response.cookies.set('token', data['token']);
        }
        setData(data)
    }
}