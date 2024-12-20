"use client";
import React, { useState } from "react";
import Link from "next/link";

const EmailSection = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ email: "", subject: "", desc: "" });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email, subject: form.subject, desc: form.desc }),
      });
      if (res.ok) {
        setForm({ email: "", subject: "", desc: "" });
      }
    } catch (error) {
      console.error("Error in sending email:", error);
    }
    setLoading(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      className="relative py-24 px-6 bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 dark:from-[#121212] dark:via-[#181818] dark:to-[#1E1E1E]"
      id="contact"

    >
      {/* Background Accents */}
      <div className="absolute h-96 w-96 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-700 via-transparent to-transparent rounded-full blur-2xl -z-10 top-1/3 left-10"></div>
      <div className="absolute h-72 w-72 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-600 via-transparent to-transparent rounded-full blur-2xl -z-10 bottom-1/4 right-16"></div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Section */}
        <div className="z-10">
          <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-4">Let’s Connect</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            I’m currently open to new opportunities and collaborations. Whether you have a project in mind, need advice, or just want to say hi, feel free to drop me a message. I’ll get back to you as soon as I can!

          </p>

          {/* Social Links */}
          <div className="flex gap-6 mt-4 justify-center">
            {/* GitHub Link */}
            <Link href="https://github.com" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <div className="flex items-center justify-center p-3 bg-gray-100 dark:bg-[#18191E] hover:bg-purple-500 rounded-full transition duration-300 cursor-pointer">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 text-gray-800 dark:text-white"

                >
                  <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.07 3.29 9.36 7.86 10.86.57.1.78-.25.78-.55v-2.08c-3.2.7-3.87-1.53-3.87-1.53-.52-1.32-1.27-1.67-1.27-1.67-1.03-.7.08-.68.08-.68 1.14.08 1.74 1.17 1.74 1.17 1.01 1.73 2.63 1.23 3.28.94.1-.73.4-1.23.72-1.51-2.55-.3-5.22-1.28-5.22-5.68 0-1.26.45-2.3 1.18-3.11-.12-.29-.52-1.48.11-3.08 0 0 .97-.31 3.18 1.19.92-.26 1.92-.39 2.91-.39s1.99.13 2.91.39c2.21-1.5 3.18-1.19 3.18-1.19.63 1.6.23 2.79.11 3.08.73.81 1.18 1.85 1.18 3.11 0 4.41-2.68 5.37-5.23 5.67.41.36.77 1.07.77 2.15v3.18c0 .3.21.65.79.55A10.5 10.5 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
                </svg>
              </div>
            </Link>
             {/* LinkedIn Link */}
             <Link
              href="https://linkedin.com"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center justify-center p-3 bg-[#18191E] hover:bg-blue-500 rounded-full transition duration-300 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 text-white"
                >
                  <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.24.79 24 1.77 24h20.46c.98 0 1.77-.76 1.77-1.73V1.72C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9.03h3.56v11.42zM5.34 7.55c-1.14 0-1.88-.78-1.88-1.75 0-.98.75-1.75 1.9-1.75s1.87.76 1.87 1.75c0 .97-.73 1.75-1.88 1.75zm15.11 12.91h-3.56v-5.83c0-1.46-.54-2.45-1.88-2.45-1.03 0-1.64.7-1.91 1.38-.1.25-.13.6-.13.95v5.95H9.41s.05-9.66 0-10.66h3.56v1.51c.47-.73 1.32-1.78 3.22-1.78 2.35 0 4.11 1.54 4.11 4.87v6.06z" />
                </svg>
              </div>
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="z-10 bg-gray-100 dark:bg-[#18191E] rounded-lg shadow-lg p-8">
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleInputChange}
                value={form.email}
                placeholder="you@example.com"
                required
                className="w-full bg-white dark:bg-[#1E2025] border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white text-sm rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-offset-[#121212]"
              />
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                onChange={handleInputChange}
                value={form.subject}
                placeholder="Subject of your message"
                required
                className="w-full bg-white dark:bg-[#1E2025] border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white text-sm rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-offset-[#121212]"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="desc"
                name="desc"
                onChange={handleInputChange}
                value={form.desc}
                rows={5}
                placeholder="Your message here..."
                required
                className="w-full bg-white dark:bg-[#1E2025] border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white text-sm rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-offset-[#121212]"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold text-sm py-3 rounded-lg shadow-md focus:ring-2 focus:ring-purple-400 dark:focus:ring-offset-[#121212] transition duration-300"
            >
              {!loading ? "Send your email" : "Processing..."}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
