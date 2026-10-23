import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
const logo = `${basePath}/logo.png`

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'GreekWave Technologies - Riding the Wave of AI Innovation',
  description: 'GreekWave Technologies builds innovative AI-based applications for businesses and consumers. Discover our cutting-edge solutions in computer vision, NLP, predictive analytics, and automation systems.',
  keywords: 'AI, artificial intelligence, machine learning, computer vision, NLP, predictive analytics, automation, GreekWave Technologies',
  authors: [{ name: 'GreekWave Technologies' }],
  creator: 'GreekWave Technologies',
  publisher: 'GreekWave Technologies',
  openGraph: {
    title: 'GreekWave Technologies - Riding the Wave of AI Innovation',
    description: 'GreekWave Technologies builds innovative AI-based applications for businesses and consumers.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://greekwave.tech',
    siteName: 'GreekWave Technologies',
    images: [
      {
        url: logo,
        width: 1200,
        height: 630,
        alt: 'GreekWave Technologies - AI Innovation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GreekWave Technologies - Riding the Wave of AI Innovation',
    description: 'GreekWave Technologies builds innovative AI-based applications for businesses and consumers.',
    images: [logo],
  },
  icons: {
    icon: logo,
    shortcut: logo,
    apple: logo,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-inter antialiased bg-slate-900 text-white">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}