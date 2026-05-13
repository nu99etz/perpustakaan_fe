import { NextRequest, NextResponse } from "next/server";
import { getUserById } from "../../../dashboard/master/user/action/UserAction";

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const user = await getUserById(id);

    if (!user) {
        return NextResponse.json({ error: "User tidak ditemukan." }, { status: 404 });
    }

    return NextResponse.json(user);
}
