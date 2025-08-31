"use client"

import Link from "next/link"
import { GlossyPill } from "@/components/brand/glossy-pill"
import { useEffect, useState } from "react"

export function Hero() {
  const [animatedWords, setAnimatedWords] = useState<number[]>([])

  useEffect(() => {
    const words = "Turning ideas into impact. We blend bold creative and performance strategy across Static & Dynamic Ads, Meta funnels, Email + WhatsApp automation, SEO, and high-converting marketplace visuals.".split(' ')
    
    words.forEach((_, index) => {
      setTimeout(() => {
        setAnimatedWords(prev => [...prev, index])
      }, index * 100) // 100ms delay between each word
    })
  }, [])

  const descriptionWords = "Turning ideas into impact. We blend bold creative and performance strategy across Static & Dynamic Ads, Meta funnels, Email + WhatsApp automation, SEO, and high-converting marketplace visuals.".split(' ')

  return (
    <section className="relative overflow-hidden bg-background" id="home">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16">
        {/* Copy */}
        <div className="mt-2 grid items-start gap-10">
          <div className="space-y-6">
            {/* Glossy pill without using logo/wordmark */}
            <GlossyPill className="mb-1 text-xs font-semibold uppercase tracking-wide">
              Premium growth partner
            </GlossyPill>

            <h1 className="text-pretty font-sans text-5xl font-black leading-tight tracking-[-0.02em] text-foreground md:text-7xl lg:text-8xl">
              Elevate Your<br />
              Brand<br />
              With Impact.
            </h1>
            <p className="max-w-prose text-lg text-balance text-muted-foreground">
              {descriptionWords.map((word, index) => (
                <span
                  key={index}
                  className={`inline-block mr-1 ${
                    animatedWords.includes(index) ? 'animate-word' : 'opacity-30 text-gray-400'
                  }`}
                >
                  {word}
                </span>
              ))}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              {/* Brand-consistent glossy primary CTA */}
              <Link href="/contact" className="focus:outline-none">
                <GlossyPill as="div" className="cursor-pointer text-sm font-semibold">
                  Free Strategy Session
                </GlossyPill>
              </Link>
              {/* Secondary CTA to case studies */}
              <Link
                href="/case-studies"
                className="rounded-full border border-primary px-5 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
              >
                View Case Studies
              </Link>
            </div>

            {/* Services bullets */}
            <ul className="grid gap-3 text-base text-muted-foreground md:grid-cols-2">
              <li>• Static Ads that stop the scroll</li>
              <li>• Dynamic Ads for precision retargeting</li>
              <li>• Meta Ads funnels that scale</li>
              <li>• Email Marketing flows that convert</li>
              <li>• WhatsApp Marketing with 90%+ open rates</li>
              <li>• SEO that compounds</li>
              <li>• 3D Mockups for marketplaces</li>
              <li>• Instagram content that drives clicks</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
