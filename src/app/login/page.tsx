"use client";
import Link from "next/link";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 text-white shadow-md rounded-lg px-8 py-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Welcome Back</h2>
        <p className="text-sm text-gray-400 text-center mb-6">
          Don&apos;t have an account?{" "}
          <Link href="/register">
            <span className="text-purple-500 hover:underline">Sign up</span>
          </Link>
        </p>

        <form>
          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="your-email@example.com"
              required
              className="bg-gray-700 border border-gray-600 text-sm text-gray-100 rounded-lg w-full p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Your password"
              required
              className="bg-gray-700 border border-gray-600 text-sm text-gray-100 rounded-lg w-full p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-3 rounded-lg w-full transition"
          >
            Login
          </button>
        </form>

        {/* Social Login Buttons */}
        <div className="mt-6 space-y-3">
          <button
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 rounded-lg w-full transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="h-6 w-6 mr-2"
            >
              <path d="M21.35 11.1h-9.24v2.72h5.32c-.23 1.22-1.46 3.58-5.32 3.58a6.25 6.25 0 1 1 0-12.5c1.84 0 3.14.78 3.85 1.45l2.41-2.34C15.93 2.83 14.06 2 11.78 2a10.26 10.26 0 1 0 0 20.5c5.44 0 9.02-3.82 9.02-9.3a8.83 8.83 0 0 0-.45-2.1z" />
            </svg>
            Sign in with Google
          </button>

          <button
            onClick={() => signIn("github", { callbackUrl: "/" })}
            className="flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 rounded-lg w-full transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="h-6 w-6 mr-2"
            >
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.07 3.29 9.36 7.86 10.86.57.1.78-.25.78-.55v-2.08c-3.2.7-3.87-1.53-3.87-1.53-.52-1.32-1.27-1.67-1.27-1.67-1.03-.7.08-.68.08-.68 1.14.08 1.74 1.17 1.74 1.17 1.01 1.73 2.63 1.23 3.28.94.1-.73.4-1.23.72-1.51-2.55-.3-5.22-1.28-5.22-5.68 0-1.26.45-2.3 1.18-3.11-.12-.29-.52-1.48.11-3.08 0 0 .97-.31 3.18 1.19.92-.26 1.92-.39 2.91-.39s1.99.13 2.91.39c2.21-1.5 3.18-1.19 3.18-1.19.63 1.6.23 2.79.11 3.08.73.81 1.18 1.85 1.18 3.11 0 4.41-2.68 5.37-5.23 5.67.41.36.77 1.07.77 2.15v3.18c0 .3.21.65.79.55A10.5 10.5 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
            </svg>
            Sign in with GitHub
          </button>

          <button
            onClick={() => signIn("linkedin", { callbackUrl: "/" })}
            className="flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 rounded-lg w-full transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="h-6 w-6 mr-2"
            >
              <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.22.79 24 1.77 24h20.46c.98 0 1.77-.78 1.77-1.73V1.72C24 .77 23.21 0 22.23 0zM7.12 20.41H3.56V9.41h3.56v11zm-1.78-12.63a2.07 2.07 0 1 1 .001-4.14 2.07 2.07 0 0 1-.001 4.14zm15.11 12.63h-3.56v-5.63c0-1.34-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.73h-3.56V9.41h3.41v1.5h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.44v6.91z" />
            </svg>
            Sign in with LinkedIn
          </button>
        </div>

        {/* Forgot Password */}
        <p className="text-center mt-4 text-sm text-gray-400">
          <Link href="/forgot-password">
            <span className="text-purple-500 hover:underline">Forgot password?</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
