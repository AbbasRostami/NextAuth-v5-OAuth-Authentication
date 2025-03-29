import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { users } from "@/app/lib/users";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "لطفاً تمام فیلدها را پر کنید." },
        { status: 400 }
      );
    }

    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (!user) {
      return NextResponse.json(
        { error: "ایمیل یا رمز عبور اشتباه است." },
        { status: 401 }
      );
    }

    const accessToken = jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role,
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
      },
      process.env.JWT_SECRET as string,
      { algorithm: "HS256" }
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
    return NextResponse.json(
      { error: "خطایی در پردازش درخواست رخ داد." },
      { status: 500 }
    );
  }
}
