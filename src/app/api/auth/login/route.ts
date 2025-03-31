import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "لطفاً تمام فیلدها را پر کنید." },
        { status: 400 }
      );
    }

    // پیدا کردن کاربر در دیتابیس
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || user.password !== password) {
      return NextResponse.json(
        { error: "ایمیل یا رمز عبور اشتباه است." },
        { status: 401 }
      );
    }

    // ایجاد توکن JWT
    const accessToken = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET as string,
      { expiresIn: "1d" }
    );

    return NextResponse.json(
      {
        message: "ورود موفقیت‌آمیز بود",
        accessToken,
        id: user.id,
        username: user.username,
        email: user.email,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "خطایی در پردازش درخواست رخ داد." },
      { status: 500 }
    );
  }
}
