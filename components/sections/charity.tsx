"use client"

import Image from "next/image"
import { GlossyPill } from "@/components/brand/glossy-pill"
import { Heart, Users, Globe, Target } from "lucide-react"

export default function CharityPage() {
         const charityInfo = [
         {
           icon: Heart,
           title: "10% of Every Project",
           description: "We donate 10% of every project's revenue to carefully selected charities that make a real impact.",
           image: "/images/charity/IMG_3459.png"
         },
         {
           icon: Users,
           title: "Community Impact",
           description: "Your success directly contributes to positive change in communities around the world.",
           image: "/images/charity/IMG_3466.png"
         },
         {
           icon: Globe,
           title: "Global Reach",
           description: "Supporting causes from local community development to global environmental initiatives.",
           image: "/images/charity/IMG_3468.png"
         },
         {
           icon: Target,
           title: "Transparent Giving",
           description: "We provide detailed reports on how your contributions are making a difference.",
           image: "/images/charity/IMG_3470.png"
         }
       ]

  return (
    <main>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16">
        <div className="mb-16 text-center">
          <GlossyPill className="mb-4 text-sm font-semibold uppercase tracking-wide">
            Giving Back
          </GlossyPill>
          <h1 className="text-pretty font-sans text-5xl font-black leading-tight tracking-[-0.02em] gradient-heading md:text-7xl lg:text-8xl">
            Our Charity Initiative
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl text-balance text-muted-foreground">
            Every project we complete contributes to positive change. 10% of every project's revenue goes directly to carefully selected charities making real impact in communities worldwide.
          </p>
        </div>

                       {/* Charity Info Grid */}
               <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto mb-16">
                 {charityInfo.map((item, index) => {
                   const IconComponent = item.icon
                   return (
                     <div key={index} className="rounded-2xl bg-white/85 backdrop-blur supports-[backdrop-filter]:backdrop-blur shadow-2xl ring-1 ring-foreground/10 overflow-hidden hover:shadow-3xl transition-all duration-300">
                                               <div className="relative h-64 w-full overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-contain"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                        </div>
                       <div className="p-6">
                         <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10">
                           <IconComponent className="h-6 w-6 text-primary" />
                         </div>
                         <h3 className="mb-3 text-xl font-bold text-foreground">{item.title}</h3>
                         <p className="text-base text-muted-foreground leading-relaxed">
                           {item.description}
                         </p>
                       </div>
                     </div>
                   )
                 })}
               </div>

        {/* Impact Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-foreground mb-6">Our Impact So Far</h2>
          <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-black text-primary mb-2">$50K+</div>
              <p className="text-lg text-muted-foreground">Donated to Charities</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-primary mb-2">25+</div>
              <p className="text-lg text-muted-foreground">Charities Supported</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-primary mb-2">1000+</div>
              <p className="text-lg text-muted-foreground">Lives Impacted</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <GlossyPill as="div" className="mx-auto inline-flex cursor-pointer text-base font-semibold">
            Start Your Project & Make an Impact
          </GlossyPill>
        </div>
      </div>
    </main>
  )
}
