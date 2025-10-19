import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function StorePage() {
  return (
    <main className="py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 md:mb-12 text-center">
          <h1 className="text-pretty font-sans text-3xl font-black leading-tight tracking-[-0.02em] gradient-heading sm:text-4xl md:text-5xl lg:text-6xl">
            Store
          </h1>
          <p className="mt-3 text-lg text-foreground/80">Digital products by Lavent. More coming soon.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 max-w-4xl mx-auto">
          <div className="group overflow-hidden rounded-xl ring-1 ring-foreground/10 hover:ring-foreground/20 transition shadow-lg hover:shadow-xl">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#19653F]/5">
              <Image
                src="/LaventEbook.PNG"
                alt="The Marketing Bible product cover"
                fill
                className="object-contain p-3 transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(max-width:768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="p-3 md:p-4">
              <h3 className="text-lg md:text-xl font-semibold text-pretty">The Marketing Bible</h3>
              <p className="mt-1 text-base text-foreground/80">₹329 • In stock</p>
              <div className="mt-4">
                <Link href="https://lavent.gumroad.com/" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full">View on Gumroad</Button>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="group overflow-hidden rounded-xl ring-1 ring-foreground/10 hover:ring-foreground/20 transition shadow-lg hover:shadow-xl">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#19653F]/5 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-foreground/10 flex items-center justify-center">
                  <span className="text-2xl">📦</span>
                </div>
                <p className="text-sm text-foreground/60">More products</p>
                <p className="text-xs text-foreground/40">coming soon</p>
              </div>
            </div>
            <div className="p-3 md:p-4">
              <h3 className="text-lg md:text-xl font-semibold text-pretty">Coming Soon</h3>
              <p className="mt-1 text-base text-foreground/80">New digital products in development</p>
              <div className="mt-4">
                <Button className="w-full" disabled>
                  Coming Soon
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link href="https://lavent.gumroad.com/" target="_blank" rel="noopener noreferrer" className="inline-block">
            <Button variant="outline">Browse all products on Gumroad</Button>
          </Link>
        </div>
      </div>
    </main>
  )
}


