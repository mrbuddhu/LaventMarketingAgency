"use client"

import { useState } from "react"
import { useEffect, useRef } from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

type Service = {
  title: string
  short: string
  imageQuery: string
  caseStudy: { slug: string; brand: string }
}

const services: Service[] = [
  {
    title: "Static Ads",
    short: "First impressions matter. Our static ads are designed to stop the scroll in seconds. These crisp, visually engaging designs help brands speak volumes in one frame—building awareness, curiosity, and immediate interaction. Brands using our static ads have seen an average of 3x more engagement. So ask yourself, are your competitors being seen while you're still getting ignored?",
    imageQuery: "Static Ads portrait",
    caseStudy: { slug: "pink-matter", brand: "Pink Matter" },
  },
  {
    title: "Dynamic Ads",
    short: "Imagine your product following your customer wherever they go online—but only when they're ready to buy. Our dynamic ads do just that, creating a hyper-personalized experience by showcasing exactly what your customers have browsed or added to cart. This isn't just retargeting—it's precision-driven conversion science that brings back leads ready to purchase.",
    imageQuery: "Dynamic Ads portrait",
    caseStudy: { slug: "pink-matter", brand: "Pink Matter" },
  },
  {
    title: "Meta Ads (Facebook & Instagram)",
    short: "We're not just running ads—we're building funnels that sell. Our static + dynamic ad strategy on Meta platforms drives mass reach while smart retargeting ensures every lead counts. We've helped brands scale from zero to 6-figure revenues using this method alone. Meanwhile, others are still wasting budgets on 'boost posts'. Where do you want to be?",
    imageQuery: "Meta Ads portrait",
    caseStudy: { slug: "pink-matter", brand: "Pink Matter" },
  },
  {
    title: "Email Marketing",
    short: "Email is not dead—it's quietly converting leads at scale. Our automated email flows guide your audience from interest to action—whether it's a welcome offer, cart reminder, or loyalty win-back. Many of our clients now earn 30-40% of their total sales from email alone. While others chase cold leads, we nurture warm ones—ready to buy.",
    imageQuery: "Email flows portrait",
    caseStudy: { slug: "dayout-snacks", brand: "Dayout Snacks" },
  },
  {
    title: "WhatsApp Marketing",
    short: "While others wait for customers to reply to emails, our clients are closing sales on WhatsApp—instantly. With over 90% open rates, WhatsApp campaigns cut the noise and create personal, fast-moving conversations. From product drops to customer support, it's the channel your audience already trusts—and we help you monetize it.",
    imageQuery: "WhatsApp Marketing portrait",
    caseStudy: { slug: "dayout-snacks", brand: "Dayout Snacks" },
  },
  {
    title: "SEO for Websites",
    short: "Paid ads give you spikes. SEO gives you a mountain. We optimize your website so you consistently show up on Google when your customer is searching. It's like owning digital real estate—others are paying rent, you're building assets. Every day you delay SEO is traffic you're gifting to your competitors.",
    imageQuery: "SEO growth portrait",
    caseStudy: { slug: "dayout-snacks", brand: "Dayout Snacks" },
  },
  {
    title: "3D Mockups for Amazon & Flipkart",
    short: "Your product's first impression on marketplaces is its last chance to convert. Our 3D mockups don't just look stunning—they boost trust and clicks, helping your products rank higher and sell faster. Customers can't touch your product—but with our visuals, they'll feel like they already have.",
    imageQuery: "3D Mockups portrait",
    caseStudy: { slug: "nam-nam", brand: "Nam Nam" },
  },
  {
    title: "Content Creation for Instagram",
    short: "We don't post content—we craft digital magnetism. Our Instagram strategy focuses on Reels, carousels, and trends that drive views, shares, and followers. Brands working with us have seen explosive growth in profile visits and website clicks. If content is king—engagement is the crown, and we hand it to you.",
    imageQuery: "Instagram content portrait",
    caseStudy: { slug: "balaji-wafers", brand: "Balaji Wafers" },
  },
]

function Services() {
  const [selectedService, setSelectedService] = useState<any>(null)
  const trackRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    track.style.scrollbarWidth = "none"
    ;(track.style as any).msOverflowStyle = "none"
  }, [])

  const scrollByAmount = (dir: "prev" | "next") => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector<HTMLElement>("[data-card]")
    const delta = card ? card.offsetWidth + 24 : 320
    el.scrollBy({ left: dir === "next" ? delta : -delta, behavior: "smooth" })
  }

  return (
    <section id="services" className="w-full">
      <div className="mx-auto max-w-7xl px-3 py-8 sm:px-4 sm:py-12 md:px-6 md:py-16 lg:px-8">
        <div className="mb-6 text-center">
                     <h2 className="text-pretty font-sans text-3xl font-black leading-tight tracking-[-0.02em] gradient-heading sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">Services</h2>
          <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-balance text-muted-foreground">
            From attention to conversion to retention—built as one system.
          </p>
        </div>




        {/* Track */}
        <div
          ref={trackRef}
          className={cn(
            "mt-8 flex gap-6 overflow-x-auto pb-2",
            "snap-x snap-mandatory",
            "[&::-webkit-scrollbar]:hidden",
            "scrollbar-hide",
            "[-ms-overflow-style:none]",
            "[scrollbar-width:none]",
          )}
        >
          {services.map((s) => (
            <div
              key={s.title}
              className={cn(
                "group flex-none snap-start cursor-pointer",
                // 1-up on phones, ~3-up on desktop (each card ~33% width)
                "w-[86%] sm:w-[60%] md:w-[48%] lg:w-[32%]",
              )}
              data-card
              onClick={() => setSelectedService(s)}
              aria-label={`${s.title} — ${s.caseStudy.brand} case study`}
            >
              {/* Portrait media */}
              <div className="relative overflow-hidden rounded-2xl bg-muted shadow-2xl ring-1 ring-foreground/10">
                {/* Hero Image - Larger */}
                <img
                  alt={`${s.title} example`}
                  src={`/abstract-geometric-shapes.png?height=480&width=300&query=${encodeURIComponent(s.imageQuery)}`}
                  className="h-[400px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Subtle overlay on hover */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-10 bg-black" />
              </div>
              {/* Content */}
              <div className="mt-4 p-4">
                <h3 className="text-xl font-black text-foreground mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">{s.short}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows below */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            aria-label="Previous"
            onClick={() => scrollByAmount("prev")}
            className="h-10 w-10 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition"
          >
            ‹
          </button>
          <button
            aria-label="Next"
            onClick={() => scrollByAmount("next")}
            className="h-10 w-10 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition"
          >
            ›
          </button>
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 backdrop-blur hover:bg-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            
            <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-t-2xl">
              <img
                src={`/abstract-geometric-shapes.png?height=480&width=300&query=${encodeURIComponent(selectedService.imageQuery)}`}
                alt={selectedService.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            
            <div className="p-6 md:p-8">
              <h2 className="text-3xl font-black text-foreground mb-4">{selectedService.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">{selectedService.short}</p>
              
              <div className="mt-8 pt-6 border-t border-foreground/10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wide">Case Study</p>
                    <p className="text-sm font-semibold text-foreground">{selectedService.caseStudy.brand}</p>
                  </div>
                  <a 
                    href={`/case-studies/${selectedService.caseStudy.slug}`}
                    className="text-sm font-semibold text-primary hover:underline"
                  >
                    View case study →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export function ServicesSection() {
  return <Services />
}

export { Services }
export default Services
