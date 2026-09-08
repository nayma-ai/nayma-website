import Link from "next/link";
import type { ReactNode } from "react";

export function SiteHeader() {
  return (
    <nav className="nav shell" aria-label="Primary navigation">
      <Link href="/" className="brand" aria-label="NAYMA home">NAYMA<span className="brand-dot">.</span></Link>
      <div className="nav-links">
        <Link href="/#products">Products</Link><Link href="/#approach">Approach</Link><Link href="/#about">About</Link>
      </div>
      <Link className="nav-cta" href="/contact">Talk to us <span>↗</span></Link>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer shell">
      <div><Link href="/" className="brand">NAYMA<span className="brand-dot">.</span></Link><p>Technology, thoughtfully built.</p><address>#7, 15th Floor, Aurora Waterfront<br />GN 34/1, GN Block, Salt Lake, Sector 5<br />Kolkata, India</address></div>
      <div className="footer-links">
        <div><span>Explore</span><Link href="/roadmap">Product roadmap</Link><Link href="/careers">Careers</Link><Link href="/contact">Contact</Link></div>
        <div><span>Connect</span><a href="https://www.linkedin.com/company/nayma-ai/about" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/orgs/nayma-ai/dashboard" target="_blank" rel="noreferrer">GitHub</a><a href="https://x.com/nayma_ai" target="_blank" rel="noreferrer">X · @nayma_ai</a></div>
        <div><span>Legal</span><Link href="/privacy">Privacy policy</Link><Link href="/terms">Terms of service</Link></div>
      </div>
      <p className="copyright">© {new Date().getFullYear()} NAYMA. All rights reserved.</p>
    </footer>
  );
}

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children: ReactNode }) {
  return <section className="page-intro shell"><p className="section-label">{eyebrow}</p><div><h1>{title}</h1><div className="page-intro-copy">{children}</div></div></section>;
}
