import type { Metadata } from "next";
import { Instrument_Serif, Montserrat } from "next/font/google";
import "./globals.css";
import Fathom from "../components/fathom";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-sans" });
const serif = Instrument_Serif({ weight: ["400"], style: ["normal", "italic"], subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "Patrick Allen: Design Engineer",
  description: "Senior Design Engineer for B2B SaaS teams. Onboarding, activation and product engineering with TypeScript, Next.js and React.",
  openGraph: {
    description: "Senior Design Engineer for B2B SaaS teams. Onboarding, activation and product engineering with TypeScript, Next.js and React.",
  },
  twitter: {
    description: "Senior Design Engineer for B2B SaaS teams. Onboarding, activation and product engineering with TypeScript, Next.js and React.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <Fathom />
        {children}
      </body>
    </html>
  );
}
