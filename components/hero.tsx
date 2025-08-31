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
      <div className="mx-auto max-w-7xl px-3 py-8 sm:px-4 sm:py-12 md:px-6 md:py-16 lg:px-8">
        {/* Copy */}
        <div className="mt-2 grid items-start gap-6 sm:gap-8 md:gap-10">
          <div className="space-y-4 sm:space-y-6">
            {/* Glossy pill without using logo/wordmark */}
            <div className="text-center sm:text-left">
              <GlossyPill className="mb-1 text-xs font-semibold uppercase tracking-wide">
                Premium growth partner
              </GlossyPill>
            </div>

                         <h1 className="text-center sm:text-left text-pretty font-sans text-3xl font-black leading-tight tracking-[-0.02em] gradient-heading sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
               Elevate Your<br />
               Brand<br />
               With Impact.
             </h1>
                         <p className="max-w-prose text-center sm:text-left text-base sm:text-lg text-balance text-muted-foreground">
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
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center sm:justify-start gap-3">
              {/* Brand-consistent glossy primary CTA */}
              <Link href="/contact" className="focus:outline-none">
                <GlossyPill as="div" className="cursor-pointer text-sm font-semibold text-center">
                  Free Strategy Session
                </GlossyPill>
              </Link>
              {/* Secondary CTA to case studies */}
              <Link
                href="/case-studies"
                className="rounded-full border border-primary px-4 sm:px-5 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/10 text-center"
              >
                View Case Studies
              </Link>
            </div>

            {/* Services bullets */}
                         <ul className="grid gap-2 sm:gap-3 text-sm sm:text-base text-center sm:text-left text-muted-foreground md:grid-cols-2">
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
