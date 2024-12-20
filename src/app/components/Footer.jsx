const Footer = () => {
  return (
    <footer className="dark:bg-gradient-to-r from-[#1A1A1A] via-[#181818] to-[#1A1A1A] text-white border-t border-[#33353F] py-2">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Branding Section */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-2xl text-black dark:text-white font-bold">MUHIRE DAVID</h3>
          <p className="text-sm text-slate-400 mt-1">
            Full Stack Developer | Passionate Creator
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 my-4 md:my-0">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-[#282828] hover:bg-purple-500 transition duration-300"
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="h-6 w-6 text-white"
            >
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.07 3.29 9.36 7.86 10.86.57.1.78-.25.78-.55v-2.08c-3.2.7-3.87-1.53-3.87-1.53-.52-1.32-1.27-1.67-1.27-1.67-1.03-.7.08-.68.08-.68 1.14.08 1.74 1.17 1.74 1.17 1.01 1.73 2.63 1.23 3.28.94.1-.73.4-1.23.72-1.51-2.55-.3-5.22-1.28-5.22-5.68 0-1.26.45-2.3 1.18-3.11-.12-.29-.52-1.48.11-3.08 0 0 .97-.31 3.18 1.19.92-.26 1.92-.39 2.91-.39s1.99.13 2.91.39c2.21-1.5 3.18-1.19 3.18-1.19.63 1.6.23 2.79.11 3.08.73.81 1.18 1.85 1.18 3.11 0 4.41-2.68 5.37-5.23 5.67.41.36.77 1.07.77 2.15v3.18c0 .3.21.65.79.55A10.5 10.5 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-[#282828] hover:bg-blue-500 transition duration-300"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="h-6 w-6 text-white"
            >
              <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.24.79 24 1.77 24h20.46c.98 0 1.77-.76 1.77-1.73V1.72C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9.03h3.56v11.42zM5.34 7.55c-1.14 0-1.88-.78-1.88-1.75 0-.98.75-1.75 1.9-1.75s1.87.76 1.87 1.75c0 .97-.73 1.75-1.88 1.75zm15.11 12.91h-3.56v-5.83c0-1.46-.54-2.45-1.88-2.45-1.03 0-1.64.7-1.91 1.38-.1.25-.13.6-.13.95v5.95H9.41s.05-9.66 0-10.66h3.56v1.51c.47-.73 1.32-1.78 3.22-1.78 2.35 0 4.11 1.54 4.11 4.87v6.06z" />
            </svg>
          </a>
        </div>

        {/* Copyright Section */}
        <div className="text-center md:text-right">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} MUHIRE DAVID. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
