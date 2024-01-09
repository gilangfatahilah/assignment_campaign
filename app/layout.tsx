import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Campflix",
  description: "Your favorite Tv Shows, all in one place.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={dmSans.className}>
        <main className="mx-auto bg-[#221F1F]">
          <Navbar />
          <Hero />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
