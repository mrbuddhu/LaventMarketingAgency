import { notFound } from "next/navigation"
import Link from "next/link"
import { CheckerBar } from "@/components/brand/checker-bar"

type Study = {
  title: string
  summary: string
  bullets: string[]
  metrics: string[]
}

const CASE_STUDIES: Record<string, Study> = {
  "pink-matter": {
    title: "Pink Matter — Apparel eCommerce",
    summary:
      "In 2 months we combined high-performing static/dynamic creatives with Meta funnels, then amplified with email & WhatsApp flows.",
    bullets: [
      "Scroll-stopping static + dynamic ads",
      "Full-funnel Meta strategy",
      "Automated lifecycle flows (email + WhatsApp)",
    ],
    metrics: ["3x sales", "+70% website traffic", "Consistent ROAS growth"],
  },
  "dayout-snacks": {
    title: "Dayout Snacks — FMCG, New Jersey",
    summary: "We paired SEO with Meta demand capture and automated flows to convert high-intent traffic at scale.",
    bullets: ["SEO foundations and content", "Meta ads to capture commercial intent", "WhatsApp + email automations"],
    metrics: ["+55% sales", "High-intent organic growth", "Stronger repeat purchase"],
  },
  "balaji-wafers": {
    title: "Balaji Wafers — Social Growth",
    summary:
      "Professional content scripts, design, and editing elevated engagement with consistent brand visuals and reels.",
    bullets: ["Content scripting & editing", "Creative design system", "Reels and posts optimization"],
    metrics: ["Massive engagement lift", "Sustained growth in reach", "Higher profile actions"],
  },
  "nam-nam": {
    title: "Nam Nam — International Social Growth",
    summary: "Algorithm-aware content paired with brand-consistent visuals created rapid growth across markets.",
    bullets: ["Content system built for trends", "Creative discipline", "Cross-market execution"],
    metrics: ["+1.3k followers", "+290% sales in ~3 months"],
  },
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = CASE_STUDIES[params.slug]
  if (!study) return notFound()

  return (
    <main className="min-h-dvh bg-white">
      <section className="py-10 md:py-16">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-black text-[#19653F] text-balance">{study.title}</h1>
          <p className="mt-4 text-[#0A0A0A]/80 leading-relaxed">{study.summary}</p>
        </div>
      </section>

      <CheckerBar height={16} />

      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-5xl px-4 md:px-6 grid md:grid-cols-3 gap-6">
          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <h3 className="font-bold text-[#19653F]">Approach</h3>
            <ul className="mt-3 list-disc pl-5 text-[#0A0A0A]/80 space-y-1">
              {study.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border bg-white p-5 shadow-sm md:col-span-2">
            <h3 className="font-bold text-[#19653F]">Results</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {study.metrics.map((m) => (
                <span
                  key={m}
                  className="rounded-full bg-[#19653F] px-3 py-1 text-white text-sm"
                  style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.25), 0 8px 18px rgba(25,101,63,0.35)" }}
                >
                  {m}
                </span>
              ))}
            </div>
            <div className="mt-6 aspect-[16/9] w-full rounded-lg bg-[#05846F]/10 grid place-items-center text-[#05846F]">
              <span>{"Add images or video proofs later"}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-5xl px-4 md:px-6 flex items-center justify-between">
          <Link href="/case-studies" className="text-[#05846F] font-medium hover:underline underline-offset-4">
            ← All case studies
          </Link>
          <Link
            href="/contact"
            className="rounded-full px-5 py-2 text-white"
            style={{
              backgroundColor: "#19653F",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.25), 0 12px 24px rgba(25,101,63,0.35)",
            }}
          >
            Start a project
          </Link>
        </div>
      </section>
    </main>
  )
}
