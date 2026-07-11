import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
