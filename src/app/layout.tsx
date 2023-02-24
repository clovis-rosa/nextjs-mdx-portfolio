import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Footer from '@/components/Footer'

import '@/styles/style.linaria.global'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'NextJS MDX Portfolio',
    template: '%s | NextJS MDX Portfolio',
  },
  description: 'Next.js, Linaria, TypeScript and MDX Blog Portifolio',
  openGraph: {
    title: 'Clovis Rosa',
    description: 'Next.js, Linaria, TypeScript and MDX Blog Portifolio',
    url: 'https://nextjs-mdx-dev-portfolio.vercel.app',
    siteName: 'Clovis Rosa',
    images: [
      {
        url: 'https://nextjs-mdx-dev-portfolio.vercel.app/og.jpg',
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'en-US',
    type: 'website',
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
  twitter: {
    title: 'Clovis Rosa',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head />
      <body>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
