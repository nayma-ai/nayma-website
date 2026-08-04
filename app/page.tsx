import { SiteFooter, SiteHeader } from "./components/site-chrome";

const products = [
  {
    key: "wasl",
    number: "01",
    name: "WASL",
    eyebrow: "Enterprise infrastructure",
    headline: "One gateway. Every kind of traffic.",
    description:
      "A unified traffic control plane for APIs, AI requests, events, and background workloads—with one layer for policy, security, and observability.",
    capabilities: ["API Gateway", "AI Gateway", "Event Gateway", "Worker Platform"],
    audience: "Platform, API & AI infrastructure teams",
  },
  {
    key: "relaya",
    number: "02",
    name: "RELAYA",
    eyebrow: "Relationship intelligence",
    headline: "Relationships that move themselves forward.",
    description:
      "An AI-native relationship platform built around conversations, context, and action—not endless CRM administration.",
    capabilities: ["Relationship Intelligence", "Activity Capture", "Smart Follow-ups", "AI Assistance"],
    audience: "Sales, founders & relationship-led teams",
  },
  {
    key: "qayro",
    number: "03",
    name: "QAYRO",
    eyebrow: "Finance operations",
    headline: "Intelligent finance operations.",
    description:
      "AI-powered finance automation that connects documents, transactions, approvals, and enterprise systems—so teams review exceptions, not paperwork.",
    capabilities: ["Invoice Intelligence", "Three-Way Matching", "Exception Management", "ERP Integration"],
    audience: "Finance, procurement & shared services",
  },
];

const principles = [
  ["Focused", "Every product begins with a clearly defined business problem."],
  ["Intelligent", "AI is embedded where it creates measurable value."],
  ["Enterprise-ready", "Security, governance, and integration from day one."],
  ["Simple", "Powerful technology without unnecessary complexity."],
  ["Open", "Designed to fit the systems businesses already depend on."],
];

function ProductVisual({ type }: { type: string }) {
  return (
    <div className={`product-visual visual-${type}`} aria-hidden="true">
      {type === "wasl" && (
        <>
          <span className="node n1" /><span className="node n2" /><span className="node n3" />
          <span className="route r1" /><span className="route r2" /><span className="route r3" />
          <span className="visual-label">CONTROL PLANE</span>
        </>
      )}
      {type === "relaya" && (
        <>
          <span className="orbit o1" /><span className="orbit o2" /><span className="person p1">A</span>
          <span className="person p2">B</span><span className="person p3">C</span>
          <span className="visual-label">CONTEXT → ACTION</span>
        </>
      )}
      {type === "qayro" && (
        <>
          <span className="doc d1">PO</span><span className="doc d2">GR</span><span className="doc d3">INV</span>
          <span className="match-line" /><span className="match-check">✓</span>
          <span className="visual-label">3-WAY MATCH</span>
        </>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero shell" id="top">
        <div className="hero-kicker"><span>Independent product company</span><span>Saudi Arabia · India · Global</span></div>
        <div className="hero-title-wrap">
          <h1>Technology,<br /><em>thoughtfully</em> built.</h1>
          <div className="hero-mark" aria-hidden="true"><span /><span /><span /></div>
        </div>
        <div className="hero-bottom">
          <p>We build intelligent software products that simplify how modern enterprises connect, operate, automate, and grow.</p>
          <a href="#products" className="text-link">Explore our products <span>↓</span></a>
        </div>
      </section>

      <section className="statement">
        <div className="shell statement-grid">
          <p className="section-label">Our point of view</p>
          <h2>Products around <span>problems,</span><br />not trends.</h2>
          <p className="statement-copy">From enterprise infrastructure to AI-powered business applications, every NAYMA product is focused on removing real operational complexity.</p>
        </div>
      </section>

      <section className="products shell" id="products">
        <div className="section-head"><p className="section-label">Three focused products</p><p>One shared engineering foundation.</p></div>
        {products.map((product) => (
          <article className={`product product-${product.key}`} id={product.key} key={product.key}>
            <div className="product-meta"><span>{product.number}</span><p>{product.eyebrow}</p></div>
            <div className="product-main">
              <h3>{product.name}</h3>
              <p className="product-headline">{product.headline}</p>
              <p className="product-description">{product.description}</p>
              <div className="tags">{product.capabilities.map((item) => <span key={item}>{item}</span>)}</div>
              <p className="audience"><span>Built for</span>{product.audience}</p>
            </div>
            <ProductVisual type={product.key} />
          </article>
        ))}
      </section>

      <section className="approach" id="approach">
        <div className="shell">
          <div className="approach-lead"><p className="section-label">Why NAYMA</p><h2>One standard,<br />across every product.</h2></div>
          <div className="principles">
            {principles.map(([title, copy], index) => (
              <div className="principle" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="itqan shell" id="about">
        <div className="itqan-word" aria-hidden="true">PASSION</div>
        <div className="itqan-copy"><p className="section-label">Our philosophy</p><h2>Build with passion.</h2><p>Care, excellence, and purpose in every decision. We favor long-term usefulness over short-term hype—and build systems we would trust our own businesses to depend on.</p></div>
      </section>

      <section className="future">
        <div className="shell future-grid"><p className="section-label">Built for the new enterprise</p><div><h2>Systems that understand context—and take action.</h2><p>APIs are being joined by AI agents. Human workflows are becoming automated workflows. NAYMA is building for that transition.</p></div></div>
      </section>

      <section className="contact shell" id="contact">
        <p className="section-label">Early access</p><div className="contact-grid"><h2>Build what comes<br /><em>next,</em> with us.</h2><div><p>We are introducing NAYMA products to a limited number of early customers. Tell us which problem you are ready to solve.</p><a href="mailto:hello@nayma.ai" className="button">Start a conversation <span>↗</span></a></div></div>
      </section>

      <SiteFooter />
    </main>
  );
}
