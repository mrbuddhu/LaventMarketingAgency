import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Lavent Marketing",
  description: "Elevate Your Brand With Impact.",
  generator: 'v0.app',
  icons: {
    icon: '/images/logo-main.png',
    shortcut: '/images/logo-main.png',
    apple: '/images/logo-main.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} antialiased`}>
      <body className="font-sans bg-background text-foreground">
        <SiteHeader />
        <div className="min-h-[60vh]">{children}</div>
        <SiteFooter />
      </body>
    </html>
  )
}
