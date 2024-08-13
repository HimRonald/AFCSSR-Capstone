import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Moul } from "next/font/google";
import { Libre_Baskerville } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/navbar";
import FooterComponent from "@/components/Footer/footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "AFCSSR Capstone",
};

const libre = Libre_Baskerville({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-libre",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer
          position="top-left"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div className="mb-[120px]">
          <Navbar />
        </div>
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
