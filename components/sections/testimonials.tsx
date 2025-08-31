"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { GlossyPill } from "@/components/brand/glossy-pill"

type Testimonial = {
  quote: string
  name: string
  role?: string
  avatar?: string
}

const ITEMS: Testimonial[] = [
  {
    quote: "Lavent turned our browsers into buyers. The funnel design and creatives were on-point from day one.",
    name: "Aarav S.",
    role: "Founder, D2C Snacks",
    avatar: "/client-portrait-1.png",
  },
  {
    quote: "We saw a real lift in sales without burning budget. Data-informed, fast iterations, premium creative.",
    name: "Mira K.",
    role: "CMO, Fashion Label",
    avatar: "/client-portrait-2.png",
  },
  {
    quote: "Email + WhatsApp flows now drive 35% of our revenue. Would recommend without hesitation.",
    name: "Rohit T.",
    role: "Ops Head, FMCG",
    avatar: "/client-portrait-3.png",
  },
]

export default function TestimonialsSection() {
  const scrollerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const track = scrollerRef.current
    if (!track) return
    track.style.scrollbarWidth = "none"
    ;(track.style as any).msOverflowStyle = "none"
  }, [])

  const scroll = (dir: "prev" | "next") => {
    const el = scrollerRef.current
    if (!el) return
    
    const card = el.querySelector<HTMLElement>("[data-card]")
    if (!card) return
    
    const cardWidth = card.offsetWidth
    const gap = 24
    const scrollAmount = cardWidth + gap
    
    if (dir === "next") {
      el.scrollBy({ left: scrollAmount, behavior: "smooth" })
    } else {
      el.scrollBy({ left: -scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <section aria-labelledby="testimonials" className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16">
        <div className="mb-6 md:mb-8 text-center">
                     <h2 id="testimonials" className="text-pretty font-sans text-5xl font-black leading-tight tracking-[-0.02em] gradient-heading md:text-7xl lg:text-8xl">
            Testimonials
          </h2>
          <p className="text-pretty text-lg md:text-xl text-foreground/80">Real outcomes from ambitious brands.</p>
        </div>

        {/* Navigation arrows */}
        <div className="mb-6 flex justify-center">
          <div className="flex gap-2">
            <button
              aria-label="Previous testimonials"
              onClick={() => scroll("prev")}
              className="h-10 w-10 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition"
            >
              ‹
            </button>
            <button
              aria-label="Next testimonials"
              onClick={() => scroll("next")}
              className="h-10 w-10 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition"
            >
              ›
            </button>
          </div>
        </div>

        {/* Testimonials carousel */}
        <div
          ref={scrollerRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory testimonials-scroll"
          style={{ 
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {ITEMS.map((t, i) => (
            <div
              key={i}
              data-card
              className="snap-start shrink-0 w-[85%] sm:w-[60%] md:w-[28%] rounded-2xl bg-white/85 backdrop-blur shadow-2xl ring-1 ring-foreground/10 p-6 flex flex-col"
            >
              {/* Avatar and name */}
              <div className="flex flex-col items-center text-center mb-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full mb-3 ring-2 ring-foreground/10">
                  <Image 
                    src={t.avatar! || "/placeholder.svg"} 
                    alt={t.name} 
                    fill 
                    className="object-cover" 
                  />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{t.name}</h3>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
              
              {/* Quote */}
              <div className="flex-1 flex items-center">
                <blockquote className="text-foreground/90 leading-relaxed text-base text-center">
                  "{t.quote}"
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
