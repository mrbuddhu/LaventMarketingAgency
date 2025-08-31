import { Hero } from "@/components/hero"
import { Services } from "@/components/sections/services"
import { HowItWorks } from "@/components/sections/how-it-works"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import HomeCaseStudiesSection from "@/components/sections/home-case-studies"

export default function Page() {
  return (
    <main>
      <Hero />
      <Services />
      <HowItWorks />
      <WhyChooseUs />
      <HomeCaseStudiesSection />
    </main>
  )
}
