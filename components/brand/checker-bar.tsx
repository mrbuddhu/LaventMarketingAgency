import type React from "react"

type CheckerBarProps = {
  height?: number
  colorA?: string
  colorB?: string
  className?: string
  size?: number // size of each checker square in px
}

export function CheckerBar({
  height = 24,
  colorA = "var(--color-primary, #19653F)",
  colorB = "var(--color-accent-foreground, #FFFFFF)",
  className = "",
  size = 16,
}: CheckerBarProps) {
  const half = size / 2
  const style: React.CSSProperties = {
    height,
    backgroundImage: `
      linear-gradient(45deg, ${colorA} 25%, transparent 25%),
      linear-gradient(-45deg, ${colorA} 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, ${colorA} 75%),
      linear-gradient(-45deg, transparent 75%, ${colorA} 75%)
    `,
    backgroundSize: `${size}px ${size}px`,
    backgroundPosition: `0 0, 0 ${half}px, ${half}px -${half}px, -${half}px 0`,
    backgroundColor: colorB,
  }
  return <div className={className} style={style} aria-hidden="true" />
}
