"use client"

import type { ComponentProps } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

const FAQ_ITEMS = [
  {
    id: "services",
    question: "What services do you provide?",
    answer:
      "We cover the full growth stack: scroll-stopping static and dynamic ads, Meta funnels, email and WhatsApp automation, SEO, content and reels, and studio-grade photo and video for products and campaigns. Everything is wired together so creative, media, and retention work as one system—not disconnected one-offs.",
  },
  {
    id: "niches",
    question: "What niches do you cover?",
    answer:
      "We’re strongest with D2C, FMCG, fashion and apparel, nutrition and skincare, and other product-led brands—but we also support service businesses that need leads and bookings online. If your growth depends on digital and performance marketing, we tailor the strategy to your category and audience.",
  },
  {
    id: "why-lavent",
    question: "How is Lavent different?",
    answer:
      "You work with senior people who own outcomes, not a revolving door of juniors. We combine brand-level creative with funnel and media discipline, ship fast with clear timelines, and focus on metrics that matter—sales, leads, and retention—not fluff. One partner for creative, ads, and lifecycle, so nothing gets lost between agencies.",
  },
  {
    id: "businesses",
    question: "Who do you work with?",
    answer:
      "We primarily work with FMCG, product, and service-based brands, and we also collaborate with any business looking to scale revenue through digital and performance marketing.",
  },
  {
    id: "guarantee",
    question: "Do you guarantee results?",
    answer:
      "We don’t make unrealistic promises, but we stand by our work. If we don’t see meaningful traction in the initial phase, we work closely with you to diagnose, fix, and optimize until we’re moving in the right direction.",
  },
] as const

function FaqPillTrigger({ className, children, ...props }: ComponentProps<typeof AccordionTrigger>) {
  return (
    <AccordionTrigger
      className={cn(
        "group/trigger glass-pill relative w-full items-center gap-4 overflow-hidden rounded-full",
        "text-primary-foreground",
        "px-5 py-4 text-left text-base font-bold md:px-7 md:text-lg",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-1 hover:brightness-110 hover:no-underline",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
        "data-[state=open]:translate-y-0 data-[state=open]:brightness-105",
        "[&>svg]:size-5 [&>svg]:shrink-0 [&>svg]:text-primary-foreground [&>svg]:opacity-90 [&>svg]:transition-transform [&[data-state=open]>svg]:rotate-180",
        className,
      )}
      {...props}
    >
      <span
        className="pointer-events-none absolute inset-x-8 top-0 h-1/2 rounded-full bg-white/10 blur-md"
        aria-hidden="true"
      />
      <span className="relative z-10">{children}</span>
    </AccordionTrigger>
  )
}

export function SiteFaq({ className }: { className?: string }) {
  return (
    <section
      aria-labelledby="site-faq-heading"
      className={cn("bg-white pb-6 pt-12 md:pb-8 md:pt-16", className)}
    >
      <div className="mx-auto max-w-3xl px-3 sm:px-4 md:px-6">
        <div className="mb-10 text-center md:mb-12">
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-3">
            <h2
              id="site-faq-heading"
              className="text-pretty font-sans text-3xl font-black leading-tight tracking-[-0.02em] gradient-heading sm:text-4xl md:text-5xl"
            >
              Frequently asked
            </h2>
            <p className="text-base text-balance text-muted-foreground md:text-lg">
              Straight answers on how we work, who we serve, and what to expect.
            </p>
          </div>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {FAQ_ITEMS.map((item) => (
            <AccordionItem key={item.id} value={item.id} className="border-0">
              <FaqPillTrigger>{item.question}</FaqPillTrigger>
              <AccordionContent className="border-0 pb-2 text-base leading-relaxed text-muted-foreground">
                <p className="pt-4 pb-1 pl-1 pr-1 md:pl-2">{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
