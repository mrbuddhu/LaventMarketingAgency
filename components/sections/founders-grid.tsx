"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

export type Founder = {
  name: string
  role?: string
  imgSrc: string
  alt?: string
}

const defaultFounders: Founder[] = [
  {
    name: "Khushan Rathor",
    role: "Co-founder",
    imgSrc: "/portrait-photo-of-khushan-rathor-studio-lighting.png",
    alt: "Portrait of Khushan Rathor",
  },
  {
    name: "Pratyush Bhansali",
    role: "Co-founder",
    imgSrc: "/portrait-photo-of-pratyush-bhansali-studio-lightin.png",
    alt: "Portrait of Pratyush Bhansali",
  },
  {
    name: "Priyanshu Kar",
    role: "Co-founder",
    imgSrc: "/placeholder-tzlk6.png",
    alt: "Portrait of Priyanshu Kar",
  },
  {
    name: "Siddh Sanghvi",
    role: "Co-founder",
    imgSrc: "/placeholder-frs5x.png",
    alt: "Portrait of Siddh Sanghvi",
  },
]

export default function FoundersGrid({
  className,
  items,
}: {
  className?: string
  items?: Founder[]
}) {
  const data = items ?? defaultFounders
  return (
    <section className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)}>
      <header className="mb-6 md:mb-8">
                   <h2 className="text-balance text-3xl md:text-4xl font-black tracking-tight gradient-heading">Meet the Founders</h2>
        <p className="mt-2 text-muted-foreground leading-relaxed max-w-2xl">
          The team shaping brands that don’t just grow—but lead their category.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {data.map((f) => (
          <article
            key={f.name}
            className="group rounded-2xl overflow-hidden border border-border/60 bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/40"
          >
            <div className="aspect-[3/4] relative">
              <Image
                src={f.imgSrc || "/placeholder.svg?height=840&width=630&query=Founder%20portrait"}
                alt={f.alt || f.name}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover"
                priority={false}
              />
              {/* glossy sweep */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-4 md:p-5">
              <h3 className="text-lg font-semibold">{f.name}</h3>
              {f.role ? <p className="text-sm text-muted-foreground mt-1">{f.role}</p> : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
