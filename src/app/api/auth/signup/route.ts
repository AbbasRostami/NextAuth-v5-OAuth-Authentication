import { users } from "@/app/lib/users";
import { NextResponse } from "next/server";
interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  role: string; // دیگر اختیاری نیست
}
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

    const userExists = users.some(
      (user: { email: string }) => user.email === email
    );

    if (userExists) {
      return NextResponse.json(
        { error: "این ایمیل قبلاً ثبت شده است." },
        { status: 400 }
      );
    }

    const newUser: User = {
      id: users.length + 1,
      username,
      email,
      password,
      role: "",
    };
    users.push(newUser);

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
