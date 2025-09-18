"use client";
import React, { useState } from "react";

export function SignupForm({ onSwitch }) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <form className="flex flex-col gap-6">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-2 text-center">Create Your Account 🚀</h2>
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
        <input
          id="name"
          type="text"
          placeholder="Your Name"
          className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 text-lg bg-gray-50"
          autoComplete="name"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
        <input
          id="email"
          type="email"
          placeholder="you@email.com"
          className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 text-lg bg-gray-50"
          autoComplete="email"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
        <div className="relative">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 text-lg bg-gray-50 w-full"
            autoComplete="new-password"
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-green-500 text-lg"
            onClick={() => setShowPassword((v) => !v)}
            tabIndex={-1}
            aria-label="Toggle password visibility"
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>
      </div>
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl py-3 text-lg shadow-lg transition-all duration-200 mt-2"
      >
        Sign Up
      </button>
  <div className="flex gap-3 mt-4 justify-center">
        <button type="button" className="flex items-center justify-center bg-white border border-gray-300 rounded-full p-2 shadow hover:bg-gray-50 transition-all" aria-label="Sign up with Google">
          <svg className="w-6 h-6" viewBox="0 0 24 24"><g><path fill="#4285F4" d="M21.6 12.227c0-.818-.073-1.604-.21-2.364H12v4.482h5.352a4.58 4.58 0 0 1-1.98 3.004v2.497h3.2c1.872-1.726 2.928-4.272 2.928-7.619z"/><path fill="#34A853" d="M12 22c2.43 0 4.47-.805 5.96-2.188l-3.2-2.497c-.89.6-2.03.96-3.26.96-2.51 0-4.64-1.695-5.4-3.978H2.76v2.522A9.997 9.997 0 0 0 12 22z"/><path fill="#FBBC05" d="M6.6 13.297a5.98 5.98 0 0 1 0-3.594V7.181H2.76a9.997 9.997 0 0 0 0 9.638l3.84-2.522z"/><path fill="#EA4335" d="M12 6.438c1.32 0 2.5.454 3.43 1.346l2.57-2.57C16.47 3.805 14.43 3 12 3A9.997 9.997 0 0 0 2.76 7.181l3.84 2.522C7.36 8.133 9.49 6.438 12 6.438z"/></g></svg>
        </button>
        <button type="button" className="flex items-center justify-center bg-white border border-gray-300 rounded-full p-2 shadow hover:bg-gray-50 transition-all" aria-label="Sign up with GitHub">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.525.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.578.688.48A10.013 10.013 0 0 0 22 12.021C22 6.484 17.523 2 12 2z"/></svg>
        </button>
        <button type="button" className="flex items-center justify-center bg-white border border-gray-300 rounded-full p-2 shadow hover:bg-gray-50 transition-all" aria-label="Sign up with LinkedIn">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#0A66C2"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.156 1.459-2.156 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.597 2.001 3.597 4.601v5.595z"/></svg>
        </button>
      </div>
      <div className="text-center text-gray-500 text-sm mt-2">
        <span>Already have an account? </span>
        <button
          type="button"
          className="text-green-500 hover:underline font-bold"
          onClick={onSwitch}
        >
          Login
        </button>
      </div>
      <div className="flex justify-between text-xs text-gray-400 mt-2">
        <span>By signing up, you agree to our <a href="#" className="underline hover:text-green-500">Terms</a> & <a href="#" className="underline hover:text-green-500">Privacy</a>.</span>
      </div>
    </form>
  );
}
