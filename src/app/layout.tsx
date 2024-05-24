import type { Metadata } from "next";
import { Inter, Open_Sans, Sacramento } from "next/font/google";
import "./globals.css";

const sacramento = Sacramento({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sacramento",
});

const open_sans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "VENDEDOR DE ALTA PERFORMACE",
  description: "Venda de Ebook",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sacramento.variable} ${open_sans.variable} ${inter.variable}`}
    >
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body>{children}</body>
    </html>
  );
}
