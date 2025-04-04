import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-[35rem] p-4 pb-5 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-10 row-start-2 items-center sm:items-start max-w-3xl mx-auto">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={250}
          height={100}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-3">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-2 py-1 rounded-md font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li className="mb-3">Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-6 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-transparent transition-all duration-300 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white gap-3 text-sm sm:text-base h-12 sm:h-14 px-6 sm:px-8 shadow-lg hover:shadow-2xl hover:scale-105 hover:from-blue-600 hover:to-purple-700"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={22}
              height={22}
            />
            <span className="font-medium">Deploy Now</span>
          </a>

          <Link
            className="rounded-full border border-black/10 dark:border-white/20 transition-all duration-300 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-transparent text-sm sm:text-base h-12 sm:h-14 px-6 sm:px-8 sm:min-w-48 shadow-md hover:shadow-xl hover:scale-105"
            href="/posts"
          >
            <span className="font-medium">Posts Route</span>
          </Link>
        </div>
      </main>

      <footer className="hidden row-start-3 md:flex gap-6 lg:flex-col flex-wrap items-center justify-center mt-8">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 transition-all duration-300 ease-in-out transform hover:scale-105"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 transition-all duration-300 ease-in-out transform hover:scale-105"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 transition-all duration-300 ease-in-out transform hover:scale-105"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
