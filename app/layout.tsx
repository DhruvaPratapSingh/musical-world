import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Musical World🎻🎷",
  description: "Welcome to Music World",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
       <div className="flex items-center justify-center relative w-full">
       <Navbar />
       </div>
        {children}
      </body>
    </html>
  );
}
