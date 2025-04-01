import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ error: "لطفاً تمام فیلدها را پر کنید." }, { status: 400 });
    }

    if (!process.env.JWT_SECRET) {
      console.error("🚨 JWT_SECRET تنظیم نشده است.");
      return NextResponse.json({ error: "مشکل احراز هویت. لطفاً بعداً امتحان کنید." }, { status: 500 });
    }

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return NextResponse.json({ error: "ایمیل یا رمز عبور نادرست است." }, { status: 401 });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ error: "ایمیل یا رمز عبور نادرست است." }, { status: 401 });
    }

    const accessToken = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    return NextResponse.json({ message: "ورود موفق", accessToken, id: user.id, email: user.email }, { status: 200 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("⚠️ خطای سرور:", error.message);
    }
    return NextResponse.json({ error: "خطایی رخ داده است." }, { status: 500 });
  }
}
