import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { username, email, password, confirmPassword } = await request.json();

    // بررسی پر بودن تمام فیلدها
    if (!username || !email || !password || !confirmPassword) {
      return NextResponse.json(
        { error: "لطفاً تمام فیلدها را پر کنید." },
        { status: 400 }
      );
    }

    // بررسی تطابق پسورد
    if (password !== confirmPassword) {
      return NextResponse.json(
        { error: "رمز عبور و تأیید آن مطابقت ندارند." },
        { status: 400 }
      );
    }

    // بررسی عدم وجود کاربر با ایمیل مشابه
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json(
        { error: "این ایمیل قبلاً ثبت شده است." },
        { status: 400 }
      );
    }

    // ایجاد کاربر جدید در دیتابیس
    const newUser = await prisma.user.create({
      data: { username, email, password, role: "user" }, // مقدار پیش‌فرض برای role
    });

    return NextResponse.json(
      { message: "ثبت‌نام موفقیت‌آمیز بود.", user: newUser },
      { status: 201 }
    );
  } catch (error) {
    console.error("❌ خطا در ثبت‌نام:", error);
    return NextResponse.json({ error: "خطایی رخ داد." }, { status: 500 });
  }
}
