import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
	try {
		const roles = await prisma.role.findMany({
			include: {
				permissions: true,
			},
		});

		return NextResponse.json(roles);
	} catch (error) {
		return NextResponse.json(
			{ message: "Failed to fetch roles." },
			{ status: 500 }
		);
	}
}

export async function POST(req: Request) {
	try {
		const { name, permissionIds } = await req.json();

		const newRole = await prisma.role.create({
			data: {
				name,
				permissions: {
					connect: permissionIds.map((id: string) => ({ id })),
				},
			},
		});

		return NextResponse.json(newRole, { status: 201 });
	} catch (error) {
		return NextResponse.json(
			{ message: "Failed to create role." },
			{ status: 500 }
		);
	}
}

export async function PUT(req: Request) {
	try {
		const { id, name, permissionIds } = await req.json();

		const updatedRole = await prisma.role.update({
			where: { id },
			data: {
				name,
				permissions: {
					set: permissionIds.map((id: string) => ({ id })),
				}, // Update permissions
			},
			include: { permissions: true },
		});

		return NextResponse.json(updatedRole, { status: 200 });
	} catch (error) {
		return NextResponse.json(
			{ error: "Failed to update role" },
			{ status: 500 }
		);
	}
}

export async function DELETE(req: Request) {
	try {
		const { id } = await req.json();

		await prisma.role.delete({ where: { id } });

		return NextResponse.json(
			{ message: "Role deleted successfully" },
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json(
			{ error: "Failed to delete role" },
			{ status: 500 }
		);
	}
}
