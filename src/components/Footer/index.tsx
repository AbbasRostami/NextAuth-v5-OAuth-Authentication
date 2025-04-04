import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 relative overflow-hidden">
      <div className="absolute inset-0 flex justify-center items-center opacity-10">
        <div className="w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center relative z-10">
        <p className="text-sm md:text-lg font-semibold tracking-wide text-gray-300">
          &copy; {new Date().getFullYear()} Your Company Name. All Rights
          Reserved.
        </p>

        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="/privacy-policy"
            className="text-gray-300 hover:text-blue-400 transition-all duration-300 text-lg font-medium transform hover:scale-105"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            className="text-gray-300 hover:text-blue-400 transition-all duration-300 text-lg font-medium transform hover:scale-105"
          >
            Terms of Service
          </a>
        </div>
      </div>

      <div className="mt-6 border-t border-gray-700 w-5/6 mx-auto opacity-50"></div>

      <div className="absolute -top-10 left-10 w-32 h-32 bg-indigo-500 opacity-20 blur-3xl animate-bounce"></div>
      <div className="absolute bottom-0 right-10 w-24 h-24 bg-purple-500 opacity-20 blur-2xl animate-pulse"></div>
    </footer>
  );
};

export default Footer;
