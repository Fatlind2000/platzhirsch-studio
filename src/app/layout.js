import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/navbar";
import BeforeFooter from "@/components/Reusable/Footer.js";
import CookieComponent from "@/components/Cookies/cookiecomponent";
import dynamic from "next/dynamic";

// Include font-display swap in font imports
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Ensures font is swapped during loading
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap", // Ensures font is swapped during loading
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
        <CookieComponent />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MTT7LVDC"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
      </body>
    </html>
  );
}
