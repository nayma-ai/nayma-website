import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-XNSVRXYFXT";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.GITHUB_ACTIONS ? "https://nayma.ai" : "http://localhost:3000",
  ),
  title: "NAYMA — Enterprise AI systems, thoughtfully built.",
  description:
    "NAYMA builds enterprise infrastructure and AI-native software for governing traffic, understanding relationships, and automating operations.",
  icons: { icon: "favicon.svg", shortcut: "favicon.svg" },
  openGraph: {
    title: "NAYMA — Enterprise AI systems, thoughtfully built.",
    description: "Enterprise infrastructure and AI-native software from NAYMA.",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NAYMA — Enterprise AI systems, thoughtfully built.",
    description: "Enterprise infrastructure and AI-native software from NAYMA.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
