const steps = [
  {
    number: "01",
    title: "Обговорення проєкту",
    description:
      "Співпраця починається з обговорення бренду, характеристик продукту, каналів використання фотографій та маркетингових цілей майбутніх зображень.",
  },
  {
    number: "02",
    title: "Розробка концепції",
    description:
      "Формується візуальна концепція зйомки, яка визначає світлову схему, композиційний підхід, кольорову палітру та технічні параметри майбутньої роботи.",
  },
  {
    number: "03",
    title: "Зйомка",
    description:
      "Фотографування відбувається у контрольованому середовищі, де можна точно керувати освітленням, фоном та композиційними елементами.",
  },
  {
    number: "04",
    title: "Постобробка",
    description:
      "Відібрані фотографії проходять ретуш, під час якої коригується колір, усуваються технічні недоліки та доводиться фінальна якість зображення.",
  },
  {
    number: "05",
    title: "Передача матеріалів",
    description:
      "Фінальні зображення передаються у високій роздільній здатності та форматах, оптимізованих для вебсайтів, рекламних кампаній та цифрових платформ.",
  },
]

export function WorkflowSection() {
  return (
    <section id="workflow" className="py-24 lg:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-xl mb-16 lg:mb-24">
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4 font-sans">
            Робочий процес
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-foreground text-balance">
            Як ми працюємо разом
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-0">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative grid grid-cols-1 md:grid-cols-[120px_1fr] gap-6 md:gap-12 group"
              >
                {/* Number column */}
                <div className="flex items-start gap-4 md:flex-col md:items-center pt-8 md:pt-10">
                  {/* Dot on line */}
                  <div className="hidden md:flex w-3 h-3 rounded-full border-2 border-gold bg-background relative z-10 mt-1 shrink-0" />
                  <span className="font-serif text-4xl font-light text-border group-hover:text-gold/30 transition-colors duration-500 leading-none">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div
                  className={`pb-12 md:pb-16 pl-0 md:pl-0 border-b border-border/50 ${
                    index === steps.length - 1 ? "border-b-0" : ""
                  }`}
                >
                  <div className="pt-8 md:pt-10">
                    <h3 className="font-serif text-xl lg:text-2xl font-light text-foreground mb-4 group-hover:text-gold transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm lg:text-base max-w-2xl">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
