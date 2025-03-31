import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { username, email, password, confirmPassword } = await request.json();

    if (!username || !email || !password || !confirmPassword) {
      return NextResponse.json(
        { error: "لطفاً تمام فیلدها را پر کنید." },
        { status: 400 }
      );
    }

    if (password !== confirmPassword) {
      return NextResponse.json(
        { error: "رمز عبور و تأیید آن مطابقت ندارند." },
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json(
        { error: "این ایمیل قبلاً ثبت شده است." },
        { status: 400 }
      );
    }

    const newUser = await prisma.user.create({
      data: { username, email, password },
    });

    return NextResponse.json(
      { message: "ثبت‌نام موفقیت‌آمیز بود.", user: newUser },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: "خطایی رخ داد." }, { status: 500 });
  }
}
