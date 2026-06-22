import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Fathom from "../components/fathom";

const montserrat = Montserrat({ subsets: ["latin"] });

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
      <body className={`${montserrat.className} antialiased`}>
        <Fathom />
        {children}
      </body>
    </html>
  );
}
