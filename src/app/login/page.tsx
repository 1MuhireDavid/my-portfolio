"use client";
import Link from "next/link";

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
