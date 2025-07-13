import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import "./globals.css";

export const metadata: Metadata = {
  title: "SIBANANDA SAHU - Professional Portfolio",
  description: "Built with passion and modern web technologies.",
  icons: {
    icon: "favicon.png",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
