import Image from "next/image"

const BANNER_W = 2560
const BANNER_H = 700
const OFFER_BANNER = "/images/offers/IMG_5012.PNG"

export default function OffersCarousel() {
  return (
    <section aria-label="Offers" className="w-full">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8 py-8 md:py-10">
        <div className="flex justify-center">
          <Image
            src={OFFER_BANNER}
            alt="Offer banner"
            width={BANNER_W}
            height={BANNER_H}
            className="h-36 sm:h-40 md:h-36 lg:h-40 w-auto max-w-full rounded-2xl shadow-2xl object-contain"
          />
        </div>
      </div>
    </section>
  )
}
