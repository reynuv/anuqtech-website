import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ANU-Q Technologies — Practical AI, Automation & Digital Solutions",
  description:
    "ANU-Q Technologies turns manual work, disconnected tools and new ideas into practical AI, automation and digital solutions.",
  keywords: "AI automation, artificial intelligence, digital solutions, India, OPC, technology, ANU-Q",
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
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
