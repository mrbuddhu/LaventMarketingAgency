import Image from "next/image"
import { CheckerBar } from "@/components/brand/checker-bar"

export function BrandComponents() {
  return (
    <section aria-labelledby="brand" className="bg-muted/30">
      <CheckerBar height={16} className="w-full" />
      <div className="mx-auto max-w-6xl px-6 py-10 md:py-14">
        <h2 id="brand" className="text-pretty font-sans text-2xl font-black tracking-tight md:text-3xl">
          Lavent Brand System
        </h2>

        {/* Color palette */}
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border bg-card p-4">
            <div className="h-14 w-full rounded-md" style={{ backgroundColor: "var(--color-primary)" }} />
            <p className="mt-3 text-sm text-muted-foreground">Primary • #19653F</p>
          </div>
          <div className="rounded-lg border bg-card p-4">
            <div className="h-14 w-full rounded-md" style={{ backgroundColor: "var(--color-accent)" }} />
            <p className="mt-3 text-sm text-muted-foreground">Accent • #05846F</p>
          </div>
          <div className="rounded-lg border bg-card p-4">
            <div className="h-14 w-full rounded-md" style={{ backgroundColor: "var(--color-background)" }} />
            <p className="mt-3 text-sm text-muted-foreground">Background • #FFFFFF</p>
          </div>
        </div>

        {/* Logos */}
        <div className="mt-10 grid items-center gap-6 md:grid-cols-2">
          <div className="rounded-xl border bg-card p-6">
            <Image
              src="/images/logo-main.png"
              alt="Lavent emblem logo"
              width={360}
              height={360}
              className="h-auto w-40 md:w-48"
            />
            <p className="mt-3 text-sm text-muted-foreground">Primary emblem with starburst and L monogram</p>
          </div>

          <div className="rounded-xl border bg-card p-6">
            <Image
              src="/images/logo-text.png"
              alt="Lavent wordmark"
              width={480}
              height={200}
              className="h-auto w-56 md:w-64"
            />
            <p className="mt-3 text-sm text-muted-foreground">Wordmark for horizontal contexts</p>
          </div>
        </div>

        {/* Slogans */}
        <div className="mt-10 rounded-xl border bg-card p-6">
          <p className="font-sans text-xl font-bold text-foreground">Elevate Your Brand With Impact.</p>
          <p className="mt-2 text-muted-foreground">Turning ideas into impact.</p>
        </div>
      </div>
      <CheckerBar height={16} className="w-full" />
    </section>
  )
}
