"use client"

import { useState } from "react"

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitError(null)
    const form = e.currentTarget
    const data = {
      name: (form.querySelector("#name") as HTMLInputElement).value,
      email: (form.querySelector("#email") as HTMLInputElement).value,
      brand: (form.querySelector("#brand") as HTMLInputElement).value,
      message: (form.querySelector("#message") as HTMLTextAreaElement).value,
    }
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      const payload = await response.json().catch(() => null)
      setSubmitError(payload?.error ?? "Не вдалося надіслати повідомлення. Спробуйте ще раз.")
      return
    }

    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-36 bg-surface">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24">
          {/* Left */}
          <div>
            <p className="text-[10px] sm:text-xs tracking-[0.4em] uppercase text-gold mb-3 sm:mb-4 font-sans">
              Розпочати співпрацю
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-6 sm:mb-8 text-balance">
              Обговоримо ваш проєкт
            </h2>
            <div className="w-10 sm:w-12 h-px bg-gold mb-6 sm:mb-8" />
            <p className="text-muted-foreground leading-relaxed text-sm lg:text-base mb-8 sm:mb-10">
              Надішліть повідомлення з описом продукту, маркетингових задач та бажаного формату зйомки — і ви отримаєте індивідуальну пропозицію щодо реалізації проєкту.
            </p>

            {/* Social links — larger touch targets on mobile */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-10">
              {[
                {
                  label: "Instagram",
                  href: "https://instagram.com/ruslanasuhpas",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                    </svg>
                  ),
                },
                {
                  label: "LinkedIn",
                  href: "https://linkedin.com/in/ruslanasuhpas",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },
                {
                  label: "Facebook",
                  href: "https://facebook.com/ruslanasuhpas",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  ),
                },
                {
                  label: "Behance",
                  href: "https://behance.net/ruslanasuhpas",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 1.2.836 1.98 2.101 1.98.864 0 1.449-.405 1.655-1h3zm-5.118-4c-.079-1.08-.703-1.82-1.894-1.82-1.228 0-1.893.77-2.007 1.82h3.901zM7.48 10.926c.765 0 1.308-.377 1.308-1.15 0-.745-.53-1.103-1.308-1.103H4.813v2.253H7.48zm.217 3.842c.857 0 1.478-.437 1.478-1.308 0-.863-.647-1.25-1.478-1.25H4.813v2.558H7.697zM2 5h5.931c2.616 0 4.242 1.266 4.242 3.34 0 1.337-.678 2.248-1.722 2.73 1.397.407 2.22 1.484 2.22 3.015C12.671 16.81 11.012 18 8.42 18H2V5z" />
                    </svg>
                  ),
                },
                {
                  label: "Pinterest",
                  href: "https://pinterest.com/ruslanasuhpas",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                    </svg>
                  ),
                },
              ].map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 sm:w-10 sm:h-10 border border-border flex items-center justify-center text-muted-foreground hover:border-gold hover:text-gold transition-colors duration-300 touch-manipulation"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div className="flex flex-col items-start gap-4 py-8 sm:py-12">
                <div className="w-12 h-12 border border-gold flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-light text-foreground">Дякую!</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Ваше повідомлення отримано. Я зв&apos;яжуся з вами найближчим часом для обговорення деталей проєкту.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6" noValidate>
                {/* Name + Email — stacked on mobile, side by side on sm+ */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-muted-foreground font-sans" htmlFor="name">
                      Ім&apos;я *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Ваше ім'я"
                      className="bg-transparent border border-border px-4 py-3.5 sm:py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold transition-colors duration-300 min-h-[48px]"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-muted-foreground font-sans" htmlFor="email">
                      Email або месенджер *
                    </label>
                    <input
                      id="email"
                      type="text"
                      required
                      placeholder="email або @telegram"
                      className="bg-transparent border border-border px-4 py-3.5 sm:py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold transition-colors duration-300 min-h-[48px]"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-muted-foreground font-sans" htmlFor="brand">
                    Бренд / Компанія
                  </label>
                  <input
                    id="brand"
                    type="text"
                    placeholder="Назва вашого бренду"
                    className="bg-transparent border border-border px-4 py-3.5 sm:py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold transition-colors duration-300 min-h-[48px]"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-muted-foreground font-sans" htmlFor="message">
                    Опис проєкту *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Опишіть продукт, маркетингові задачі та бажаний формат зйомки..."
                    className="bg-transparent border border-border px-4 py-3.5 sm:py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold transition-colors duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold text-primary-foreground text-xs tracking-[0.2em] uppercase py-4 hover:bg-gold/90 active:bg-gold/80 transition-colors duration-300 font-sans touch-manipulation min-h-[52px]"
                >
                  Надіслати запит
                </button>
                {submitError && (
                  <p className="text-sm text-destructive">{submitError}</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
