import { Inter } from '@next/font/google'

import Footer from '@/components/Footer'

import '@/styles/style.linaria.global'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

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
