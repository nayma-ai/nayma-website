import Link from "next/link";
import { SiteFooter, SiteHeader } from "./components/site-chrome";

type ProductAction = {
  label: string;
  href: string;
  external?: boolean;
};

const products = [
  {
    key: "wasl",
    number: "01",
    name: "WASL",
    eyebrow: "Infrastructure · AI/API/event/worker gateway",
    headline: "One gateway. Every kind of enterprise traffic.",
    description:
      "A unified gateway for APIs, AI requests, events, and background workers—with one layer for policy, security, deployment, and observability.",
    capabilities: ["API Gateway", "AI Gateway", "Event Gateway", "Worker Platform"],
    audience: "Platform, API & AI infrastructure teams",
    actions: [
      { label: "Visit WASL", href: "https://waslhq.com", external: true },
      { label: "Read documentation", href: "https://waslhq.com/docs/", external: true },
    ],
  },
  {
    key: "relaya",
    number: "02",
    name: "RELAYA",
    eyebrow: "AI-native CRM",
    headline: "Customer context that moves relationships forward.",
    description:
      "An AI-native CRM that turns conversations, activity, and relationship signals into shared context and useful next actions—not endless administration.",
    capabilities: ["Relationship Intelligence", "Activity Capture", "Deal Context", "AI Assistance"],
    audience: "Sales, founders & relationship-led teams",
    actions: [
      { label: "Visit Relaya", href: "https://relayahq.com", external: true },
      { label: "Open the app", href: "https://app.relayahq.com/login", external: true },
    ],
  },
  {
    key: "qayro",
    number: "03",
    name: "QAYRO",
    eyebrow: "Workflow + finance automation",
    headline: "Finance operations that move documents into decisions.",
    description:
      "AI-powered workflow automation for invoices, purchase orders, approvals, and enterprise systems—so teams review exceptions instead of paperwork.",
    capabilities: ["Invoice Intelligence", "Three-Way Matching", "Exception Review", "ERP Integration"],
    audience: "Finance, procurement & shared services",
    actions: [{ label: "Request Qayro early access", href: "/contact" }],
  },
  {
    key: "nida",
    number: "04",
    name: "NIDA",
    eyebrow: "Developer infrastructure · Transactional communications",
    headline: "Transactional email today. Unified communications tomorrow.",
    description:
      "A developer-first communications platform—typed SDKs, webhooks, and delivery visibility built for teams shipping product, not managing mail infrastructure.",
    capabilities: ["Transactional Email", "Delivery Events", "Webhooks", "SDK & CLI"],
    audience: "Product & platform engineering teams",
    actions: [{ label: "Request Nida early access", href: "/contact" }],
  },
  {
    key: "rolwise",
    number: "05",
    name: "ROLWISE",
    eyebrow: "AI-native hiring platform",
    headline: "Hiring pipelines that source, screen, and move on their own.",
    description:
      "An AI agentic hiring suite that sources candidates, scores fit, and runs outreach and screening across the pipeline—so recruiting teams focus on decisions, not busywork.",
    capabilities: ["Candidate Sourcing", "AI Fit Scoring", "Outreach Agents", "Pipeline Automation"],
    audience: "Talent, recruiting & hiring teams",
    actions: [{ label: "Visit Rolwise", href: "https://rolwise.com", external: true }],
  },
];

const principles = [
  ["Independently built", "An independent product company building for teams operating across regions, globally."],
  ["Enterprise-first", "Security, governance, integration, and deployment control are product foundations—not later additions."],
  ["API-first", "Clear interfaces help every product fit the systems an organization already depends on."],
  ["AI-native", "AI is applied where it can reason over context and reduce operational work, with evidence and human control."],
  ["Privacy-first", "Data boundaries, access controls, and responsible handling shape the architecture from the beginning."],
];

const architectureLayers = [
  {
    key: "wasl",
    label: "Govern traffic",
    name: "WASL",
    copy: "Route and govern APIs, AI requests, events, and workers through one control plane.",
  },
  {
    key: "relaya",
    label: "Establish context",
    name: "RELAYA",
    copy: "Turn relationship activity into a useful memory that teams can act on and explain.",
  },
  {
    key: "qayro",
    label: "Automate decisions",
    name: "QAYRO",
    copy: "Move documents and approvals through governed workflows while keeping exceptions visible.",
  },
];

const useCases = [
  ["Platform teams", "Govern API, AI, event, and worker traffic through one control plane.", "WASL"],
  ["Revenue teams", "Turn customer conversations into shared context and next actions.", "RELAYA"],
  ["Finance & procurement", "Move invoices and approvals through governed automation.", "QAYRO"],
  ["Product & engineering teams", "Send transactional email with typed SDKs and delivery visibility.", "NIDA"],
  ["Talent & recruiting teams", "Source, score, and move candidates with AI agents in the loop.", "ROLWISE"],
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
      {type === "nida" && (
        <>
          <span className="envelope e1" /><span className="envelope e2" /><span className="envelope e3" />
          <span className="signal-pulse" />
          <span className="visual-label">SEND → DELIVER → CONFIRM</span>
        </>
      )}
      {type === "rolwise" && (
        <>
          <span className="candidate c1">A+</span><span className="candidate c2">B</span><span className="candidate c3">A</span>
          <span className="pipeline-track" />
          <span className="visual-label">SOURCE → SCORE → HIRE</span>
        </>
      )}
    </div>
  );
}

function ProductAction({ action }: { action: ProductAction }) {
  if (action.external) {
    return <a className="product-action" href={action.href} target="_blank" rel="noreferrer">{action.label}<span aria-hidden="true">↗</span></a>;
  }

  return <Link className="product-action" href={action.href}>{action.label}<span aria-hidden="true">→</span></Link>;
}

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero shell" id="top">
        <div className="hero-kicker"><span>Independent enterprise software company</span><span>Global</span></div>
        <div className="hero-title-wrap">
          <h1>NAYMA builds<br /><em>enterprise AI</em> systems.</h1>
          <div className="hero-mark" aria-hidden="true"><span /><span /><span /></div>
        </div>
        <div className="hero-bottom">
          <p>Infrastructure and AI-native software for enterprise teams that need to govern traffic, understand relationships, and automate operations.</p>
          <div className="hero-actions">
            <Link href="/contact" className="text-link">Talk to NAYMA <span>↗</span></Link>
            <a href="#products" className="text-link">Explore products <span>↓</span></a>
          </div>
          <div className="credibility-rail" aria-label="NAYMA commitments">
            <span>Independently built</span><span>Enterprise-first</span><span>API-first</span><span>AI-native</span><span>Privacy-first</span>
          </div>
        </div>
      </section>

      <section className="statement">
        <div className="shell statement-grid">
          <p className="section-label">Our point of view</p>
          <h2>Enterprise AI,<br /><span>with a clear path</span> to action.</h2>
          <p className="statement-copy">NAYMA builds focused products around the infrastructure, context, and workflows enterprises need to adopt AI responsibly.</p>
        </div>
      </section>

      <section className="products shell" id="products">
        <div className="section-head"><p className="section-label">Five enterprise products</p><p>One shared engineering foundation.</p></div>
        {products.map((product) => (
          <article className={`product product-${product.key}`} id={product.key} key={product.key}>
            <div className="product-meta"><span>{product.number}</span><p>{product.eyebrow}</p></div>
            <div className="product-main">
              <h3>{product.name}</h3>
              <p className="product-headline">{product.headline}</p>
              <p className="product-description">{product.description}</p>
              <div className="tags">{product.capabilities.map((item) => <span key={item}>{item}</span>)}</div>
              <p className="audience"><span>Built for</span>{product.audience}</p>
              <div className="product-actions">{product.actions.map((action) => <ProductAction action={action} key={action.label} />)}</div>
            </div>
            <ProductVisual type={product.key} />
          </article>
        ))}
      </section>

      <section className="architecture" id="architecture">
        <div className="shell architecture-grid">
          <div className="architecture-lead">
            <p className="section-label">Technical architecture</p>
            <h2>Governed systems, connected end to end.</h2>
            <p>Enterprise adoption depends on the path between systems: how traffic is governed, how context is established, how decisions are explained, and where people remain in control.</p>
            <Link className="architecture-link" href="/contact">Review an architecture requirement <span aria-hidden="true">→</span></Link>
          </div>
          <div className="architecture-flow" aria-label="NAYMA architecture layers">
            {architectureLayers.map((layer, index) => (
              <article className={`architecture-step architecture-step-${layer.key}`} key={layer.name}>
                <span className="architecture-number">0{index + 1}</span>
                <div><p>{layer.label}</p><h3>{layer.name}</h3><span>{layer.copy}</span></div>
              </article>
            ))}
            <div className="architecture-foundation"><span>Shared foundation</span><strong>Identity · Governance · Integration · Evidence</strong></div>
          </div>
        </div>
      </section>

      <section className="use-cases shell">
        <div className="section-head"><p className="section-label">Where NAYMA fits</p><p>Clear ownership. Useful automation.</p></div>
        <div className="use-case-list">
          {useCases.map(([title, copy, product]) => <article key={title}><h3>{title}</h3><p>{copy}</p><span>{product}</span></article>)}
        </div>
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

      <section className="engineering shell" id="engineering">
        <div className="engineering-grid">
          <div className="engineering-lead"><p className="section-label">Engineering / resources</p><h2>Inspect the work behind the products.</h2><p>Architecture, documentation, and public technical work make our decisions easier for the teams expected to trust them.</p></div>
          <div className="resource-index">
            <a href="https://waslhq.com/docs/" target="_blank" rel="noreferrer"><span>Documentation</span><strong>WASL platform and gateway docs</strong><b aria-hidden="true">↗</b></a>
            <Link href="/roadmap"><span>Roadmap</span><strong>Product direction across the NAYMA ecosystem</strong><b aria-hidden="true">→</b></Link>
            <a href="https://github.com/nayma-ai" target="_blank" rel="noreferrer"><span>GitHub</span><strong>NAYMA repositories and engineering work</strong><b aria-hidden="true">↗</b></a>
            <Link href="/contact"><span>Contact</span><strong>Review requirements with the product team</strong><b aria-hidden="true">→</b></Link>
          </div>
        </div>
      </section>

      <section className="itqan shell" id="about">
        <div className="itqan-word" aria-hidden="true">PASSION</div>
        <div className="itqan-copy"><p className="section-label">Our philosophy</p><h2>Build for the long term.</h2><p>Care, excellence, and purpose in every decision. We favor long-term usefulness over short-term hype—and build systems we would trust our own businesses to depend on.</p></div>
      </section>

      <section className="future">
        <div className="shell future-grid"><p className="section-label">Built for the new enterprise</p><div><h2>Govern the path from request to decision.</h2><p>WASL governs the traffic, Relaya carries the context, and Qayro automates the workflow. Together, they make enterprise systems easier to operate and easier to trust.</p></div></div>
      </section>

      <section className="contact shell" id="contact">
        <p className="section-label">Talk to NAYMA</p><div className="contact-grid"><h2>Build what comes<br /><em>next,</em> with us.</h2><div><p>Tell us which system you need to govern, understand, or automate. We’ll connect you with the right NAYMA product.</p><Link href="/contact" className="button">Start a conversation <span>↗</span></Link></div></div>
      </section>

      <SiteFooter />
    </main>
  );
}
