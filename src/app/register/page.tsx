"use client";

import axios from "axios";
import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import * as Yup from "yup";

export default function SignupForm() {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    validationSchema: Yup.object({
      username: Yup.string()
        .min(3, "Username must be at least 3 characters")
        .required("Username is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords do not match")
        .required("Confirm password is required"),
    }),

    onSubmit: async (values) => {
      try {
        const res = await axios.post("/api/auth/signup", values);

        toast.success(res?.data?.message);
        router.push("/posts");
      } catch (error: any) {
        toast.error(error?.response?.data?.error);
      }
    },
  });

  return (
<div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
  <div className="bg-gray-900 shadow-xl rounded-3xl p-8 w-full max-w-lg relative overflow-hidden">
    <div className="absolute top-0 left-0 w-48 h-48 bg-blue-500 opacity-20 blur-xl animate-pulse"></div>
    <div className="absolute bottom-0 right-0 w-36 h-36 bg-purple-500 opacity-20 blur-2xl"></div>

    <h2 className="text-3xl font-extrabold text-center text-slate-300 mb-4 tracking-tight drop-shadow-lg">
      Sign Up
    </h2>

    <form onSubmit={formik.handleSubmit} className="space-y-1">
      <div>
        <label className="block text-blue-400 text-base">Username:</label>
        <input
          type="text"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition-all duration-300 transform hover:scale-105"
          placeholder="Enter your username"
        />
        {formik.touched.username && formik.errors.username && (
          <p className="text-red-500 text-sm mt-1">{formik.errors.username}</p>
        )}
      </div>

      <div>
        <label className="block text-blue-400 text-base">Email:</label>
        <input
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition-all duration-300 transform hover:scale-105"
          placeholder="Enter your email"
        />
        {formik.touched.email && formik.errors.email && (
          <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
        )}
      </div>

      <div>
        <label className="block text-blue-400 text-base">Password:</label>
        <input
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition-all duration-300 transform hover:scale-105"
          placeholder="Enter your password"
        />
        {formik.touched.password && formik.errors.password && (
          <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
        )}
      </div>

      <div>
        <label className="block text-blue-400 text-base">
          Confirm Password:
        </label>
        <input
          type="password"
          name="confirmPassword"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full p-4  mb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition-all duration-300 transform hover:scale-105"
          placeholder="Confirm your password"
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
          <p className="text-red-500 text-sm mt-1">
            {formik.errors.confirmPassword}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-xl text-lg font-semibold tracking-wide 
                   hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:scale-105"
      >
        Register
      </button>
    </form>

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
