import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from 'next/font/local'
import "../globals.css";
import Navbar from "@/components/Navbar/navbar";
import FooterComponent from "@/components/Footer/footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });
const moul = localFont({
  src:[
    {
      path:'../../../public/Fonts/Moul-Regular.ttf',
      weight: "400",
    },
  ],
  variable: "--font-moul",
});
const libre = localFont({
  src:[
    {
      path:'../../../public/Fonts/LibreBaskerville-Regular.ttf',
      weight: "400",
    },
  ],
  variable: "--font-libre",
});

export const metadata: Metadata = {
  title: "Association of Former Cambodian Students from Soviet Union and Russia - ACSSR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${moul.variable} ${libre.variable}`}>
      <head>
          <link
            rel="icon"
            href="/images/afcssr-logo.svg"
            type="image/svg"
            sizes="32x32"
          />
        </head>
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
