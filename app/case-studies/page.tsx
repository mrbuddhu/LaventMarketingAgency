"use client"

import { useState } from "react"
import Image from "next/image"
import { GlossyPill } from "@/components/brand/glossy-pill"
import { X } from "lucide-react"

const studies = [
  {
    title: "Lavent (Skincare Brand)",
    body: "260% sales boost via Meta ads; full content pipeline (scripting, editing, shoots).",
    image: "/case-study-skincare.png",
    details: {
      challenge: "A skincare brand struggling with low engagement and poor conversion rates on social media.",
      solution: "Implemented comprehensive Meta ads strategy with full content pipeline including scripting, editing, and professional shoots.",
      results: [
        "260% increase in sales",
        "Full content pipeline established",
        "Professional video shoots implemented",
        "Improved brand positioning"
      ],
      services: ["Meta Ads", "Content Creation", "Video Production", "Brand Strategy"]
    }
  },
  {
    title: "Nam Nam",
    body: "International growth; +1.3k followers and ~290% sales lift in ~3 months.",
    image: "/case-study-nam-nam.png",
    details: {
      challenge: "International food brand looking to expand market presence and increase sales.",
      solution: "Strategic social media growth campaign with targeted content and engagement strategies.",
      results: [
        "1,300+ new followers",
        "290% sales increase",
        "International market expansion",
        "Enhanced brand recognition"
      ],
      services: ["Social Media Growth", "Content Strategy", "Market Expansion", "Brand Building"]
    }
  },
  {
    title: "Balaji Wafers",
    body: "Professional content overhaul leading to explosive reach and engagement increases.",
    image: "/case-study-portrait-fmcg.png",
    details: {
      challenge: "FMCG brand with outdated content and low social media engagement.",
      solution: "Complete content overhaul with professional photography and strategic social media management.",
      results: [
        "Explosive reach increase",
        "Significant engagement boost",
        "Professional content library",
        "Improved brand perception"
      ],
      services: ["Content Creation", "Social Media Management", "Brand Photography", "Engagement Strategy"]
    }
  },
  {
    title: "Pink Matter",
    body: "3x sales in 2 months with static+dynamic ads; +70% website traffic via Meta, Email & WhatsApp.",
    image: "/case-study-portrait-fashion-brand.png",
    details: {
      challenge: "Fashion brand needing rapid sales growth and increased website traffic.",
      solution: "Multi-channel marketing approach combining static and dynamic ads with email and WhatsApp automation.",
      results: [
        "3x sales increase",
        "70% website traffic boost",
        "Multi-channel automation",
        "Scalable growth system"
      ],
      services: ["Static Ads", "Dynamic Ads", "Email Marketing", "WhatsApp Automation"]
    }
  },
  {
    title: "Dayout Snacks (NJ)",
    body: "55% sales lift combining SEO + Meta + automated WhatsApp & email flows.",
    image: "/case-study-portrait-snacks.png",
    details: {
      challenge: "Snack brand in New Jersey needing comprehensive digital marketing strategy.",
      solution: "Integrated approach combining SEO, Meta ads, and automated messaging flows.",
      results: [
        "55% sales increase",
        "SEO optimization",
        "Automated messaging flows",
        "Integrated marketing system"
      ],
      services: ["SEO", "Meta Ads", "WhatsApp Automation", "Email Marketing"]
    }
  },
]

export default function CaseStudiesPage() {
  const [selectedStudy, setSelectedStudy] = useState<any>(null)

  return (
    <main>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16">
        <div className="mb-16 text-center">
          <GlossyPill className="mb-4 text-sm font-semibold uppercase tracking-wide">
            View Results
          </GlossyPill>
          <h1 className="text-pretty font-sans text-5xl font-black leading-tight tracking-[-0.02em] text-foreground md:text-7xl lg:text-8xl">Case Studies</h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-balance text-muted-foreground">
            Proof over promises—selected transformations driven by growth systems.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {studies.map((s, index) => (
            <article 
              key={s.title} 
              className="group rounded-2xl bg-white/85 backdrop-blur supports-[backdrop-filter]:backdrop-blur shadow-2xl ring-1 ring-foreground/10 overflow-hidden hover:shadow-3xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              onClick={() => setSelectedStudy(s)}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-sm">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-black text-foreground mb-3">{s.title}</h2>
                    <p className="text-muted-foreground leading-relaxed">{s.body}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wide">Case Study</span>
                      <span className="text-sm font-semibold text-primary group-hover:translate-x-1 transition-transform">
                        View details →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl">
            <button
              onClick={() => setSelectedStudy(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 backdrop-blur hover:bg-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            
            <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-t-2xl">
              <Image
                src={selectedStudy.image}
                alt={selectedStudy.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            
            <div className="p-6 md:p-8">
              <h2 className="text-3xl font-black text-foreground mb-4">{selectedStudy.title}</h2>
              <p className="text-lg text-muted-foreground mb-8">{selectedStudy.body}</p>
              
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">The Challenge</h3>
                  <p className="text-muted-foreground">{selectedStudy.details.challenge}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Our Solution</h3>
                  <p className="text-muted-foreground">{selectedStudy.details.solution}</p>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Results</h3>
                <div className="grid gap-3 md:grid-cols-2">
                  {selectedStudy.details.results.map((result: string, index: number) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Services Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedStudy.details.services.map((service: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full text-sm font-semibold bg-primary/10 text-primary"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
