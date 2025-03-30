"use client";

import { createPost } from "@/actions/formActions";
import { useFormik } from "formik";
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
        alert("Post submitted successfully!");
        resetForm();
      } catch (error) {
        console.error(error);
        alert("An error occurred. Please try again.");
      }
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-gray-900 shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-slate-400 mb-6">
          ارسال پست جدید
        </h2>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div>
            <label className="block text-blue-400 mb-1">Title:</label>
            <input
              type="text"
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="عنوان پست را وارد کنید"
            />
            {formik.touched.title && formik.errors.title && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.title}</p>
            )}
          </div>

          <div>
            <label className="block text-blue-400 mb-1">Description:</label>
            <textarea
              name="content"
              value={formik.values.content}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="محتوای پست را وارد کنید"
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
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-all duration-300"
          >
            ارسال پست
          </button>
        </form>
      </div>
    </div>
  );
}
