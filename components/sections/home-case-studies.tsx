"use client"

import Image from "next/image"
import Link from "next/link"
import { CheckerBar } from "@/components/brand/checker-bar"
import { GlossyPill } from "@/components/brand/glossy-pill"

type Case = {
  title: string
  metric?: string
  imageSrc: string
  slug: string
}

const CASES: Case[] = [
  {
    title: "Skincare Brand • +260% sales via Meta",
    metric: "260% sales lift",
    imageSrc: "/case-study-skincare.png",
    slug: "skincare-brand",
  },
  {
    title: "Nam Nam • +1.3k followers in 60 days",
    metric: "290% sales boost",
    imageSrc: "/case-study-nam-nam.png",
    slug: "nam-nam",
  },
]

export default function HomeCaseStudiesSection() {
  return (
    <section aria-labelledby="home-case-studies" className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16">
        <div className="mb-6 md:mb-8 text-center">
                      <h2 id="home-case-studies" className="text-pretty font-sans text-5xl font-black leading-tight tracking-[-0.02em] text-foreground md:text-7xl lg:text-8xl">
              Case Studies
            </h2>
            <p className="text-lg md:text-xl text-foreground/80">Two highlights—view the full library for more.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 max-w-4xl mx-auto">
          {CASES.map((c) => (
            <Link
              key={c.slug}
              href={`/case-studies/${c.slug}`}
              className="group overflow-hidden rounded-xl ring-1 ring-foreground/10 hover:ring-foreground/20 transition shadow-lg hover:shadow-xl"
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
            </Link>
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
    </section>
  )
}
