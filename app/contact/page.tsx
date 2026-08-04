import { PageIntro, SiteFooter, SiteHeader } from "../components/site-chrome";

const contacts = [
  ["General", "hello@nayma.ai", "Questions, partnerships, and everything else."],
  ["Sales", "sales@nayma.ai", "Explore how a NAYMA product can help your team."],
  ["Support", "support@nayma.ai", "Help for customers using a NAYMA product."],
];

export default function ContactPage() {
  return <main><SiteHeader /><PageIntro eyebrow="Contact" title={<>Let&apos;s build<br /><em>what&apos;s next.</em></>}>Whether you are exploring a product, looking for support, or want to start a conversation, the right team is one email away.</PageIntro><section className="contact-options shell">{contacts.map(([label, email, copy], index) => <a className="contact-option" href={`mailto:${email}`} key={email}><span>0{index + 1}</span><div><h2>{label}</h2><p>{copy}</p></div><strong>{email} ↗</strong></a>)}</section><SiteFooter /></main>;
}
