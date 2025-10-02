// src/app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ReactNode } from "react";
import FooterSection from "@/components/sections/Footer";
import Header from "@/components/patteners/Header/intex";

const inter = localFont({
  src: "./fonts/Inter.ttf",
  variable: "--font-inter",
  weight: "100 900",
});
const interItalic = localFont({
  src: "./fonts/Inter-Italic.ttf",
  variable: "--font-inter-italic",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Dev Arthur Santos",
  description: "Desenvolvedor Arthur dos Santos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt">
      <body
        className={`${inter.variable} ${interItalic.variable} antialiased`}
      >
        <Header />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
