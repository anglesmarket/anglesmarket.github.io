import React from "react";

export default function Article({ children }) {
  // Centralized layout for all info pages, controls style globally
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-transparent">
      <article
        className="mx-auto max-w-2xl md:max-w-3xl lg:max-w-4xl w-full rounded-2xl shadow-2xl border border-gray-200 px-6 md:px-10 py-10 md:py-16 my-8 bg-[#f8fafc] text-gray-900 text-justify leading-relaxed tracking-wide"
        aria-label="Main content"
      >
        {children}
      </article>
    </div>
  );
}
