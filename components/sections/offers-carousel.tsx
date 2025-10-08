"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

import banner1 from "@/images/offers/IMG_5003.PNG"
import banner2 from "@/images/offers/IMG_5010.PNG"
import banner3 from "@/images/offers/IMG_5012.PNG"

const banners = [banner1, banner2, banner3]

export default function OffersCarousel() {
  return (
    <section aria-label="Offers" className="w-full">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8 py-8 md:py-10">
        <div className="relative offer-perspective">

          <Marquee>
            {banners.map((src, idx) => (
              <div key={`banner-a-${idx}`} className="mx-3 sm:mx-4 flex-none offer-card cursor-pointer">
                <Image
                  src={src}
                  alt={`Offer banner ${idx + 1}`}
                  className="h-36 sm:h-40 md:h-36 lg:h-40 w-auto rounded-2xl shadow-2xl object-contain offer-img"
                />
              </div>
            ))}
            {banners.map((src, idx) => (
              <div key={`banner-b-${idx}`} className="mx-3 sm:mx-4 flex-none offer-card cursor-pointer">
                <Image
                  src={src}
                  alt={`Offer banner duplicate ${idx + 1}`}
                  className="h-36 sm:h-40 md:h-36 lg:h-40 w-auto rounded-2xl shadow-2xl object-contain offer-img"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  )
}

function Marquee({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("relative w-full", className)}>
      <div
        className="flex w-max items-center gap-2 pr-[10%] animate-[scrollX_20s_linear_infinite] will-change-transform"
        style={{
          // Slight pull to ensure no gap appears
          transform: "translate3d(0,0,0)",
        }}
      >
        {children}
      </div>

      {/* Keyframes inlined to avoid external CSS dependency */}
      <style jsx>{`
        @keyframes scrollX {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .offer-perspective { perspective: 1200px; }
        .offer-card { 
          transform-style: preserve-3d; 
          transition: transform 500ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .offer-card:hover { 
          transform: translate3d(0, -8px, 0);
        }
        .offer-img {
          transition: transform 500ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 500ms ease;
          will-change: transform;
        }
        .offer-card:hover .offer-img {
          transform: translate3d(0, -4px, 24px) rotateX(2deg) scale(1.03);
          box-shadow: 0 40px 80px rgba(0,0,0,0.25), 0 12px 24px rgba(0,0,0,0.18);
        }
      `}</style>
    </div>
  )
}


