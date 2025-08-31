import { GlossyPill } from "@/components/brand/glossy-pill"
import { User } from "lucide-react"

const founders = [
  { name: "Khushan Rathor" },
  { name: "Pratyush Bhansali" },
  { name: "Priyanshu Kar" },
  { name: "Siddh Sanghvi" },
]

export default function AboutPage() {
  return (
    <main>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16">
        <div className="mb-16 text-center">
          <GlossyPill className="mb-4 text-sm font-semibold uppercase tracking-wide">
            Work With Us
          </GlossyPill>
          <h1 className="text-pretty font-sans text-5xl font-black leading-tight tracking-[-0.02em] gradient-heading md:text-7xl lg:text-8xl">About Lavent</h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl text-balance text-muted-foreground">
            Digital Marketing Agency Lavent specialises in growing brand presence across social platforms, blending strategic creativity with data-driven execution. Performs several tasks such as creating of static, dynamic, meta ads for your specific brand which results to boost in engagement and eventually boost in sales. Prior to that also provides passive services such as email-whatsapp marketing and professional studio photo-video shoots for products of yours.
          </p>
        </div>

        <div className="space-y-16">
          <section>
                         <h2 className="text-3xl font-black gradient-heading mb-4">Who we create an impact for?</h2>
            <p className="text-lg text-muted-foreground">
              We create an impact for ambitious brands that want to stay ahead of the curve. The ones who partner with us don't just grow, they set the pace of the market, while others play catch-up. The question isn't whether growth will happen, but whether your brand will lead it.
            </p>
          </section>

          <section>
                         <h2 className="text-3xl font-black gradient-heading mb-4">The Mission.</h2>
            <ul className="space-y-3 text-lg text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✦</span>
                <span>To shape brands that don't just grow, but define their industry.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✦</span>
                <span>To be the force that turns ambitious businesses into market leaders.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✦</span>
                <span>To redefine how marketing shapes businesses — transforming not just their growth, but the very structure of how they connect, compete, and lead.</span>
              </li>
            </ul>
          </section>

          <section>
                         <h2 className="text-3xl font-black gradient-heading mb-6">Who's Behind This?</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {founders.map((f) => (
                <article
                  key={f.name}
                  className="group overflow-hidden rounded-xl border border-border/60 bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/40 shadow-lg hover:shadow-xl transition"
                >
                  <div className="relative aspect-[3/4] flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
                    <User className="h-16 w-16 text-primary" />
                    {/* subtle glossy sweep */}
                    <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-b from-white/10 via-transparent to-black/15 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{f.name}</h3>
                  </div>
                </article>
              ))}
            </div>
            <p className="sr-only">
              Founders grid shows portraits of Khushan Rathor, Pratyush Bhansali, Priyanshu Kar, and Siddh Sanghvi.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
