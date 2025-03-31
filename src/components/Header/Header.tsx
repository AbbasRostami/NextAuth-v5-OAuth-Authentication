"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const pathname = usePathname();
  console.log(pathname);

  const { data: session } = useSession();

  console.log("Session dataaa:", session);

  const linkStyle = (href: string) => `
    relative text-xl font-semibold transition-all duration-300
    ${pathname === href ? "text-teal-400" : "text-gray-300"}
    hover:text-teal-300
    after:absolute after:content-[''] 
    after:w-full after:h-[2px] 
    after:bg-gradient-to-r after:from-teal-400 after:via-green-400 after:to-yellow-400
    after:left-0 after:bottom-[-6px] 
    after:scale-x-0 hover:after:scale-x-100 
    after:transition-transform after:duration-500
    hover:drop-shadow-[0_0_8px_#14b8a6]`;

  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <ul className="flex justify-center gap-8 items-baseline">
            <li className="text-2xl font-semibold">
              <Link href="/" className={linkStyle("/")}>
                Your Company
              </Link>
            </li>

            {session?.accessToken ? (
              <button
                onClick={() => signOut({ callbackUrl: "/login" })}
                className="text-xl font-semibold text-red-600"
              >
                Logout
              </button>
            ) : (
              <>
                <li>
                  <Link href="/register" className={linkStyle("/register")}>
                    Register
                  </Link>
                </li>
                <li>
                  <Link href="/login" className={linkStyle("/login")}>
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>

          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="/form" className={linkStyle("/form")}>
                  Form
                </Link>
              </li>
              <li>
                <Link href="/posts" className={linkStyle("/posts")}>
                  Posts
                </Link>
              </li>
              <li>
                <Link href="/users" className={linkStyle("/users")}>
                  Users
                </Link>
              </li>
              <li>
                <Link href="/contact" className={linkStyle("/contact")}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
