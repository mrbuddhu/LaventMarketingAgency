import { GlossyPill } from "@/components/brand/glossy-pill"
import ServicesFlip from "@/components/sections/services-flip"

export default function ServicesPage() {
  return (
    <main>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16">
        <div className="mb-16 text-center">
          <GlossyPill className="mb-4 text-sm font-semibold uppercase tracking-wide">
            Start Your Project
          </GlossyPill>
          <h1 className="text-pretty font-sans text-3xl font-black leading-tight tracking-[-0.02em] gradient-heading sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Services that turn ideas into impact</h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-balance text-muted-foreground">
            From attention to conversion to retention—built as one system.
          </p>
        </div>
      </div>
      <ServicesFlip />
    </main>
  )
}
