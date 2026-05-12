import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'The Cocaine',
  description: 'The Cocaine is a project created by Cocainers for Cocainers. It is a simple app that allows users to explore the world of cocaine in a fun and interactive way.',
  generator: 'The Cocaine',
  openGraph: {
    title: 'The Cocaine',
    description: 'The Cocaine is a project created by Cocainers for Cocainers. It is a simple app that allows users to explore the world of cocaine in a fun and interactive way.',
    type: 'website',
    url: 'https://the-cocaine.art',
    images: [
      {
        url: 'https://cocaine.trade/🧪.svg',
        alt: 'The Cocaine',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Cocaine',
    description: 'The Cocaine is a project created by Cocainers for Cocainers. It is a simple app that allows users to explore the world of cocaine in a fun and interactive way.',
  },
  icons: {
    icon: [
      {
        url: 'https://cocaine.trade/🧪.svg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: 'https://cocaine.trade/🧪.svg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: 'https://cocaine.trade/🧪.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: 'https://cocaine.trade/🧪.svg',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <SpeedInsights />
      </body>
    </html>
  )
}
