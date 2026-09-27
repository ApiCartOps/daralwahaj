import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DAW Tech Services — Technical Solutions You Can Trust",
  description:
    "Dar Alwahaj Technical Services LLC provides integrated data center, CCTV & security, fibre optic & structured cabling, HVAC, electromechanical, and cleaning services across the UAE.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <body className="font-body antialiased overflow-x-hidden [text-wrap:pretty]">
        {children}
      </body>
    </html>
  );
}
