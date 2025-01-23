import type { Metadata } from "next";
import { Archivo } from "next/font/google";

import "./globals.css";

const archivo = Archivo({
  display: "swap",
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Modern portfolio with Next.js and motion design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} antialiased`}>{children}</body>
    </html>
  );
}
