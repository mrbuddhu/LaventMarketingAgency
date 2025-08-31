"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { NavigationMenu } from "@/components/ui/navigation-menu"
import { GlossyPill } from "@/components/brand/glossy-pill"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function SiteHeader({ className }: { className?: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header
      className={cn("sticky top-0 z-40 w-full bg-transparent supports-[backdrop-filter]:bg-transparent", className)}
    >
      <div className="mx-auto max-w-6xl px-3 sm:px-4 md:px-6 py-3 sm:py-4">
        <div
          className={cn(
            "relative flex items-center justify-between overflow-hidden",
            "rounded-[20px] sm:rounded-[24px] md:rounded-[36px] lg:rounded-[48px]", // responsive rounded corners
            "glass-shell glass-strong supports-[backdrop-filter]:backdrop-blur-xl backdrop-saturate-150",
            "text-white ring-1 ring-white/15 px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 lg:px-8 lg:py-5",
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

          <Link href="/" className="relative z-10 flex items-center gap-1.5 sm:gap-2 md:gap-3" aria-label="Lavent Marketing home">
            <Image
              src="/images/logo-main.png"
              alt="Lavent emblem"
              width={56}
              height={56}
              priority
              className="h-8 w-8 sm:h-10 sm:w-10 md:h-14 md:w-14 lg:h-16 lg:w-16 rounded-full"
            />
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black text-white">Lavent</span>
          </Link>

          <div className="relative z-10 hidden md:block">
            <nav aria-label="Primary">
              <NavigationMenu>
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
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative z-10 md:hidden p-1.5 sm:p-2 text-white hover:text-white/80 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
          </button>

          {/* CTA Pill - visible on all screen sizes */}
          <div className="relative z-10">
            <a href="/contact" aria-label="Book a call">
              <GlossyPill as="div" className="cursor-pointer text-xs sm:text-sm md:text-base font-semibold px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2">
                Book a call
              </GlossyPill>
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 mx-3 sm:mx-4 md:mx-6 z-50">
            <div className="glass-shell glass-strong supports-[backdrop-filter]:backdrop-blur-xl backdrop-saturate-150 rounded-2xl border border-white/15 p-4">
              <nav className="space-y-3">
                <Link
                  href="/services"
                  className="block text-white/90 hover:text-white py-2 px-3 rounded-lg hover:bg-white/10 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/case-studies"
                  className="block text-white/90 hover:text-white py-2 px-3 rounded-lg hover:bg-white/10 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Case Studies
                </Link>
                <Link
                  href="/about"
                  className="block text-white/90 hover:text-white py-2 px-3 rounded-lg hover:bg-white/10 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="block text-white/90 hover:text-white py-2 px-3 rounded-lg hover:bg-white/10 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <div className="pt-2 border-t border-white/20">
                  <Link
                    href="/contact"
                    className="block w-full text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <GlossyPill as="div" className="cursor-pointer text-sm font-semibold w-full">
                      Book a strategy call
                    </GlossyPill>
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
