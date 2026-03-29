import Image from "next/image"

const services = [
  {
    number: "01",
    title: "Комерційна предметна фотографія",
    description:
      "Студійні фотографії продуктів для каталогів електронної комерції, рекламних кампаній, маркетингових матеріалів та вебсайтів брендів. Включає розробку світлової схеми, побудову композиції та ретельну комерційну обробку.",
    tags: ["e-commerce", "каталог", "реклама"],
    image: "/images/service-commercial.jpg",
  },
  {
    number: "02",
    title: "Макрофотографія деталей та текстур",
    description:
      "Детальний показ матеріалів, фактури та конструкційних особливостей продукту. Особливо ефективно для косметики, напоїв, харчових продуктів та товарів преміального сегменту.",
    tags: ["косметика", "деталі", "преміум"],
    image: "/images/service-macro.jpg",
  },
  {
    number: "03",
    title: "Креативні експериментальні концепції",
    description:
      "Складні світлові схеми, кольорові ефекти, довгі витримки та фізичні елементи, включаючи полум'я або атмосферні деталі. Виразні зображення для рекламних кампаній та соціальних мереж.",
    tags: ["арт-фото", "атмосфера", "унікально"],
    image: "/images/service-creative.jpg",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-24 lg:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-16 lg:mb-24">
          <div>
            <p className="text-[10px] sm:text-xs tracking-[0.4em] uppercase text-gold mb-3 sm:mb-4 font-sans">
              Послуги
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-foreground text-balance">
              Зйомка для соціальних мереж
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed max-w-sm text-sm">
            Кожен проєкт адаптується під потреби бренду — від одиничної зйомки до масштабної кампанії.
          </p>
        </div>

        {/* Services — horizontal scroll on mobile, grid on desktop */}
        <div className="overflow-x-auto sm:overflow-visible">
          <div className="flex sm:grid sm:grid-cols-3 gap-px bg-border min-w-[600px] sm:min-w-0">
            {services.map((service) => (
              <article
                key={service.number}
                className="bg-background group hover:bg-surface transition-colors duration-500 overflow-hidden flex-shrink-0 w-[80vw] sm:w-auto"
              >
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden bg-black">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-background/30 group-hover:bg-background/10 transition-colors duration-500" />
                  <span className="absolute top-4 left-4 font-serif text-6xl font-light text-foreground/10 leading-none select-none">
                    {service.number}
                  </span>
                </div>

                {/* Text */}
                <div className="p-5 sm:p-8 lg:p-10">
                  <h3 className="font-serif text-lg sm:text-xl lg:text-2xl font-light text-foreground mb-3 sm:mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm mb-4 sm:mb-6">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] sm:text-xs tracking-wider uppercase border border-border text-muted-foreground px-2.5 sm:px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
       

        {/* Why visual content matters */}
        <div className="mt-16 sm:mt-24 lg:mt-36 flex justify-start">
          <div className="max-w-3xl">
            <p className="text-[10px] sm:text-xs tracking-[0.4em] uppercase text-gold mb-3 sm:mb-4 font-sans">
              Стратегічна цінність
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-foreground mb-6 sm:mb-8 text-balance">
              Чому якісний візуальний контент має стратегічне значення
            </h2>
            <div className="w-10 sm:w-12 h-px bg-gold mb-6 sm:mb-8" />
            <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 text-sm lg:text-base">
              Візуальний контент став одним з ключових інструментів сучасного цифрового маркетингу. Компанії, що інвестують у професійні фотографії продуктів, отримують вищі показники взаємодії з аудиторією та кращу ефективність рекламних кампаній.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
              Системний підхід до створення візуальних матеріалів дозволяє маркетинговим командам підтримувати впізнавану стилістику бренду та будувати стабільний контентний потік для довгострокового розвитку.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
