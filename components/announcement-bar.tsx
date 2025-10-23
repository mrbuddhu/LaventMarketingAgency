"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function AnnouncementBar() {
  return (
    <div className="bg-black text-white py-2 px-4 text-center text-sm font-medium overflow-hidden">
      <Link 
        href="https://lavent.gumroad.com/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 hover:gap-3 transition-all duration-200 hover:text-white/90 whitespace-nowrap animate-scroll"
      >
        <span>Get The Marketing Bible - Actionable playbooks to elevate your brand</span>
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  )
}
