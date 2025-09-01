"use client"

import { GlossyPill } from "@/components/brand/glossy-pill"
import { Zap, Clock, Target, Users, TrendingUp, Shield } from "lucide-react"

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Zap,
      title: "Lightning Fast Execution",
      description: "Get results in 48 hours, not weeks. Our streamlined process ensures your brand gets the impact it deserves without the wait."
    },
    {
      icon: Target,
      title: "Data-Driven Strategy",
      description: "Every decision is backed by data. We don't guess—we analyze, optimize, and scale what actually works for your business."
    },
    {
      icon: Users,
      title: "Dedicated Team",
      description: "Work directly with our founders and senior team. No junior staff, no handoffs—just experienced professionals who care about your success."
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "260%+ sales increases, 90%+ WhatsApp open rates, and compounding SEO growth. We deliver measurable, scalable results."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock availability for urgent requests. Your success doesn't wait for business hours, and neither do we."
    },
    {
      icon: Shield,
      title: "Risk-Free Guarantee",
      description: "Not satisfied? We'll revise until you are, or you don't pay. Your success is our priority, guaranteed."
    }
  ]

  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16">
        {/* Header */}
        <div className="mb-16 text-center">
                     <h2 className="text-pretty font-sans text-3xl font-black leading-tight tracking-[-0.02em] gradient-heading sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
             Why Choose Us?
           </h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-balance text-muted-foreground">
            We don't just create campaigns—we build growth systems that compound over time.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon
            return (
              <div key={index} className="group relative overflow-hidden rounded-2xl glass-shell glass-strong supports-[backdrop-filter]:backdrop-blur-xl backdrop-saturate-150 text-white ring-1 ring-white/15 p-6 hover:shadow-3xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 ease-out cursor-pointer transform-gpu perspective-1000"
                   style={{ boxShadow: "0 44px 120px rgba(0,0,0,0.42)" }}>
                {/* top gloss band */}
                <div className="pointer-events-none absolute -top-12 left-1/2 h-28 w-[92%] -translate-x-1/2 rounded-full bg-white/25 blur-2xl" aria-hidden="true" />
                {/* radial glow */}
                <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(60% 40% at 50% 0%, rgba(255,255,255,0.20), transparent 60%)" }} aria-hidden="true" />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2" style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.18), rgba(255,255,255,0.06), transparent)" }} aria-hidden="true" />
                <div className="pointer-events-none absolute inset-0 shadow-[inset_0_-44px_88px_rgba(0,0,0,0.25)]" aria-hidden="true" />
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <IconComponent className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-500" />
                </div>
                                 <h3 className="mb-3 text-xl font-bold text-white">{reason.title}</h3>
                <p className="text-base text-white/90 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <GlossyPill as="div" className="mx-auto inline-flex cursor-pointer text-base font-semibold">
            Book Your Free Strategy Session
          </GlossyPill>
        </div>
      </div>
    </section>
  )
}
