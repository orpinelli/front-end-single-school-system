import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    template: "%s | Sistema Unico de Escola",
    default: "Sistema Unico de Escola",
  },
  description: "Sistema Unico para gerenciamento de Escola",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={inter.variable} lang="pt">
      <head></head>
      <body className="bg-zinc-950 text-zinc-50 antialised">{children}</body>
    </html>
  );
}
