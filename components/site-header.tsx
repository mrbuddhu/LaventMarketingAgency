"use client"

import Link from "next/link"
import Image from "next/image"
import { NavigationMenu } from "@/components/ui/navigation-menu"
import { GlossyPill } from "@/components/brand/glossy-pill"
import { cn } from "@/lib/utils"

export function SiteHeader({ className }: { className?: string }) {
  return (
    <header
      className={cn("sticky top-0 z-40 w-full bg-transparent supports-[backdrop-filter]:bg-transparent", className)}
    >
      <div className="mx-auto max-w-6xl px-6 py-4">
        <div
          className={cn(
            "relative flex items-center justify-between overflow-hidden",
            "rounded-[36px] md:rounded-[48px]", // slightly rounder corners to match footer capsule
            "glass-shell glass-strong supports-[backdrop-filter]:backdrop-blur-xl backdrop-saturate-150",
            "text-white ring-1 ring-white/15 px-6 py-4 md:px-8 md:py-5",
          )}
          style={{ boxShadow: "0 38px 108px rgba(0,0,0,0.38)" }} // increase lift to match footer
        >
          <div
            className="pointer-events-none absolute -top-10 left-1/2 h-20 w-[92%] -translate-x-1/2 rounded-full bg-white/22 blur-2xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: "radial-gradient(60% 40% at 50% 0%, rgba(255,255,255,0.14), transparent 60%)",
            }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-1/2"
            style={{
              background: "linear-gradient(to bottom, rgba(255,255,255,0.16), rgba(255,255,255,0.06), transparent)",
            }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-0 shadow-[inset_0_-36px_72px_rgba(0,0,0,0.22)]"
            aria-hidden="true"
          />

          <Link href="/" className="relative z-10 flex items-center gap-3" aria-label="Lavent Marketing home">
            <Image
              src="/images/logo-main.png"
              alt="Lavent emblem"
              width={56}
              height={56}
              priority
              className="h-14 w-14 md:h-16 md:w-16 rounded-full"
            />
            <span className="text-3xl md:text-4xl font-black text-white">Lavent</span>
          </Link>

          <nav aria-label="Primary" className="relative z-10 ml-auto">
            <NavigationMenu className="hidden md:flex">
              <ul className="flex items-center gap-6 text-base font-semibold">
                <li>
                  <Link href="/services" className="text-white/90 hover:text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies" className="text-white/90 hover:text-white">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-white/90 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white/90 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </NavigationMenu>
          </nav>

          <div className="relative z-10 ml-6 hidden md:block">
            <a href="/contact" aria-label="Book a strategy call">
              <GlossyPill as="div" className="cursor-pointer text-base font-semibold">
                Book a strategy call
              </GlossyPill>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
