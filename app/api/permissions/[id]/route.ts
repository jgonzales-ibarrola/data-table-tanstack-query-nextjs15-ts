import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// Update Entire Columns
export async function PUT(req: Request, {params} : {
    params: Promise<{
        id: string
    }>
}){
    const {id} = await params
        const {name} = await req.json();

    try {

        const updatedPermission = await prisma.permission.update({
            where: { id },
            data: {
                name
            }
        })

        return NextResponse.json(updatedPermission, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: "Failed to update Permission."}, { status: 500 })
    }
}

// Update Specific Fields
export async function PATCH(req: Request, { params } : {
    params: Promise<{
        id: string
    }>
}){
    try {
        const {id} = await params
        const data = await req.json();

        const updatedPermission = await prisma.permission.update({
            where: { id },
            data
        })

        return NextResponse.json(updatedPermission, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: "Failed to update Permission."}, { status: 500 })
    }
}