import { PageIntro, SiteFooter, SiteHeader } from "../components/site-chrome";

const roles = [["01", "Designer", "Shape the identity, product experiences, and clear systems behind NAYMA."], ["02", "Marketing", "Tell the stories of focused products built for real enterprise problems."]];

export default function CareersPage() {
  return <main><SiteHeader /><PageIntro eyebrow="Careers" title={<>Work on things<br /><em>that matter.</em></>}>We are building a focused company around products with real-world usefulness. If you care about clarity, craft, and long-term impact, we&apos;d like to hear from you.</PageIntro><section className="roles shell">{roles.map(([number, title, copy]) => <a className="role" href={`mailto:careers@nayma.ai?subject=${encodeURIComponent(`${title} role`)}`} key={title}><span>{number}</span><h2>{title}</h2><p>{copy}</p><strong>Apply ↗</strong></a>)}</section><section className="careers-note"><div className="shell"><p className="section-label">Don&apos;t see your role?</p><h2>Good people<br />make strong teams.</h2><a className="text-link" href="mailto:careers@nayma.ai">Tell us how you can contribute <span>↗</span></a></div></section><SiteFooter /></main>;
}
