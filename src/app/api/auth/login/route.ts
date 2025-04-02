import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

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

    if (!process.env.JWT_SECRET) {
      return NextResponse.json(
        { error: "مشکل احراز هویت. لطفاً بعداً امتحان کنید." },
        { status: 500 }
      );
    }

    const user = await prisma.usersAuth.findUnique({ where: { email } });
    if (!user) {
      return NextResponse.json(
        { error: "اطلاعات وارد شده اشتباه است." },
        { status: 401 }
      );
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "اطلاعات وارد شده اشتباه است." },
        { status: 401 }
      );
    }

    let accessToken;
    try {
      accessToken = jwt.sign(
        { id: user.id, email: user.email, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );
    } catch (error) {
      return NextResponse.json(
        { error: "مشکلی در ایجاد توکن پیش آمده است." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        message: "ورود موفقیت‌آمیز بود.",
        accessToken,
        id: user.id,
        email: user.email,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("⚠️ خطای سرور:", error.message);
    }
    return NextResponse.json({ error: "خطایی رخ داده است." }, { status: 500 });
  }
}
