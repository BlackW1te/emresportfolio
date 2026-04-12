import { Manrope } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
})

export const metadata = {
  metadataBase: new URL('https://emre.dev'),
  title: 'Fatih Emre İşgören | Mobil Uygulama Geliştiricisi',
  description: 'Flutter ve Next.js ile modern mobil ve web deneyimleri geliştiren Bilgisayar Mühendisliği öğrencisinin portfolyosu.',
  keywords: ['Flutter', 'Dart', 'Next.js', 'Mobile Developer', 'Portfolio', 'İstanbul', 'Fatih Emre İşgören'],
  authors: [{ name: 'Fatih Emre İşgören' }],
  openGraph: {
    title: 'Fatih Emre İşgören | Portfolio',
    description: 'Mobil Uygulama Geliştiricisi & Bilgisayar Mühendisliği Öğrencisi',
    url: 'https://emre.dev',
    siteName: 'Emre.dev',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fatih Emre İşgören | Portfolio',
    description: 'Mobil Uygulama Geliştiricisi Portfolio',
    creator: '@emredev',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={manrope.className}>
        {children}
      </body>
    </html>
  )
}