import { PrismaClient } from '@prisma/client';
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    // دریافت محتوای درخواست به صورت JSON
    const requestBody = await request.json();
    console.log('Request Body:', requestBody);  // مشاهده محتوای درخواست

    // استخراج فیلدها
    const { username, email, password, confirmPassword } = requestBody;

    if (!username || !email || !password || !confirmPassword) {
      return NextResponse.json({ error: "لطفاً تمام فیلدها را پر کنید." }, { status: 400 });
    }

    if (password !== confirmPassword) {
      return NextResponse.json({ error: "رمز عبور و تأیید آن مطابقت ندارند." }, { status: 400 });
    }

    // بررسی وجود کاربر
    const userExists = await prisma.usersAuth.findUnique({ where: { email } });
    if (userExists) {
      return NextResponse.json({ error: "این ایمیل قبلاً ثبت شده است." }, { status: 400 });
    }

    // هش کردن رمز عبور
    const hashedPassword = await bcrypt.hash(password, 10);

    // ایجاد کاربر جدید
    const newUser = await prisma.usersAuth.create({
      data: {
        username,
        email,
        password: hashedPassword,
        role: "USER",
      },
    });

    return NextResponse.json({ message: "ثبت‌نام موفقیت‌آمیز بود.", user: newUser }, { status: 201 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error details:", error.message);
      return NextResponse.json({ error: "مشکلی در ثبت‌نام پیش آمده است." }, { status: 500 });
    } else {
      console.error("Unexpected error:", error);
      return NextResponse.json({ error: "مشکلی ناشناخته به وجود آمده است." }, { status: 500 });
    }
  }
}
