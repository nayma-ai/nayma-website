import Link from "next/link";
import { SiteFooter, SiteHeader } from "./components/site-chrome";

type ProductAction = {
  label: string;
  href: string;
  external?: boolean;
};

const products = [
  {
    key: "rowwise",
    number: "01",
    name: "ROWWISE",
    eyebrow: "Developer tools · Data workspace for macOS",
    headline: "From data to answers. SQL, business context, and MCP in one workspace.",
    description:
      "A macOS workspace that connects to 19 databases and local files, turns plain-language questions into business answers, drafts SQL with AI, and plugs coding assistants like Claude Code and Cursor into live schema and query context through a built-in MCP server.",
    capabilities: ["Business Ask", "AI-Assisted SQL", "Built-in MCP", "19+ Connectors"],
    audience: "Developers, analysts & data teams",
    actions: [{ label: "Visit Rowwise", href: "https://rowwise.dev", external: true }],
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
    actions: [{ label: "Visit Relaya", href: "https://relayahq.com", external: true }],
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
    actions: [{ label: "Visit Nida", href: "https://nida.to", external: true }],
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
  {
    key: "nurae",
    number: "06",
    name: "NURAE",
    eyebrow: "AI customer agents · Multilingual support automation",
    headline: "Customer agents that answer from your knowledge, in your customer's language.",
    description:
      "AI customer agents that answer from your own knowledge, cite their sources, and hand off to your team when it matters—multilingual, actionable, and live on your site in minutes.",
    capabilities: ["Grounded Answers", "Multilingual Support", "Human Handoff", "Business Actions"],
    audience: "Support, sales & customer-facing teams",
    actions: [{ label: "Visit Nurae", href: "https://nurae.ai", external: true }],
  },
  {
    key: "leen",
    number: "07",
    name: "LEEN",
    eyebrow: "Consumer app · Food journal for iPhone",
    headline: "A calmer way to keep track of what you eat.",
    description:
      "Tell Leen what you ate by text, voice, or photo, and keep a beautiful, local-first journal you can return to. Leen Pro adds conversational nutrient insights—offline on your iPhone, in English and Arabic.",
    capabilities: ["Text, Voice & Photo Logging", "Local-First Journal", "Nutrient Insights", "English & العربية"],
    audience: "Individuals building a mindful eating habit",
    actions: [{ label: "Visit Leen", href: "https://leen.fit", external: true }],
  },
];

const enterpriseSolutions = [
  {
    key: "agents",
    number: "01",
    name: "AI Agents",
    copy: "Design and ship production AI agents—tool use, orchestration, and human-in-the-loop control built around your own systems and data.",
  },
  {
    key: "private-ai",
    number: "02",
    name: "Private AI",
    copy: "Deploy models and agents inside your own infrastructure, so sensitive data never leaves environments you control—on-premises or air-gapped.",
  },
  {
    key: "finetuning",
    number: "03",
    name: "Model Fine-tuning",
    copy: "Finetune and evaluate models on your own data, so outputs match your domain, tone, and accuracy requirements out of the box.",
  },
  {
    key: "data-ai",
    number: "04",
    name: "AI for Data",
    copy: "Turn databases, documents, and files into context models can use—pipelines, retrieval, and the connectors that keep answers grounded in what's true for your business.",
  },
  {
    key: "integration",
    number: "05",
    name: "Integration",
    copy: "Connect NAYMA products and custom AI systems into the tools you already run—ERPs, CRMs, identity, and data platforms—through governed APIs and event flows.",
  },
  {
    key: "ai-engineering",
    number: "06",
    name: "AI Engineering",
    copy: "Hands-on engineering and implementation support—from architecture and evaluation to production rollout—for teams building AI into how they operate.",
  },
];

const principles = [
  ["Independently built", "An independent product company building for teams operating across regions, globally."],
  ["Scales with you", "The same security, governance, and deployment control from a solo developer's first integration through enterprise rollout."],
  ["API-first", "Clear interfaces help every product fit the systems an organization already depends on."],
  ["AI-native", "AI is applied where it can reason over context and reduce operational work, with evidence and human control."],
  ["Privacy-first", "Data boundaries, access controls, and responsible handling shape the architecture from the beginning."],
];

const modelStack = [
  {
    key: "generative",
    label: "Open-ended reasoning & generation",
    name: "Generative models",
    copy: "Large language models draft, summarize, and converse—turning a plain-language question into Rowwise's SQL, writing Rolwise's outreach, answering Nurae's customer questions from your own knowledge, structuring Qayro's documents, and logging a spoken or photographed meal in Leen.",
  },
  {
    key: "system-one",
    label: "Fast, typed, calibrated judgments",
    name: "System One models",
    copy: "Purpose-built models like Jev, from TypeSafe, return typed answers and calibrated probabilities instead of free text. Rolwise's AI Fit Scoring runs on Jev—ranking every candidate against a role's criteria at a fraction of the cost and latency of a generative call.",
  },
];

const useCases = [
  ["Developers & data teams", "Turn databases into plain-language answers, AI-assisted SQL, and live context for coding tools.", "ROWWISE"],
  ["Revenue teams", "Turn customer conversations into shared context and next actions.", "RELAYA"],
  ["Finance & procurement", "Move invoices and approvals through governed automation.", "QAYRO"],
  ["Product & engineering teams", "Send transactional email with typed SDKs and delivery visibility.", "NIDA"],
  ["Talent & recruiting teams", "Source, score, and move candidates with AI agents in the loop.", "ROLWISE"],
  ["Support & CX teams", "Answer customers from your own knowledge, in their language, with human handoff.", "NURAE"],
  ["Individuals & households", "Log meals by text, voice, or photo, and keep a calm, local-first food journal.", "LEEN"],
];

function ProductVisual({ type }: { type: string }) {
  return (
    <div className={`product-visual visual-${type}`} aria-hidden="true">
      {type === "rowwise" && (
        <>
          <span className="node n1" /><span className="node n2" /><span className="node n3" />
          <span className="route r1" /><span className="route r2" /><span className="route r3" />
          <span className="visual-label">CONNECT → ASK → ANSWER</span>
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
      {type === "nurae" && (
        <>
          <span className="bubble b1">EN</span><span className="bubble b2">AR</span><span className="bubble b3">✓</span>
          <span className="cite-line" />
          <span className="visual-label">ASK → CITE → RESOLVE</span>
        </>
      )}
      {type === "leen" && (
        <>
          <span className="meal m1">🍛</span><span className="meal m2">🎙</span><span className="meal m3">📷</span>
          <span className="log-track" />
          <span className="visual-label">TYPE → SAY → SNAP</span>
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
        <div className="hero-kicker"><span>Independent software company</span><span>Global</span></div>
        <div className="hero-title-wrap">
          <h1>Products. Platforms.<br /><em>Intelligence.</em></h1>
          <div className="hero-mark" aria-hidden="true"><span /><span /><span /></div>
        </div>
        <div className="hero-bottom">
          <p>NAYMA builds AI-powered products—SaaS platforms, developer tools, and consumer apps—plus the agents, models, and intelligence behind them.</p>
          <div className="hero-actions">
            <Link href="/contact" className="text-link">Talk to NAYMA <span>↗</span></Link>
            <a href="#products" className="text-link">Explore products <span>↓</span></a>
          </div>
          <div className="credibility-rail" aria-label="NAYMA commitments">
            <span>Independently built</span><span>Scales with you</span><span>API-first</span><span>AI-native</span><span>Privacy-first</span>
          </div>
        </div>
      </section>

      <section className="statement">
        <div className="shell statement-grid">
          <p className="section-label">Our point of view</p>
          <h2>Two sides,<br /><span>one standard.</span></h2>
          <p className="statement-copy">NAYMA ships focused products—across SaaS, developer tools, and consumer apps—and delivers the AI capabilities behind them: agents, private model deployment, fine-tuning, data, integration, and hands-on engineering.</p>
        </div>
      </section>

      <section className="products shell" id="products">
        <div className="section-head"><p className="section-label">Products</p><p>Seven products, from enterprise platforms to the apps people use every day.</p></div>
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

      <section className="services shell" id="solutions">
        <div className="section-head"><p className="section-label">Enterprise solutions</p><p>Built alongside your team, not handed off.</p></div>
        <div className="service-list">
          {enterpriseSolutions.map((service) => (
            <article key={service.key}>
              <span>{service.number}</span>
              <h3>{service.name}</h3>
              <p>{service.copy}</p>
            </article>
          ))}
        </div>
        <Link className="services-link" href="/contact">Talk to us about an enterprise engagement <span aria-hidden="true">→</span></Link>
      </section>

      <section className="stack shell" id="technology">
        <div className="section-head"><p className="section-label">How NAYMA applies AI</p><p>The right model for the decision.</p></div>
        <div className="stack-list">
          {modelStack.map((item) => (
            <article key={item.key}>
              <p className="stack-label">{item.label}</p>
              <h3>{item.name}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
        <a className="services-link" href="https://typesafe.ai" target="_blank" rel="noreferrer">Jev is built by TypeSafe <span aria-hidden="true">↗</span></a>
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
            <a href="https://rowwise.dev" target="_blank" rel="noreferrer"><span>Documentation</span><strong>Rowwise data workspace & built-in MCP</strong><b aria-hidden="true">↗</b></a>
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
        <div className="shell future-grid"><p className="section-label">Built for the new enterprise</p><div><h2>Ship the product. Power the platform.</h2><p>Rowwise turns data into answers, Relaya carries the context, and Qayro automates the workflow. Together, they make everyday operations easier to run and easier to trust.</p></div></div>
      </section>

      <section className="contact shell" id="contact">
        <p className="section-label">Talk to NAYMA</p><div className="contact-grid"><h2>Build what comes<br /><em>next,</em> with us.</h2><div><p>Tell us which system you need to govern, understand, or automate. We’ll connect you with the right NAYMA product.</p><Link href="/contact" className="button">Start a conversation <span>↗</span></Link></div></div>
      </section>

      <SiteFooter />
    </main>
  );
}
