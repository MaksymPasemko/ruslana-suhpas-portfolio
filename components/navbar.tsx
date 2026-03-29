"use client"

import { useState, useEffect } from "react"

const navLinks = [
  { label: "Послуги", href: "#services"},
  { label: "Про мене", href: "#about" },
  { label: "Портфоліо", href: "#portfolio" },
  { label: "Процес", href: "#workflow" },
  { label: "Контакт", href: "#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToSection = (href: string) => {
    const sectionId = href.replace("#", "")
    setMenuOpen(false)

    requestAnimationFrame(() => {
      const section = document.getElementById(sectionId)
      if (!section) return
      section.scrollIntoView({ behavior: "smooth", block: "start" })
      window.history.replaceState(null, "", `#${sectionId}`)
    })
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${
        menuOpen
          ? "bg-black border-b border-border"
          : scrolled
            ? "bg-background/98 backdrop-blur-sm border-b border-border"
            : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 flex items-center justify-between h-14 sm:h-16 lg:h-20">
        {/* Logo */}
        <a
          href="#hero"
          className="flex flex-col leading-none group"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection("#hero")
          }}
        >
          <span className="font-serif text-lg sm:text-xl font-light tracking-widest text-foreground uppercase">
            Руслана
          </span>
          <span className="font-serif text-[10px] sm:text-xs tracking-[0.4em] text-gold uppercase">
            Сухомлин
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-gold transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(link.href)
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger — larger touch target */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-3 -mr-1 touch-manipulation"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Закрити меню" : "Відкрити меню"}
          aria-expanded={menuOpen}
        >
          <span className={`block w-6 h-px bg-foreground transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-6 h-px bg-foreground transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block w-6 h-px bg-foreground transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 top-14 sm:top-16 bg-black/100 z-40 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col px-5 pt-4 pb-6 min-h-[calc(100svh-3.5rem)] sm:min-h-[calc(100svh-4rem)]">
          <nav className="flex-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(link.href)
                }}
                className="flex items-center justify-between py-5 border-b border-border/50 group touch-manipulation"
              >
                <span className="font-serif text-2xl font-light text-foreground group-hover:text-gold transition-colors duration-300">
                  {link.label}
                </span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </nav>

          {/* Bottom CTA */}
          <div className="pt-5 mt-auto">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Готові розпочати?</p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("#contact")
              }}
              className="flex items-center justify-center w-full bg-gold text-primary-foreground text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-gold/90 transition-colors duration-300 font-sans touch-manipulation"
            >
              Розпочати проєкт
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
