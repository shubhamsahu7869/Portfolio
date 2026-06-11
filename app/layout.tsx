import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Shubham | Software Developer & Full Stack Developer",
  description:
    "Premium portfolio of Shubham, a Software Developer, Full Stack Developer, and Electronics & Communication Engineering student building scalable applications.",
  keywords: [
    "Shubham",
    "Software Developer",
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Portfolio India"
  ],
  authors: [{ name: "Shubham Sahu" }],
  metadataBase: new URL("https://shubham-portfolio.vercel.app"),
  openGraph: {
    title: "Shubham | Software Developer & Full Stack Developer",
    description: "Building scalable software and web applications with modern technologies.",
    type: "website",
    locale: "en_IN"
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#05070d"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} bg-white text-slate-950 antialiased dark:bg-ink dark:text-white`}>
        {children}
      </body>
    </html>
  );
}
