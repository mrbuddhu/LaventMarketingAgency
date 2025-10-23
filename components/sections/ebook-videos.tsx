"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GlossyPill } from "@/components/brand/glossy-pill"

export function EbookVideos() {
  return (
    <section aria-labelledby="ebook-videos" className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-8 md:mb-12 text-center">
          <h2 id="ebook-videos" className="text-pretty font-sans text-3xl font-black leading-tight tracking-[-0.02em] gradient-heading sm:text-4xl md:text-5xl lg:text-6xl">
            The Marketing Bible
          </h2>
          <p className="mt-3 text-lg text-foreground/80">Actionable playbooks to elevate your brand</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Desktop Video - shown on desktop and tablet */}
          <div className="hidden md:block">
            <div className="group overflow-hidden rounded-xl ring-1 ring-foreground/10 hover:ring-foreground/20 transition shadow-lg hover:shadow-xl max-w-4xl mx-auto">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
              >
                <source src="/videos/LaventStoreVideoDesktop.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="mt-4 text-center">
              <Link href="/store">
                <GlossyPill as="div" className="cursor-pointer text-sm font-semibold">
                  Get The Marketing Bible
                </GlossyPill>
              </Link>
            </div>
          </div>

          {/* Mobile Video - shown on mobile only */}
          <div className="block md:hidden">
            <div className="group overflow-hidden rounded-xl ring-1 ring-foreground/10 hover:ring-foreground/20 transition shadow-lg hover:shadow-xl max-w-sm mx-auto">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
              >
                <source src="/videos/LaventStoreVideoMobile.MP4" type="video/mp4" />
              </video>
            </div>
            <div className="mt-4 text-center">
              <Link href="/store">
                <GlossyPill as="div" className="cursor-pointer text-sm font-semibold">
                  Get The Marketing Bible
                </GlossyPill>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
