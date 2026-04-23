import type { Metadata } from "next";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Fathom from "../components/fathom";

const sans = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-sans",
});

const serif = Instrument_Serif({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
});

const mono = JetBrains_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Patrick Allen: Design Engineer",
  description:
    "Senior Freelance Design Engineer - Frontend Engineer, UI/UX Designer, and Product Designer. TypeScript, Next.js, React.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sans.variable} ${serif.variable} ${mono.variable} font-sans antialiased`}
      >
        <Fathom />
        {children}
      </body>
    </html>
  );
}
