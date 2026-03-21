export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          {/* Brand */}
          <div className="flex flex-col leading-none">
            <span className="font-serif text-lg font-light tracking-widest text-foreground uppercase">
              Руслана Сухомлин
            </span>
            <span className="font-serif text-[10px] tracking-[0.35em] text-gold uppercase mt-1">
              Предметна фотографія
            </span>
          </div>

          {/* Nav links — 2 columns on mobile */}
          <nav aria-label="Footer navigation">
            <ul className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-6 gap-y-3 sm:gap-6">
              {[
                { label: "Послуги", href: "#services" },
                { label: "Про мене", href: "#about" },
                { label: "Портфоліо", href: "#portfolio" },
                { label: "Процес", href: "#workflow" },
                { label: "Контакт", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-gold transition-colors duration-300 touch-manipulation"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground tracking-wide">
            &copy; {year} Руслана Сухомлин
          </p>
        </div>
      </div>
    </footer>
  )
}
