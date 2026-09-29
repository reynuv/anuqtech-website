import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ANU-Q Technologies — AI Automation & Innovation",
  description:
    "ANU-Q Technologies builds intelligent AI-powered products and automation solutions for modern businesses. Explore AnuQ Vastu, SkinSense, and custom AI development services.",
  keywords: "AI automation, artificial intelligence, AnuQ Vastu, SkinSense, India, OPC, technology, ANU-Q",
  openGraph: {
    title: "ANU-Q Technologies — AI Automation & Innovation",
    description: "Building intelligent AI products and automation for the modern world.",
    url: "https://anuqtech.com",
    siteName: "ANU-Q Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ANU-Q Technologies",
    description: "AI Automation & Innovation",
  },
  metadataBase: new URL("https://anuqtech.com"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className={`${inter.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
