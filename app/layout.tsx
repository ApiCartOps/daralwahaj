import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import { SEOStructuredData } from "@/components/SEOStructuredData";
import { Analytics } from "@vercel/analytics/next";
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
    "Dar Alwahaj Technical Services provides integrated data center, CCTV & security systems, fiber optics, structured cabling, HVAC, electromechanical, and facility cleaning services in Dubai, UAE.",
  keywords: [
    "technical services UAE",
    "data center solutions Dubai",
    "CCTV security systems",
    "fiber optics installation",
    "structured cabling",
    "HVAC services",
    "electromechanical services",
    "facility management",
    "infrastructure services",
    "maintenance solutions",
  ].join(", "),
  authors: [{ name: "DAW Tech Services" }],
  creator: "DAW Tech Services",
  publisher: "DAW Tech Services",
  category: "Business Services",

  // Open Graph / Social Media
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://dawtechservices.com",
    siteName: "DAW Tech Services",
    title: "DAW Tech Services — Technical Solutions You Can Trust",
    description:
      "Integrated technical services including data centers, CCTV, fiber optics, HVAC, and facility management in Dubai, UAE.",
    images: [
      {
        url: "https://dawtechservices.com/assets/logo.png",
        width: 1200,
        height: 630,
        alt: "DAW Tech Services Logo",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "DAW Tech Services — Technical Solutions You Can Trust",
    description:
      "Dar Alwahaj Technical Services provides integrated technical solutions in Dubai, UAE.",
    creator: "@DAWTechServices",
  },

  // Additional SEO
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification
  verification: {
    google: "your-google-site-verification-code",
    yandex: "your-yandex-verification-code",
  },

  // Locale and Language
  alternates: {
    languages: {
      "en-AE": "https://dawtechservices.com",
      en: "https://dawtechservices.com",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <head>
        <SEOStructuredData />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#041b3d" />
        <link rel="canonical" href="https://dawtechservices.com" />
        <meta name="msapplication-TileColor" content="#041b3d" />
      </head>
      <body className="font-body antialiased overflow-x-hidden [text-wrap:pretty]">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
