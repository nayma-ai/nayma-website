import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-XNSVRXYFXT";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.GITHUB_ACTIONS ? "https://nayma.ai" : "http://localhost:3000",
  ),
  title: "NAYMA — Products. Platforms. Intelligence.",
  description:
    "NAYMA builds AI-powered products—SaaS platforms, developer tools, and consumer apps—plus the agents, models, and intelligence behind them.",
  icons: {
    icon: [
      { url: "/icon-256.png", sizes: "256x256", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/icon-256.png",
    apple: "/icon-512.png",
  },
  openGraph: {
    title: "NAYMA — Products. Platforms. Intelligence.",
    description: "NAYMA builds AI-powered products—SaaS platforms, developer tools, and consumer apps—plus the agents, models, and intelligence behind them.",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NAYMA — Products. Platforms. Intelligence.",
    description: "NAYMA builds AI-powered products—SaaS platforms, developer tools, and consumer apps—plus the agents, models, and intelligence behind them.",
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
