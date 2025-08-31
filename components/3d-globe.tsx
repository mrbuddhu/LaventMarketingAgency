"use client"

import { useEffect, useRef } from 'react'

const services = [
  "Static Ads",
  "Dynamic Ads", 
  "Meta Ads",
  "Email Marketing",
  "WhatsApp Marketing",
  "SEO",
  "3D Mockups",
  "Content Creation"
]

export function Globe3D() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Create service tags with fixed positions around a circle
    services.forEach((service, index) => {
      const angle = (index / services.length) * 2 * Math.PI
      const radius = 120
      const x = Math.cos(angle) * radius
      const y = Math.sin(angle) * radius
      
      const tag = document.createElement('div')
      tag.className = `
        absolute px-4 py-2 rounded-full text-sm font-semibold text-white
        bg-gradient-to-r from-primary to-accent shadow-lg
        transform transition-all duration-1000 ease-out
        hover:scale-110 hover:shadow-xl cursor-pointer
        animate-pulse
      `
      tag.textContent = service
      tag.style.transform = `translate(${x}px, ${y}px)`
      
      container.appendChild(tag)
    })

    // Simple rotation animation
    let rotation = 0
    const animate = () => {
      rotation += 0.005
      
      const tags = container.querySelectorAll('div')
      tags.forEach((tag, index) => {
        const angle = (index / services.length) * 2 * Math.PI + rotation
        const radius = 120
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius
        
        tag.style.transform = `translate(${x}px, ${y}px)`
      })
      requestAnimationFrame(animate)
    }
    animate()

    return () => {
      container.innerHTML = ''
    }
  }, [])

  return (
    <div className="relative w-full h-[400px] flex items-center justify-center">
      {/* Globe container */}
      <div 
        ref={containerRef}
        className="relative w-[300px] h-[300px]"
      >
        {/* Center globe */}
        <div className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-br from-primary/30 to-accent/30 backdrop-blur-sm border-2 border-primary/50 animate-pulse shadow-2xl"></div>
        
        {/* Inner glow */}
        <div className="absolute inset-4 w-[calc(100%-32px)] h-[calc(100%-32px)] rounded-full bg-gradient-to-br from-primary/10 to-accent/10 animate-pulse"></div>
        
        {/* Service tags will be dynamically added here */}
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  )
}
