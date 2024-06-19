import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Moul } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/navbar";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "AFCSSR Capstone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
