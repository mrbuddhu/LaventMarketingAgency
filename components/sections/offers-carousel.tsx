import Image from "next/image"

const BANNER_W = 2560
const BANNER_H = 700
const OFFER_BANNER = "/images/offers/IMG_5012.PNG"
const OFFER_VIDEO = "/videos/LaventCampaign.MP4"

export default function OffersCarousel() {
  return (
    <section aria-label="Offers" className="w-full">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8 py-8 md:py-10">
        <div className="mx-auto mb-8 max-w-4xl md:mb-10">
          <div className="group overflow-hidden rounded-2xl ring-1 ring-foreground/10 shadow-lg transition hover:ring-foreground/20 hover:shadow-xl">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
              aria-label="Lavent campaign highlight"
            >
              <source src={OFFER_VIDEO} type="video/mp4" />
            </video>
          </div>
        </div>

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
