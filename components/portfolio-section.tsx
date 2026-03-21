"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"

const photos = [
  { id: 1, src: "/images/portfolio/img2.jpg" },
  { id: 2, src: "/images/portfolio/img1.jpg" },
  { id: 3, src: "/images/portfolio/img3.jpg" },
  { id: 4, src: "/images/portfolio/img4.jpg" },
  { id: 5, src: "/images/portfolio/img6.jpg" },
  { id: 6, src: "/images/portfolio/img5.jpg" },
  { id: 7, src: "/images/portfolio/img7.jpg" },
  { id: 8, src: "/images/portfolio/img8.jpg" },
  { id: 9, src: "/images/portfolio/img17.jpg" },
  { id: 10, src: "/images/portfolio/img9.jpg" },
  { id: 11, src: "/images/portfolio/img10.jpg" },
  { id: 12, src: "/images/portfolio/img11.jpg" },
  { id: 13, src: "/images/portfolio/img12.jpg" },
  { id: 14, src: "/images/portfolio/img13.jpg" },
  { id: 15, src: "/images/portfolio/img16.jpg" },
  { id: 16, src: "/images/portfolio/img15.jpg" },
  { id: 17, src: "/images/portfolio/img14.jpg" },
]

export function PortfolioSection() {
  const [active, setActive] = useState<number | null>(null)
  const activePhoto = photos.find((p) => p.id === active)

  const goPrev = useCallback(() => {
    setActive((prev) => {
      const idx = photos.findIndex((p) => p.id === prev)
      return photos[(idx - 1 + photos.length) % photos.length].id
    })
  }, [])

  const goNext = useCallback(() => {
    setActive((prev) => {
      const idx = photos.findIndex((p) => p.id === prev)
      return photos[(idx + 1) % photos.length].id
    })
  }, [])

  // Keyboard navigation
  useEffect(() => {
    if (active === null) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev()
      if (e.key === "ArrowRight") goNext()
      if (e.key === "Escape") setActive(null)
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [active, goPrev, goNext])

  // Lock body scroll when lightbox open
  useEffect(() => {
    if (active !== null) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [active])

  return (
    <section id="portfolio" className="py-16 sm:py-24 lg:py-36 bg-background">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 mb-8 sm:mb-14">
        <div className="text-center w-full">
          <p className="text-[10px] sm:text-xs tracking-[0.4em] uppercase text-gold mb-3 sm:mb-4 font-sans">
            Вибрані роботи
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-foreground text-balance">
            Портфоліо
          </h2>
        </div>
      </div>

      {/* Grid — 2 cols on mobile, 3 on md+ */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-1 sm:gap-2 px-2 sm:px-4">
        {photos.map((photo) => (
          <button
            key={photo.id}
            onClick={() => setActive(photo.id)}
            className="relative aspect-[3/4] overflow-hidden group cursor-pointer touch-manipulation"
            aria-label={`Відкрити фото ${photo.id}`}
          >
            <Image
              src={photo.src}
              alt={`Portfolio ${photo.id}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors duration-300" />
            {/* Expand icon — larger on mobile */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 active:opacity-100 transition-opacity duration-300">
              <div className="w-10 h-10 sm:w-10 sm:h-10 border border-gold flex items-center justify-center bg-background/40 backdrop-blur-sm">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                </svg>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {active !== null && activePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/98 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 sm:w-10 sm:h-10 border border-border flex items-center justify-center hover:border-gold transition-colors duration-200 z-10 touch-manipulation bg-background/60 backdrop-blur-sm"
            onClick={() => setActive(null)}
            aria-label="Закрити"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-foreground">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Prev button */}
          <button
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-10 sm:h-10 border border-border flex items-center justify-center hover:border-gold transition-colors duration-200 z-10 touch-manipulation bg-background/60 backdrop-blur-sm"
            onClick={(e) => { e.stopPropagation(); goPrev() }}
            aria-label="Попереднє фото"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-foreground">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Next button */}
          <button
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-10 sm:h-10 border border-border flex items-center justify-center hover:border-gold transition-colors duration-200 z-10 touch-manipulation bg-background/60 backdrop-blur-sm"
            onClick={(e) => { e.stopPropagation(); goNext() }}
            aria-label="Наступне фото"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-foreground">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Image container */}
          <div
            className="relative w-full h-full flex items-center justify-center px-16 sm:px-20 py-20 sm:py-16"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full max-w-4xl">
              <Image
                src={activePhoto.src}
                alt={`Portfolio ${activePhoto.id}`}
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Bottom bar */}
          <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 flex items-center justify-between px-4 sm:px-6">
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans">
              {String(photos.findIndex(p => p.id === active) + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
            </span>
            {/* Dots — fewer visible on mobile */}
            <div className="flex gap-1 max-w-[60vw] overflow-hidden">
              {photos.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActive(p.id)}
                  className={`h-px transition-all duration-200 touch-manipulation ${p.id === active ? "bg-gold w-6" : "bg-border hover:bg-gold/50 w-4"}`}
                  aria-label={`Фото ${p.id}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
