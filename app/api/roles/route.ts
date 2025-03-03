import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const roles = await prisma.role.findMany({
            include: {
                permissions: true
            }
        });

        return NextResponse.json(roles);
    } catch (error) {
        return NextResponse.json({ message: "Failed to fetch roles."}, { status: 500 })
    }
}

export async function POST(req: Request) {
    try {
        const {name, permissionIds}= await req.json();
        
        const newRole = await prisma.role.create({
            data: {
                name,
                permissions: {
                    connect: permissionIds.map((id: string) => ({ id }))
                }
            }
        })

        return NextResponse.json(newRole, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Failed to create role."}, { status: 500 })
    }
}