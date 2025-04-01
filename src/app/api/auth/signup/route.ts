import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { username, email, password, confirmPassword } = await request.json();

    if (!username || !email || !password || !confirmPassword) {
      return NextResponse.json({ error: "لطفاً تمام فیلدها را پر کنید." }, { status: 400 });
    }

    if (password !== confirmPassword) {
      return NextResponse.json({ error: "رمز عبور و تأیید آن مطابقت ندارند." }, { status: 400 });
    }

    // بررسی وجود کاربر
    const userExists = await prisma.user.findUnique({ where: { email } });
    if (userExists) {
      return NextResponse.json({ error: "این ایمیل قبلاً ثبت شده است." }, { status: 400 });
    }

    // هش کردن پسورد قبل از ذخیره در دیتابیس
    const hashedPassword = await bcrypt.hash(password, 10);

    // ایجاد کاربر جدید
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword, // ذخیره رمز هش شده
        role: "USER",
      },
    });

    return NextResponse.json({ message: "ثبت‌نام موفقیت‌آمیز بود.", user: newUser }, { status: 201 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
}
