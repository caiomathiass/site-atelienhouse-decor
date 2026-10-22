
import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-jost',
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '')

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: {
    default:
      'Ateliê House Cortinas | Cortinas sob medida no Rio de Janeiro e Niterói',
    template: '%s | Ateliê House Cortinas',
  },
  description:
    'Cortinas de tecido sob medida desde 2017. Atendimento personalizado para residências, empresas e arquitetos no Rio de Janeiro e Niterói. Solicite seu orçamento.',
  keywords: [
    'cortinas sob medida',
    'cortinas de tecido',
    'ateliê de cortinas',
    'cortinas Rio de Janeiro',
    'cortinas Niterói',
    'cortinas Recreio',
    'cortinas Barra da Tijuca',
    'decoração de interiores',
  ],
  authors: [{ name: 'Ateliê House Cortinas' }],
  creator: 'Ateliê House Cortinas',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Ateliê House Cortinas',
    title:
      'Ateliê House Cortinas | Cortinas sob medida no Rio de Janeiro e Niterói',
    description:
      'Cortinas de tecido sob medida com atendimento personalizado desde 2017. Rio de Janeiro e Niterói.',
    ...(siteUrl ? { url: siteUrl } : {}),
    images: [
      {
        url: '/images/hero-living-room.png',
        width: 1200,
        height: 630,
        alt: 'Sala com cortinas de tecido sob medida',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#faf5ee',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}