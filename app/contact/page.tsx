import { GlossyPill } from "@/components/brand/glossy-pill"

export default function ContactPage() {
  return (
    <main>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16">
        <div className="mb-16 text-center">
          <GlossyPill className="mb-4 text-sm font-semibold uppercase tracking-wide">
            Free Strategy Session
          </GlossyPill>
          <h1 className="text-pretty font-sans text-5xl font-black leading-tight tracking-[-0.02em] text-foreground md:text-7xl lg:text-8xl">Contact</h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-balance text-muted-foreground">
            Let's map your path to impact.
          </p>
        </div>

        <div className="flex justify-center">
          <form
            className="grid gap-6 max-w-xl w-full"
            action="mailto:hello@lavent.example"
            method="post"
            encType="text/plain"
          >
            <label className="grid gap-2">
              <span className="text-base font-medium">Name</span>
              <input className="h-12 rounded-lg border px-4 bg-background text-base" name="name" required />
            </label>
            <label className="grid gap-2">
              <span className="text-base font-medium">Email</span>
              <input type="email" className="h-12 rounded-lg border px-4 bg-background text-base" name="email" required />
            </label>
            <label className="grid gap-2">
              <span className="text-base font-medium">Message</span>
              <textarea className="min-h-[120px] rounded-lg border px-4 py-3 bg-background text-base" name="message" />
            </label>
            <GlossyPill as="button" type="submit" className="text-base font-semibold">
              Send Message
            </GlossyPill>
          </form>
        </div>
      </div>
    </main>
  )
}
