import type React from "react"
import { cn } from "@/lib/utils"

type GlossyPillProps = {
  children: React.ReactNode
  className?: string
  as?: "div" | "button"
}

export function GlossyPill({ children, className, as = "div" }: GlossyPillProps) {
  const Comp = as as any
  return (
    <Comp
      className={cn(
        "glass-pill relative inline-flex items-center rounded-full px-6 py-2.5",
        "text-primary-foreground",
        "transition-all duration-300 ease-out hover:brightness-110 hover:scale-105 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
        className,
      )}
    >
      <span
        className="pointer-events-none absolute inset-x-6 top-0 h-1/2 rounded-full bg-white/10 blur-md"
        aria-hidden="true"
      />
      {children}
    </Comp>
  )
}
