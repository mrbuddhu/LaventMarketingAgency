import { GlossyPill } from "@/components/brand/glossy-pill"

export default function ContactPage() {
  return (
    <main>
      <div className="mx-auto max-w-7xl px-3 py-8 sm:px-4 sm:py-12 md:px-6 md:py-16 lg:px-8">
        <div className="mb-8 sm:mb-12 md:mb-16 text-center">
          <GlossyPill className="mb-4 text-sm font-semibold uppercase tracking-wide">
            Free Strategy Session
          </GlossyPill>
                     <h1 className="text-pretty font-sans text-3xl font-black leading-tight tracking-[-0.02em] gradient-heading sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Contact</h1>
          <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-balance text-muted-foreground">
            Let's map your path to impact.
          </p>
        </div>

        <div className="flex justify-center">
          <form
            className="grid gap-4 sm:gap-6 max-w-xl w-full px-4 sm:px-0"
            action="mailto:hello@lavent.com"
            method="post"
            encType="text/plain"
          >
            <label className="grid gap-2">
              <span className="text-sm sm:text-base font-medium">Name</span>
              <input 
                className="h-10 sm:h-12 rounded-lg border px-3 sm:px-4 bg-background text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" 
                name="name" 
                required 
                placeholder="Your name"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm sm:text-base font-medium">Email</span>
              <input 
                type="email" 
                className="h-10 sm:h-12 rounded-lg border px-3 sm:px-4 bg-background text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" 
                name="email" 
                required 
                placeholder="your@email.com"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm sm:text-base font-medium">Message</span>
              <textarea 
                className="min-h-[100px] sm:min-h-[120px] rounded-lg border px-3 sm:px-4 py-2 sm:py-3 bg-background text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none" 
                name="message" 
                placeholder="Tell us about your project..."
              />
            </label>
            <GlossyPill as="button" type="submit" className="text-sm sm:text-base font-semibold mt-2 sm:mt-4 w-fit mx-auto">
              Send Message
            </GlossyPill>
          </form>
        </div>
      </div>
    </main>
  )
}
