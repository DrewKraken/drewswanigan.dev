import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Drew Swanigan — Backend Engineer",
  description:
    "Backend engineer building SaaS platforms and infrastructure automation systems. APIs, workers, orchestration, and product engineering.",
  keywords: [
    "backend engineer",
    "SaaS",
    "infrastructure automation",
    "AWS",
    "Node.js",
    "Python",
    "TypeScript",
  ],
  authors: [{ name: "Drew Swanigan" }],
  openGraph: {
    title: "Drew Swanigan — Backend Engineer",
    description:
      "Backend engineer building SaaS platforms and infrastructure automation systems.",
    url: "https://drewswanigan.dev",
    siteName: "Drew Swanigan",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Drew Swanigan — Backend Engineer",
    description:
      "Backend engineer building SaaS platforms and infrastructure automation systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
