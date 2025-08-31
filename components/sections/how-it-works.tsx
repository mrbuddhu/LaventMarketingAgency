"use client"

import { GlossyPill } from "@/components/brand/glossy-pill"
import { Zap, Clock, CheckCircle, ArrowRight } from "lucide-react"

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16">
        {/* Header */}
                <div className="mb-16 text-center">
                                            <h2 className="text-pretty font-sans text-5xl font-black leading-tight tracking-[-0.02em] text-foreground md:text-7xl lg:text-8xl">
               How It Works
             </h2>
           <p className="mx-auto mt-6 max-w-2xl text-xl text-balance text-muted-foreground">
             From concept to conversion in record time. Our streamlined process ensures your brand gets the impact it deserves.
           </p>
         </div>

        {/* Process Steps */}
        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {/* Step 1: Strategy & Planning */}
          <div className="rounded-2xl bg-white/85 backdrop-blur supports-[backdrop-filter]:backdrop-blur shadow-2xl ring-1 ring-foreground/10 p-5 hover:shadow-3xl transition-all duration-300">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10">
              <Zap className="h-5 w-5 text-primary" />
            </div>
            <h3 className="mb-2 text-lg font-bold text-foreground">Strategy & Planning</h3>
            <p className="text-sm text-muted-foreground mb-3">
              We dive deep into your brand, audience, and goals. Choose from ongoing partnerships or one-off high-impact projects tailored to your needs.
            </p>
            <div className="space-y-1 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-3 w-3 text-primary" />
                <span>Brand analysis & positioning</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-3 w-3 text-primary" />
                <span>Audience research & targeting</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-3 w-3 text-primary" />
                <span>Performance strategy</span>
              </div>
            </div>
          </div>

          {/* Step 2: Lightning Execution */}
          <div className="rounded-2xl bg-white/85 backdrop-blur supports-[backdrop-filter]:backdrop-blur shadow-2xl ring-1 ring-foreground/10 p-5 hover:shadow-3xl transition-all duration-300">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10">
              <div className="relative">
                <Clock className="h-5 w-5 text-primary" />
                <div className="absolute -right-1 -top-1 flex h-2 w-2 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                  48
                </div>
              </div>
            </div>
            <h3 className="mb-2 text-lg font-bold text-foreground">Lightning Execution</h3>
            <p className="text-sm text-muted-foreground mb-3">
              We move at lightning speed. Get drafts, revisions, or final assets within 48 hours. No waiting, just results.
            </p>
            <div className="space-y-1 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-3 w-3 text-primary" />
                <span>48-hour turnaround</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-3 w-3 text-primary" />
                <span>Multiple revision rounds</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-3 w-3 text-primary" />
                <span>Real-time collaboration</span>
              </div>
            </div>
          </div>

          {/* Step 3: Launch & Scale */}
          <div className="rounded-2xl bg-white/85 backdrop-blur supports-[backdrop-filter]:backdrop-blur shadow-2xl ring-1 ring-foreground/10 p-5 hover:shadow-3xl transition-all duration-300">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10">
              <ArrowRight className="h-5 w-5 text-primary" />
            </div>
            <h3 className="mb-2 text-lg font-bold text-foreground">Launch & Scale</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Launch with confidence. Approve and move forward, or stack tasks for continuous growth. Your success is our priority.
            </p>
            <div className="space-y-1 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-3 w-3 text-primary" />
                <span>Performance tracking</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-3 w-3 text-primary" />
                <span>Optimization & scaling</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-3 w-3 text-primary" />
                <span>Ongoing support</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <GlossyPill as="div" className="mx-auto inline-flex cursor-pointer text-sm font-semibold">
            Book Your Free Strategy Session
          </GlossyPill>
        </div>
      </div>
    </section>
  )
}
