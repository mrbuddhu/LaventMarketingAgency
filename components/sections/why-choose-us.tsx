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
              <div key={index} className="rounded-2xl bg-white/85 backdrop-blur supports-[backdrop-filter]:backdrop-blur shadow-2xl ring-1 ring-foreground/10 p-6 hover:shadow-3xl transition-all duration-300">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10">
                  <IconComponent className="h-6 w-6 text-primary" />
                </div>
                                 <h3 className="mb-3 text-xl font-bold gradient-heading">{reason.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
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
