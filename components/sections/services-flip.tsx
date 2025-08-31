"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef } from "react"

type Service = {
  title: string
  short: string
  image: string
  caseStudy: {
    slug: string
    brand: string
    highlight: string
  }
}

const services: Service[] = [
  {
    title: "Static Ads",
    short: "First impressions matter. Our static ads are designed to stop the scroll in seconds. These crisp, visually engaging designs help brands speak volumes in one frame—building awareness, curiosity, and immediate interaction. Brands using our static ads have seen an average of 3x more engagement. So ask yourself, are your competitors being seen while you're still getting ignored?",
    image: "/case-study-portrait-fashion-brand.png",
    caseStudy: { slug: "pink-matter", brand: "Pink Matter", highlight: "3x sales, +70% site traffic" },
  },
  {
    title: "Dynamic Ads",
    short: "Imagine your product following your customer wherever they go online—but only when they're ready to buy. Our dynamic ads do just that, creating a hyper-personalized experience by showcasing exactly what your customers have browsed or added to cart. This isn't just retargeting—it's precision-driven conversion science that brings back leads ready to purchase.",
    image: "/case-study-portrait-snacks.png",
    caseStudy: { slug: "pink-matter", brand: "Pink Matter", highlight: "Precision funnels that scale" },
  },
  {
    title: "Meta Ads (Facebook & Instagram)",
    short: "We're not just running ads—we're building funnels that sell. Our static + dynamic ad strategy on Meta platforms drives mass reach while smart retargeting ensures every lead counts. We've helped brands scale from zero to 6-figure revenues using this method alone. Meanwhile, others are still wasting budgets on 'boost posts'. Where do you want to be?",
    image: "/case-study-portrait-fmcg.png",
    caseStudy: { slug: "pink-matter", brand: "Pink Matter", highlight: "From 0 to 6-figure revenue" },
  },
  {
    title: "Email Marketing",
    short: "Email is not dead—it's quietly converting leads at scale. Our automated email flows guide your audience from interest to action—whether it's a welcome offer, cart reminder, or loyalty win-back. Many of our clients now earn 30-40% of their total sales from email alone. While others chase cold leads, we nurture warm ones—ready to buy.",
    image: "/case-study-portrait-nam-nam.png",
    caseStudy: { slug: "dayout-snacks", brand: "Dayout Snacks", highlight: "+55% sales with flows" },
  },
  {
    title: "WhatsApp Marketing",
    short: "While others wait for customers to reply to emails, our clients are closing sales on WhatsApp—instantly. With over 90% open rates, WhatsApp campaigns cut the noise and create personal, fast-moving conversations. From product drops to customer support, it's the channel your audience already trusts—and we help you monetize it.",
    image: "/case-study-portrait-skincare-brand.png",
    caseStudy: { slug: "dayout-snacks", brand: "Dayout Snacks", highlight: "90%+ open rates" },
  },
  {
    title: "SEO for Websites",
    short: "Paid ads give you spikes. SEO gives you a mountain. We optimize your website so you consistently show up on Google when your customer is searching. It's like owning digital real estate—others are paying rent, you're building assets. Every day you delay SEO is traffic you're gifting to your competitors.",
    image: "/case-study-nam-nam.png",
    caseStudy: { slug: "dayout-snacks", brand: "Dayout Snacks", highlight: "Owning high-intent traffic" },
  },
  {
    title: "3D Mockups for Amazon & Flipkart",
    short: "Your product's first impression on marketplaces is its last chance to convert. Our 3D mockups don't just look stunning—they boost trust and clicks, helping your products rank higher and sell faster. Customers can't touch your product—but with our visuals, they'll feel like they already have.",
    image: "/case-study-skincare.png",
    caseStudy: { slug: "nam-nam", brand: "Nam Nam", highlight: "Higher CTR on marketplaces" },
  },
  {
    title: "Content Creation for Instagram",
    short: "We don't post content—we craft digital magnetism. Our Instagram strategy focuses on Reels, carousels, and trends that drive views, shares, and followers. Brands working with us have seen explosive growth in profile visits and website clicks. If content is king—engagement is the crown, and we hand it to you.",
    image: "/case-study-portrait-fmcg.png",
    caseStudy: { slug: "balaji-wafers", brand: "Balaji Wafers", highlight: "Massive engagement lift" },
  },
]

// Reveal on scroll with reduced-motion support
function useStaggerVisible() {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) {
      root.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
        el.style.opacity = "1"
        el.style.transform = "none"
      })
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.dataset.visible = "true"
            io.unobserve(el)
          }
        })
      },
      { threshold: 0.2 },
    )
    root.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return ref
}

function FlippableCard({ item, index, onCardClick }: { item: Service; index: number; onCardClick: (service: Service) => void }) {
  return (
    <div
      className="group block focus:outline-none cursor-pointer"
      onClick={() => onCardClick(item)}
      aria-label={`${item.title} – ${item.caseStudy.brand} case study`}
    >
      <div
        data-reveal
        style={{ transitionDelay: `${index * 80}ms` }}
        className="opacity-0 translate-y-6 transition-all duration-700 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0"
      >
        {/* Modern service card */}
        <div className="relative h-[480px] w-full rounded-2xl bg-white/85 backdrop-blur supports-[backdrop-filter]:backdrop-blur shadow-2xl ring-1 ring-foreground/10 overflow-hidden hover:shadow-3xl transition-all duration-300 group-hover:scale-[1.02]">
          {/* Hero Image */}
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
          
          {/* Service content */}
          <div className="flex flex-col h-full p-6">
            <div className="flex-1 space-y-4">
              <div className="flex items-center justify-between">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">{index + 1}</span>
                </div>
                <span className="rounded-full px-3 py-1 text-xs font-semibold text-primary bg-primary/10">
                  Premium
                </span>
              </div>
              
              <div>
                <h3 className="text-xl font-black text-foreground leading-tight mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-6">
                  {item.short}
                </p>
              </div>
            </div>

            {/* Case study preview */}
            <div className="mt-6 pt-4 border-t border-foreground/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide">Case Study</p>
                  <p className="text-sm font-semibold text-foreground">{item.caseStudy.brand}</p>
                  <p className="text-xs text-muted-foreground">{item.caseStudy.highlight}</p>
                </div>
                <span className="text-sm font-semibold text-primary group-hover:translate-x-1 transition-transform">
                  View case →
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ServicesFlip() {
  const [selectedService, setSelectedService] = useState<any>(null)
  const ref = useStaggerVisible()
  
  return (
    <section id="services" ref={ref} className="py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <header className="mb-8 md:mb-12">
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {services.map((s, i) => (
            <FlippableCard key={s.title} item={s} index={i} onCardClick={setSelectedService} />
          ))}
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
              <Image
                src={selectedService.image}
                alt={selectedService.title}
                fill
                className="object-cover"
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
                    <p className="text-xs text-muted-foreground">{selectedService.caseStudy.highlight}</p>
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
