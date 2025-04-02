"use client";

import { createPost } from "@/actions/formActions";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import * as Yup from "yup";

export default function PostForm() {
  const formik = useFormik({
    initialValues: {
      title: "",
      content: "",
    },

    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      content: Yup.string().required("Content is required"),
    }),

    onSubmit: async (values, { resetForm }) => {
      try {
        const formData = new FormData();
        formData.append("title", values.title);
        formData.append("content", values.content);

        await createPost(formData);
        toast.success("Post submitted successfully!");
        resetForm();
      } catch (error) {
        console.error(error);
        toast.error("An error occurred. Please try again.");
      }
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-gray-900 shadow-2xl rounded-3xl p-8 w-full max-w-lg relative overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500 opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-36 h-36 bg-purple-500 opacity-20 blur-2xl"></div>

        <h2 className="text-3xl font-extrabold text-center text-slate-300 mb-6 tracking-tight drop-shadow-lg">
          Create a New Post
        </h2>

        <form onSubmit={formik.handleSubmit} className="space-y-5">
          <div>
            <label className="block text-blue-400 mb-2 text-lg">
              Post Title:
            </label>
            <input
              type="text"
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-4 border border-gray-600 rounded-xl bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300 transform hover:scale-105"
              placeholder="Enter post title"
            />
            {formik.touched.title && formik.errors.title && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.title}</p>
            )}
          </div>

          <div>
            <label className="block text-blue-400 mb-2 text-lg">
              Post Content:
            </label>
            <textarea
              name="content"
              value={formik.values.content}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-4 border border-gray-600 rounded-xl bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300 transform hover:scale-105"
              placeholder="Enter post content"
              rows={4}
            />
            {formik.touched.content && formik.errors.content && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.content}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-xl text-lg font-semibold tracking-wide 
                 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:scale-105"
          >
            Submit Post 🚀
          </button>
        </form>
      </div>
    </div>
  );
}
