import type { Metadata } from "next";
import "./globals.css";
import { SessionProvider } from "next-auth/react";



export const metadata: Metadata = {
  title: "MUHIRE DAVID",
  description: "Welcome to my portfolio. Explore my projects and get in touch!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
      >
        {/* SessionProvider will automatically fetch the session */}
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
