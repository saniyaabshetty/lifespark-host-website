// "use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";


const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "LifeSpark",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" ">
      <body className={inter.className}>
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[400px] w-[1000px] -translate-x-[10%] translate-y-[50%] rounded-full "></div>
        <Toaster
          position="bottom-right"
        />
        {children}
      </body>
    </html>

  );
}