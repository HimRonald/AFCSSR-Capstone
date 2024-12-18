import type { Metadata } from "next";
import "../globals.css";

import { Inter } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });
const moul = localFont({
  src: [
    {
      path: "../../../public/Fonts/Moul-Regular.ttf",
      weight: "400",
    },
  ],
  variable: "--font-moul",
});
const libre = localFont({
  src: [
    {
      path: "../../../public/Fonts/LibreBaskerville-Regular.ttf",
      weight: "400",
    },
  ],
  variable: "--font-libre",
});

export const metadata: Metadata = {
  title: "Log In - ACSSR",
  description: "Log in to the ACSSR website.",
};

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${moul.variable} ${libre.variable}`}>
      <head>
        <link
          rel="icon"
          href="/image/acssr-logo.png"
          type="image/png"
          sizes="32x32"
        />
      </head>
      <body className={inter.className}>
        <div className="min-w-screen bg-white flex m-0 h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
