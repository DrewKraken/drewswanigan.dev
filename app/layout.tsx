import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const TITLE = "Drew Swanigan — Public Safety Systems Engineer + SaaS Founder";
const DESCRIPTION =
  "Mission-critical systems engineer. Public safety communications (P25, PSAP, dispatch consoles) and production SaaS. Former 911 telecommunicator.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "public safety",
    "PSAP",
    "P25",
    "Project 25",
    "L3Harris VIDA",
    "MASTR V",
    "Motorola ASTRO P25",
    "Tait DMR",
    "Avtec",
    "Zetron",
    "dispatch console",
    "mission critical communications",
    "systems engineer",
    "implementation engineer",
    "solutions engineer",
    "technical account manager",
    "911 telecommunicator",
    "CJIS",
    "SCADA",
    "SaaS",
    "Python",
    "FastAPI",
    "TypeScript",
    "Next.js",
  ],
  authors: [{ name: "Drew Swanigan" }],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://drewswanigan.dev",
    siteName: "Drew Swanigan",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
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
