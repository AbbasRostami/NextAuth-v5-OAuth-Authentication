"use client";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export default function LoginForm() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const onSubmit = async (values: { email: string; password: string }) => {
    startTransition(async () => {
      console.log("🚀 Sending login request:", values);

      const res = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: true,
        callbackUrl: "/",
      });

      console.log("✅ Server response:", res);

      if (res?.error) {
        toast.error(res.error);
        return;
      }

      toast.success("ورود موفقیت‌آمیز بود");
      router.push("/");
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-gray-900 shadow-xl rounded-3xl p-8 w-full max-w-lg relative overflow-hidden">
        <div className="absolute top-0 left-0 w-48 h-48 bg-blue-500 opacity-20 blur-xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-36 h-36 bg-purple-500 opacity-20 blur-2xl"></div>

        <h2 className="text-3xl font-bold text-center text-slate-300 mb-8 tracking-tight drop-shadow-lg">
          Login to Personal Account
        </h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-6">
              <div>
                <label className="block text-blue-400 mb-2 text-base">
                  Email:
                </label>
                <Field
                  type="email"
                  name="email"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition-all duration-300 transform hover:scale-105"
                  placeholder="Enter your email"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label className="block text-blue-400 mb-2 text-base">
                  Password:
                </label>
                <Field
                  type="password"
                  name="password"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition-all duration-300 transform hover:scale-105"
                  placeholder="Enter your password"
                />
                <ErrorMessage
                  name="password"
                  component="p"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 rounded-xl text-lg font-semibold tracking-wide 
                     hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:scale-105"
                disabled={isSubmitting || isPending}
              >
                {isPending ? (
                  <div className="flex justify-center items-center">
                    <div className="spinner-border animate-spin w-6 h-6 border-t-2 border-b-2 border-white rounded-full"></div>{" "}
                  </div>
                ) : (
                  "Login"
                )}
              </button>
            </Form>
          )}
        </Formik>

        <div className="flex justify-center items-center gap-4 mt-6 w-full">
          <button
            onClick={() => signIn("github", { callbackUrl: "/" })}
            className="w-full flex justify-center items-center gap-3 bg-white p-3 rounded-lg shadow-md hover:bg-teal-200 transition-all duration-300 transform hover:scale-105"
          >
            <FaGithub size={24} />
            <p className="text-gray-800">Continue with GitHub</p>
          </button>

          <button
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="w-full flex justify-center items-center gap-3 bg-white text-black p-3 rounded-lg shadow-md hover:bg-amber-200 transition-all duration-300 transform hover:scale-105"
          >
            <FcGoogle size={24} />
            <p className="text-black">Continue with Google</p>
          </button>
        </div>
      </div>
    </div>
  );
}
