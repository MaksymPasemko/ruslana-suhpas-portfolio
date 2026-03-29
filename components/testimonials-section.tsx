const testimonials = [
  {
    quote:
      "Дуже цікаво отримати «інше» бачення своєї праці. Дякую за такий творчий підхід до роботи, цікавий формат і такі апетитні світлини. З свого боку бажаю росту і ще сильніше закохуватись у процес, ти величезний молодець. Дякую за бачення!", author: "Клієнтка бренду",
    brand: "pastila.fruit.time",
  },
  {
    quote:
      "Стабільна якість фотографій, уважна робота зі світлом та деталями продукту. Зручна комунікація під час підготовки і проведення зйомок.",
    author: "Бренд-менеджер",
    brand: "e-commerce бренд",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-36 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="mb-10 sm:mb-16 lg:mb-20">
          <p className="text-[10px] sm:text-xs tracking-[0.4em] uppercase text-gold mb-3 sm:mb-4 font-sans">Відгуки</p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-foreground text-balance">
            Що кажуть клієнти
          </h2>
        </div>

        {/* Testimonials — stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-background p-6 sm:p-8 lg:p-12">
              {/* Quote mark */}
              <div className="font-serif text-5xl sm:text-7xl text-gold/20 leading-none mb-4 sm:mb-6 select-none">&ldquo;</div>
              <blockquote className="font-serif text-base sm:text-lg lg:text-xl font-light text-foreground leading-relaxed mb-6 sm:mb-8">
                {t.quote}
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-gold flex-shrink-0" />
                <div>
                  <p className="text-sm text-foreground">{t.author}</p>
                  <p className="text-xs text-gold tracking-wider uppercase">{t.brand}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements banner */}
        <div className="mt-8 sm:mt-16 border border-border p-6 sm:p-8 lg:p-12 bg-surface">
          <p className="text-[10px] sm:text-xs tracking-[0.4em] uppercase text-gold mb-4 sm:mb-6 font-sans">Досягнення</p>
          <p className="text-muted-foreground leading-relaxed text-sm lg:text-base max-w-3xl">
          Працюю з брендами та виробниками: забезпечую стабільний результат, чітку роботу зі світлом і послідовний контент у серіях.
          </p>
        </div>
      </div>
    </section>
  )
}
