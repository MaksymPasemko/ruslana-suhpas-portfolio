import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex items-end sm:items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Студійна предметна фотографія"
          fill
          priority
          className="object-contain object-center"
        />
        {/* Dark overlay — stronger on mobile for readability */}
        <div className="absolute inset-0 bg-background/55 sm:bg-background/70" />
        {/* Gradient — full on mobile, left-only on desktop */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-background/20 sm:bg-gradient-to-r sm:from-background/90 sm:via-background/50 sm:to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 pt-24 pb-10 sm:pt-28 sm:pb-20 lg:pt-40 lg:pb-32 w-full">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <p className="text-[10px] sm:text-xs tracking-[0.35em] uppercase text-gold mb-4 sm:mb-6 font-sans">
            Предметна фотографія · e-commerce · бренди
          </p>

          {/* H1 */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-foreground leading-tight text-balance mb-6 sm:mb-8">
            Професійна предметна фотографія для брендів та e-commerce
          </h1>

          {/* Divider line */}
          <div className="w-12 sm:w-16 h-px bg-gold mb-6 sm:mb-8" />

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base lg:text-lg mb-8 sm:mb-10 max-w-xl">
            Я створюю студійні комерційні зображення для брендів та e-commerce компаній, яким потрібна точна візуальна подача продукту, стабільна естетична мова та надійний виробничий процес.
          </p>

          {/* CTAs — stack on mobile */}
          <div className="flex flex-col xs:flex-row gap-3 sm:gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-gold text-primary-foreground text-xs tracking-[0.2em] uppercase px-6 sm:px-8 py-4 hover:bg-gold/90 transition-colors duration-300 font-sans touch-manipulation min-h-[52px]"
            >
              Розпочати проєкт
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center border border-foreground/30 text-foreground text-xs tracking-[0.2em] uppercase px-6 sm:px-8 py-4 hover:border-gold hover:text-gold transition-all duration-300 font-sans touch-manipulation min-h-[52px]"
            >
              Переглянути послуги
            </a>
          </div>

          {/* Stock badges — scrollable row on mobile */}
          <div className="mt-8 sm:mt-12">
            <span className="block text-xs text-muted-foreground tracking-wider uppercase mb-3">Роботи на стоках:</span>
            <div className="flex items-center gap-2 flex-wrap">
              {["Shutterstock", "Adobe Stock", "Getty Images", "Depositphotos"].map((stock) => (
                <span
                  key={stock}
                  className="text-[10px] sm:text-xs border border-border px-2.5 sm:px-3 py-1 text-muted-foreground tracking-wide whitespace-nowrap"
                >
                  {stock}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator — hidden on very small screens */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 hidden xs:flex flex-col items-center gap-2 z-10">
        <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-muted-foreground">Scroll</span>
        <div className="w-px h-8 sm:h-10 bg-gold/40 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gold animate-bounce" />
        </div>
      </div>
    </section>
  )
}
