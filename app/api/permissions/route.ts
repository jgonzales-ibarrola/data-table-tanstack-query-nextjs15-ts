import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const permissions = await prisma.permission.findMany({
            include: {
                role: true
            }
        })

        return NextResponse.json(permissions)
    } catch (error) {
        return NextResponse.json({ message: "Failed to fetch Permissions."}, { status: 500 })
    }
}

export async function POST(req: Request){
    try {
        const { name } = await req.json();

        const newPermission = await prisma.permission.create({
            data: {
                name
            }
        })

        return NextResponse.json(newPermission, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: "Failed to create Permission."}, { status: 500 })
    }
}