import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Auth from "@/components/Auth";
import ReduxProvider from "@/components/ReduxProvider";

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin", "thai"],
  weight: "500"
});


export const metadata: Metadata = {
  title: "พิชิต 300",
  description: "เว็บไซต์สำหรับฝึกทำโจทย์เกี่ยวกับการเขียนโปรแกรม",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kanit.variable} antialiased flex flex-col justify-between h-screen`}
      >
        <ReduxProvider>
          <Auth />
          <Navbar />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
