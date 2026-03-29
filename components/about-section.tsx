import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-36 bg-surface">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24 items-center">
          {/* Image — comes second on mobile for better storytelling flow */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] sm:aspect-[3/4] overflow-hidden">
              <Image
                src="/images/about-portrait.jpg"
                alt="Руслана Сухомлин — предметна фотографія"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative gold border offset — reduced on mobile */}
            <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-full h-full border border-gold/30 -z-10" />
          </div>

          {/* Text — comes first on mobile */}
          <div className="order-1 lg:order-2">
            <p className="text-[10px] sm:text-xs tracking-[0.4em] uppercase text-gold mb-3 sm:mb-4 font-sans">
              Про мене
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-6 sm:mb-8 text-balance">
              Руслана Сухомлин
            </h2>
            <div className="w-10 sm:w-12 h-px bg-gold mb-6 sm:mb-8" />

            <div className="space-y-4 sm:space-y-5 text-muted-foreground leading-relaxed text-sm lg:text-base">
              <p>
                Я займаюся предметною фотографією та працюю переважно з домашньої студії. Я створюю фотографії продуктів для брендів, інтернет-магазинів та компаній, яким потрібні візуальні та змістовні зображення товарів для реклами і сайтів.
              </p>
              <p>
                У своїй роботі я приділяю увагу світлу — воно допомагає показати форму продукту, його деталі та загальний настрій кадру. Перед кожною зйомкою я налаштовую напрямок світла, контраст та інші параметри, щоб продукт виглядав чітко та привабливо.
              </p>
              <p>
                Я також використовую макрооб&apos;єктиви та освітлювальне обладнання, що дозволяє детально показувати текстуру продукту та контролювати фінальний вигляд фотографій.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
