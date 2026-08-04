import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.GITHUB_ACTIONS
      ? "https://nayma-ai.github.io/nayma-website"
      : "http://localhost:3000",
  ),
  title: "NAYMA — Technology, thoughtfully built.",
  description:
    "NAYMA builds intelligent software products for modern enterprises, including WASL, Relaya, and Qayro.",
  icons: { icon: "favicon.svg", shortcut: "favicon.svg" },
  openGraph: {
    title: "NAYMA — Technology, thoughtfully built.",
    description: "Focused software products for the new enterprise.",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NAYMA — Technology, thoughtfully built.",
    description: "Focused software products for the new enterprise.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
