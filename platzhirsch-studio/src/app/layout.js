import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/navbar";
import BeforeFooter from "@/components/Reusable/Footer.js";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Platzhirsch Studio",
  description:
    "Wohnstudio Platzhirsch Home Living – Luxuriöse Möbel in Österreich, mit einzigartigen Designs und modernen Lösungen für Ihr Zuhause.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <BeforeFooter />
      </body>
    </html>
  );
}
