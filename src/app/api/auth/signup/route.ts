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
        { error: "رمز عبور و تأیید رمز عبور مطابقت ندارند." },
        { status: 400 }
      );
    }

    // Check if the user already exists
    const userExists = await prisma.user.findUnique({
      where: { email },
    });

    if (userExists) {
      return NextResponse.json(
        { error: "این ایمیل قبلاً ثبت شده است." },
        { status: 400 }
      );
    }

    // Create new user in the database
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password, // You may want to hash the password here
        role: "", // Set default role or adjust according to your logic
      },
    });

    return NextResponse.json(
      { message: "ثبت‌نام با موفقیت انجام شد.", user: newUser },
      { status: 201 }
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
}
