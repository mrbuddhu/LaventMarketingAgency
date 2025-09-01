"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { X } from "lucide-react"
import { CheckerBar } from "@/components/brand/checker-bar"
import { GlossyPill } from "@/components/brand/glossy-pill"

type Case = {
  title: string
  metric?: string
  imageSrc: string
  slug: string
  brand: string
  results: string
  description: string
}

const CASES: Case[] = [
  {
    title: "Skincare Brand • +260% sales via Meta",
    metric: "260% sales lift",
    imageSrc: "/case-study-skincare.png",
    slug: "skincare-brand",
    brand: "Skincare Brand",
    results: "260% sales lift via Meta advertising campaigns",
    description: "Implemented targeted Meta advertising strategy that resulted in significant sales growth and improved brand visibility."
  },
  {
    title: "X Brand • +1.3k followers in 60 days",
    metric: "290% sales boost",
    imageSrc: "/case-study-nam-nam.png",
    slug: "nam-nam",
    brand: "X Brand",
    results: "1.3k new followers in 60 days, 290% sales boost",
    description: "Developed comprehensive social media strategy that rapidly grew following and significantly increased sales performance."
  },
]

export default function HomeCaseStudiesSection() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Case | null>(null)

  return (
    <section aria-labelledby="home-case-studies" className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16">
        <div className="mb-6 md:mb-8 text-center">
                      <h2 id="home-case-studies" className="text-pretty font-sans text-3xl font-black leading-tight tracking-[-0.02em] gradient-heading sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Case Studies
            </h2>
            <p className="text-lg md:text-xl text-foreground/80">Two highlights—view the full library for more.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 max-w-4xl mx-auto">
          {CASES.map((c) => (
            <button
              key={c.slug}
              onClick={() => setSelectedCaseStudy(c)}
              className="group overflow-hidden rounded-xl ring-1 ring-foreground/10 hover:ring-foreground/20 transition shadow-lg hover:shadow-xl text-left"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#19653F]/5">
                <Image
                  src={c.imageSrc || "/placeholder.svg"}
                  alt={c.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width:768px) 100vw, 50vw"
                />
              </div>
              <div className="p-3 md:p-4">
                <h3 className="text-lg md:text-xl font-semibold text-pretty">{c.title}</h3>
                {c.metric ? <p className="mt-1 text-base text-foreground/80">{c.metric}</p> : null}
              </div>
            </button>
          ))}
        </div>
        
        <div className="mt-8 flex justify-center">
          <Link href="/case-studies">
            <GlossyPill as="div" className="cursor-pointer text-sm font-semibold">
              View all case studies
            </GlossyPill>
          </Link>
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedCaseStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl">
            <button
              onClick={() => setSelectedCaseStudy(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 backdrop-blur hover:bg-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            
            <div className="relative w-full overflow-hidden rounded-t-2xl">
              <Image
                src={selectedCaseStudy.imageSrc}
                alt={selectedCaseStudy.title}
                width={800}
                height={600}
                className="w-full h-auto max-h-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            
            <div className="p-6 md:p-8">
              <div className="mb-6">
                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Case Study</p>
                <h2 className="text-2xl font-black gradient-heading mb-2">{selectedCaseStudy.title}</h2>
                <p className="text-lg font-semibold text-foreground">{selectedCaseStudy.brand}</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Results</h3>
                <p className="text-muted-foreground leading-relaxed">{selectedCaseStudy.results}</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">What We Did</h3>
                <p className="text-muted-foreground leading-relaxed">{selectedCaseStudy.description}</p>
              </div>
              
              <div className="pt-4 border-t border-foreground/10">
                <button
                  onClick={() => setSelectedCaseStudy(null)}
                  className="w-full px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-colors"
                >
                  Close Case Study
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
