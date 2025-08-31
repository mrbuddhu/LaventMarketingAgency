import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { GlossyPill } from "@/components/brand/glossy-pill"
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react"

export function SiteFooter({ className }: { className?: string }) {
  return (
    <footer className={cn("mt-16", className)} aria-label="Site footer" id="contact">
      {/* 3D glossy block using brand palette */}
      <div className="mx-auto max-w-6xl px-3 sm:px-4 md:px-6">
        <div
          className={cn(
            "relative mt-6 overflow-hidden",
            "rounded-[20px] sm:rounded-[24px] md:rounded-[32px] lg:rounded-[44px]",
            "glass-shell glass-strong supports-[backdrop-filter]:backdrop-blur-xl backdrop-saturate-150",
            "text-white ring-1 ring-white/15",
          )}
          style={{ boxShadow: "0 44px 120px rgba(0,0,0,0.42)" }}
        >
          {/* top gloss band */}
          <div
            className="pointer-events-none absolute -top-12 left-1/2 h-28 w-[92%] -translate-x-1/2 rounded-full bg-white/25 blur-2xl"
            aria-hidden="true"
          />
          {/* radial glow */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: "radial-gradient(60% 40% at 50% 0%, rgba(255,255,255,0.20), transparent 60%)",
            }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-1/2"
            style={{
              background: "linear-gradient(to bottom, rgba(255,255,255,0.18), rgba(255,255,255,0.06), transparent)",
            }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-0 shadow-[inset_0_-44px_88px_rgba(0,0,0,0.25)]"
            aria-hidden="true"
          />

          <div className="relative grid gap-8 sm:gap-10 md:gap-12 px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20">
            {/* Brand Section */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 sm:gap-4 mb-4">
                <Image
                  src="/images/logo-main.png"
                  alt="Lavent emblem"
                  width={64}
                  height={64}
                  className="h-12 w-12 sm:h-16 sm:w-16 rounded-lg"
                />
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">Lavent</h3>
              </div>
              <p className="mt-4 max-w-sm mx-auto md:mx-0 text-base sm:text-lg/7 text-white">
                Elevate Your Brand With Impact.<br />
                Turning ideas into impact.
              </p>
              <div className="mt-4 text-xs sm:text-sm text-white space-y-1">
                <p className="flex items-center justify-center md:justify-start gap-2">
                  <MapPin className="h-4 w-4" />
                  Rourkela, Odisha, 769001.
                </p>
                <p className="flex items-center justify-center md:justify-start gap-2">
                  <Phone className="h-4 w-4" />
                  +91 9827249743
                </p>
                <p className="flex items-center justify-center md:justify-start gap-2">
                  <Phone className="h-4 w-4" />
                  +91 70085 07162
                </p>
              </div>
              <div className="mt-6 space-y-3">
                <GlossyPill as="button" className="text-base font-semibold">
                  Free Strategy Session
                </GlossyPill>
                
                {/* Contact Icons */}
                <div className="flex justify-center md:justify-start gap-3">
                  <Link href="tel:+919827249743" className="focus:outline-none">
                    <GlossyPill as="div" className="flex items-center justify-center text-sm font-semibold">
                      <Phone className="h-4 w-4" />
                    </GlossyPill>
                  </Link>
                  <Link href="https://wa.me/919827249743" target="_blank" rel="noopener noreferrer" className="focus:outline-none">
                    <GlossyPill as="div" className="flex items-center justify-center text-sm font-semibold">
                      <MessageCircle className="h-4 w-4" />
                    </GlossyPill>
                  </Link>
                  <Link href="mailto:hello@lavent.com" className="focus:outline-none">
                    <GlossyPill as="div" className="flex items-center justify-center text-sm font-semibold">
                      <Mail className="h-4 w-4" />
                    </GlossyPill>
                  </Link>
                </div>
              </div>
            </div>

            {/* Links Grid - Mobile: Single column, Desktop: 3 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="text-center sm:text-left">
                <h4 className="text-base font-bold uppercase tracking-wide text-white">Company</h4>
                <ul className="mt-4 space-y-3 text-base/6 text-white">
                  <li>
                    <Link href="/about" className="hover:underline underline-offset-4 text-white">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="hover:underline underline-offset-4 text-white">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/case-studies" className="hover:underline underline-offset-4 text-white">
                      Case Studies
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="text-center sm:text-left">
                <h4 className="text-base font-bold uppercase tracking-wide text-white">Expertise</h4>
                <ul className="mt-4 space-y-3 text-base/6 text-white">
                  <li>Static &amp; Dynamic Ads</li>
                  <li>Meta Funnels</li>
                  <li>Email &amp; WhatsApp</li>
                  <li>SEO</li>
                </ul>
              </div>
              <div className="text-center sm:text-left">
                <h4 className="text-base font-bold uppercase tracking-wide text-white">Connect</h4>
                <ul className="mt-4 space-y-3 text-base/6 text-white">
                  <li>
                    <Link
                      href="https://instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline underline-offset-4 text-white"
                    >
                      Instagram
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline underline-offset-4 text-white"
                    >
                      LinkedIn
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://x.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline underline-offset-4 text-white"
                    >
                      X (Twitter)
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:hello@lavent.com" className="hover:underline underline-offset-4 text-white">
                      hello@lavent.com
                    </Link>
                  </li>
                </ul>
              </div>

            </div>

            {/* Newsletter & Charity Section - Full width on mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h4 className="text-base font-bold uppercase tracking-wide text-white text-center sm:text-left">Newsletter</h4>
                <p className="mt-4 text-base/6 text-white text-center sm:text-left">Get strategies and case studies in your inbox.</p>
                <form className="mt-4 flex flex-col sm:flex-row items-center gap-3" action="#" method="post">
                  <input
                    type="email"
                    required
                    aria-label="Email address"
                    placeholder="you@company.com"
                    className="h-12 w-full rounded-full bg-white px-5 text-[#19653F] placeholder:text-[#19653F]/60 shadow-inner focus:outline-none text-base"
                  />
                  <button
                    type="submit"
                    className="rounded-full bg-white px-6 py-3 text-base font-semibold text-[#19653F] shadow hover:bg-white/90 w-full sm:w-auto"
                  >
                    Join
                  </button>
                </form>
                <p className="mt-3 text-sm text-white text-center sm:text-left">No spam. Unsubscribe anytime.</p>
              </div>
              
              <div className="text-center sm:text-left">
                <h4 className="text-base font-bold uppercase tracking-wide text-white">Charity</h4>
                <p className="mt-4 text-sm text-white">10% goes to charity.</p>
                <Link href="/charity" className="mt-4 inline-block">
                  <GlossyPill as="div" className="cursor-pointer text-sm font-semibold">
                    Learn More
                  </GlossyPill>
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-white/15 px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 text-center text-xs sm:text-sm text-white/85">
            © {new Date().getFullYear()} Lavent Marketing. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
