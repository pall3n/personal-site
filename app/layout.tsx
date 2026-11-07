import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import Fathom from "../components/fathom";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-sans" });

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-home-sans",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-home-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-home-mono",
  display: "swap",
});

const siteTitle = "Product Design & Engineering for SaaS Teams | Patrick Allen";
const siteDescription =
  "I help small SaaS teams find and fix frustrating product experiences. Focused UX, onboarding and frontend improvements, from idea to implementation.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  metadataBase: new URL("https://patrickallen.xyz"),
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "https://patrickallen.xyz/",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body
        className={`${montserrat.className} ${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Fathom />
        {children}
      </body>
    </html>
  );
}
