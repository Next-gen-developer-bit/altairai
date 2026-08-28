import type { Metadata } from "next";
import { Syne, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Altair AI | Intelligent Automation Solutions & AI Agents",
  description: "Altair AI delivers cutting-edge AI automation solutions including autonomous AI agents, intelligent process automation, workflow orchestration, and predictive analytics. Transform your business with self-learning systems.",
  keywords: "AI automation, artificial intelligence, AI agents, process automation, RPA, workflow automation, machine learning, predictive analytics, enterprise AI, automation solutions",
  authors: [{ name: "Altair AI" }],
  creator: "Altair AI",
  publisher: "Altair AI",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://altair-ai.com/",
    siteName: "Altair AI",
    title: "Altair AI | Intelligent Automation Solutions & AI Agents",
    description: "Transform manual workflows into intelligent, self-learning systems with Altair AI's cutting-edge automation solutions.",
    images: [
      {
        url: "https://altair-ai.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Altair AI - Intelligent Automation Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Altair AI | Intelligent Automation Solutions",
    description: "Transform manual workflows into intelligent, self-learning systems with Altair AI.",
    site: "@AiEnthusiasticx",
    images: ["https://altair-ai.com/twitter-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  alternates: {
    canonical: "https://altair-ai.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#000000" />
        {/* Google tag (gtag.js) - Google Ads Conversion Tracking */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18413669142"
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18413669142');
          `}
        </Script>
      </head>
      <body
        className={`${syne.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}