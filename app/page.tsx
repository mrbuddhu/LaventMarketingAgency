import { Hero } from "@/components/hero"
import { Services } from "@/components/sections/services"
import { HowItWorks } from "@/components/sections/how-it-works"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { EbookVideos } from "@/components/sections/ebook-videos"
import HomeCaseStudiesSection from "@/components/sections/home-case-studies"
import OffersCarousel from "@/components/sections/offers-carousel"

export default function Page() {
  return (
    <main>
      <Hero />
      <Services />
      <HowItWorks />
      <OffersCarousel />
      <WhyChooseUs />
      <EbookVideos />
      <HomeCaseStudiesSection />
    </main>
  )
}
