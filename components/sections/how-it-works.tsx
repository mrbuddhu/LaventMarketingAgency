"use client"

import { GlossyPill } from "@/components/brand/glossy-pill"
import { Zap, Clock, CheckCircle, ArrowRight } from "lucide-react"

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16">
        {/* Header */}
                <div className="mb-16 text-center">
                                                                                         <h2 className="text-pretty font-sans text-3xl font-black leading-tight tracking-[-0.02em] gradient-heading sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                How It Works?
              </h2>
           <p className="mx-auto mt-6 max-w-2xl text-xl text-balance text-muted-foreground">
             From concept to conversion in record time. Our streamlined process ensures your brand gets the impact it deserves.
           </p>
         </div>

        {/* Process Steps */}
        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {/* Step 1: Strategy & Planning */}
          <div className="group rounded-2xl bg-primary shadow-2xl ring-1 ring-primary/20 p-5 hover:shadow-3xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 ease-out cursor-pointer">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
              <Zap className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-500" />
            </div>
                         <h3 className="mb-2 text-lg font-bold text-white">Strategy & Planning</h3>
            <p className="text-sm text-white/90 mb-3">
              We dive deep into your brand, audience, and goals. Choose from ongoing partnerships or one-off high-impact projects tailored to your needs.
            </p>
            <div className="space-y-1 text-xs text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-3 w-3 text-white" />
                <span>Brand analysis & positioning</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-3 w-3 text-white" />
                <span>Audience research & targeting</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-3 w-3 text-white" />
                <span>Performance strategy</span>
              </div>
            </div>
          </div>

          {/* Step 2: Lightning Execution */}
          <div className="group rounded-2xl bg-primary shadow-2xl ring-1 ring-primary/20 p-5 hover:shadow-3xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 ease-out cursor-pointer">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
              <div className="relative">
                <Clock className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute -right-1 -top-1 flex h-2 w-2 items-center justify-center rounded-full bg-white text-xs font-bold text-primary">
                  48
                </div>
              </div>
            </div>
                         <h3 className="mb-2 text-lg font-bold text-white">Lightning Execution</h3>
            <p className="text-sm text-white/90 mb-3">
              We move at lightning speed. Get drafts, revisions, or final assets within 48 hours. No waiting, just results.
            </p>
            <div className="space-y-1 text-xs text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-3 w-3 text-white" />
                <span>48-hour turnaround</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-3 w-3 text-primary" />
                <span>Multiple revision rounds</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-3 w-3 text-white" />
                <span>Real-time collaboration</span>
              </div>
            </div>
          </div>

          {/* Step 3: Launch & Scale */}
          <div className="group rounded-2xl bg-primary shadow-2xl ring-1 ring-primary/20 p-5 hover:shadow-3xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 ease-out cursor-pointer">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
              <ArrowRight className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-500" />
            </div>
                         <h3 className="mb-2 text-lg font-bold text-white">Launch & Scale</h3>
            <p className="text-sm text-white/90 mb-3">
              Launch with confidence. Approve and move forward, or stack tasks for continuous growth. Your success is our priority.
            </p>
            <div className="space-y-1 text-xs text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-3 w-3 text-white" />
                <span>Performance tracking</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-3 w-3 text-primary" />
                <span>Optimization & scaling</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-3 w-3 text-white" />
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
