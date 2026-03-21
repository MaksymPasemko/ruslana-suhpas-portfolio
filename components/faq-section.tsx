"use client"

import { useState } from "react"

const faqs = [
  {
    question: "Права використання",
    answer:
      "Усі передані зображення супроводжуються чітко визначеними умовами комерційного використання для маркетингових кампаній, електронної комерції та рекламних матеріалів. Умови ліцензування узгоджуються під час планування проєкту.",
  },
  {
    question: "Термін виконання",
    answer:
      "Тривалість виконання залежить від масштабу проєкту, складності продукту та кількості фінальних фотографій. Більшість стандартних зйомок завершуються протягом кількох робочих днів після проведення фотосесії.",
  },
  {
    question: "Масштаб виробництва",
    answer:
      "Проєкти можуть варіюватися від одиничних предметних зйомок до більших кампаній, що включають декілька продуктів та різні творчі концепції.",
  },
  {
    question: "Ретуш",
    answer:
      "Ретуш входить до фінального етапу виробництва та гарантує, що кожне зображення відповідає стандартам якості, зберігаючи природний вигляд продукту.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 lg:py-36 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column */}
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4 font-sans">FAQ</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-8 text-balance">
              Питання та відповіді
            </h2>
            <div className="w-12 h-px bg-gold mb-8" />
            <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
              Якщо у вас є інші запитання — надішліть повідомлення, і я відповім особисто.
            </p>
          </div>

          {/* Accordion */}
          <div className="flex flex-col divide-y divide-border">
            {faqs.map((faq, index) => (
              <div key={index}>
                <button
                  className="w-full flex items-center justify-between py-6 text-left group"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                >
                  <span className="font-serif text-lg font-light text-foreground group-hover:text-gold transition-colors duration-300">
                    {faq.question}
                  </span>
                  <span
                    className={`shrink-0 ml-4 w-5 h-5 border border-border flex items-center justify-center text-muted-foreground transition-all duration-300 ${
                      openIndex === index ? "rotate-45 border-gold text-gold" : ""
                    }`}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <line x1="5" y1="0" x2="5" y2="10" stroke="currentColor" strokeWidth="1" />
                      <line x1="0" y1="5" x2="10" y2="5" stroke="currentColor" strokeWidth="1" />
                    </svg>
                  </span>
                </button>
                {openIndex === index && (
                  <div className="pb-6">
                    <p className="text-muted-foreground leading-relaxed text-sm">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
