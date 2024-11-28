"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";

const SignupPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 text-white shadow-md rounded-lg px-8 py-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Create an Account</h2>
        <p className="text-sm text-gray-400 text-center mb-6">
          Already have an account?{" "}
          <Link href="/login">
            <span className="text-purple-500 hover:underline">Login</span>
          </Link>
        </p>
        <form>
          {/* Full Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your full name"
              required
              className="bg-gray-700 border border-gray-600 text-sm text-gray-100 rounded-lg w-full p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

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
              placeholder="Create a password"
              required
              className="bg-gray-700 border border-gray-600 text-sm text-gray-100 rounded-lg w-full p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-3 rounded-lg w-full transition"
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <hr className="flex-grow border-gray-600" />
          <span className="mx-4 text-gray-400">OR</span>
          <hr className="flex-grow border-gray-600" />
        </div>

        {/* GitHub OAuth Button */}
        <button
          onClick={() => signIn("github", { callbackUrl: "/api/dashboard" })}
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
          Sign Up with GitHub
        </button>
      </div>
    </div>
  );
};

export default SignupPage;
