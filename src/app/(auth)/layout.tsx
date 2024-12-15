import { Inter } from "next/font/google";
import localFont from 'next/font/local'
import "../globals.css";

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

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${moul.variable} ${libre.variable}`}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}