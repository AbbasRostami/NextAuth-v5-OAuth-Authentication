import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs"; // برای هش کردن رمز عبور
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

    // پیدا کردن کاربر در دیتابیس
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        { error: "ایمیل یا رمز عبور اشتباه است." },
        { status: 401 }
      );
    }

    // مقایسه رمز عبور ورودی با هش ذخیره شده در دیتابیس
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "ایمیل یا رمز عبور اشتباه است." },
        { status: 401 }
      );
    }

    // ایجاد توکن JWT
    const accessToken = jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role,
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24, // 24 ساعت اعتبار
      },
      process.env.JWT_SECRET as string,
      { algorithm: "HS256" }
    );

    return NextResponse.json(
      {
        message: "ورود موفقیت‌آمیز بود",
        accessToken: accessToken,
        id: user.id,
        username: user.username,
        email: user.email,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    }
    return NextResponse.json(
      { error: "خطایی در پردازش درخواست رخ داد." },
      { status: 500 }
    );
  }
}
