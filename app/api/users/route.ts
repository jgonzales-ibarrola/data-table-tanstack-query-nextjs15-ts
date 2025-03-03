import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      include: {
        userRoles: {
          include: {
            role: {
              include: {
                permissions: true
              }
            }
          }
        }
      }
    });

    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ message: "Failed to fetch Users." }, { status: 500 });
  }
}

export async function POST(req: Request){
  try {
    const {name, email, phone, status, roleIds} = await req.json();

    const newUser = await prisma.user.create({
      data: {
        name, email, phone, status,
        userRoles: {
          create: roleIds.map((roleId: string) => ({
            role: { connect: { id: roleId }}
          }))
        }
      }
    })
  } catch (error) {
    return NextResponse.json({ message: "Failed to fetch Users." } , { status: 500 });
  }
}