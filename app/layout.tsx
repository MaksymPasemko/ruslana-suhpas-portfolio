import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
})

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Ruslana Sukhpas — Предметна фотографія',
  description:
    'Професійна предметна фотографія для брендів та e-commerce. Студійні комерційні зображення для брендів та інтернет-магазинів.',
  keywords: ['предметна фотографія', 'комерційна фотографія', 'e-commerce фотографія', 'продуктова зйомка', 'Ruslana Sukhpas'],
  openGraph: {
    title: 'Ruslana Sukhpas — Предметна фотографія',
    description: 'Студійна комерційна фотографія для брендів та e-commerce компаній.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uk">
      <body className={`${inter.variable} ${cormorant.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
