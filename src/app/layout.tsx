import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Advize - AI-Powered Creative Analytics for Meta Ads',
  description: 'Stop wondering. Build winning ads with AI. Advize provides creative analytics, media dashboards, and AI-powered insights to optimize your Meta advertising campaigns.',
  keywords: 'creative analytics, Meta ads, Facebook ads, advertising optimization, AI marketing, creative performance, ad analytics, marketing dashboard',
  authors: [{ name: 'Advize' }],
  creator: 'Advize',
  publisher: 'Advize',
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
  openGraph: {
    title: 'Advize - AI-Powered Creative Analytics for Meta Ads',
    description: 'Stop wondering. Build winning ads with AI. Get creative analytics, media dashboards, and AI-powered insights.',
    url: 'https://advize.com',
    siteName: 'Advize',
    images: [
      {
        url: '/images/Visualize-Final.jpg',
        width: 1200,
        height: 630,
        alt: 'Advize Creative Analytics Dashboard',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Advize - AI-Powered Creative Analytics for Meta Ads',
    description: 'Stop wondering. Build winning ads with AI. Get creative analytics, media dashboards, and AI-powered insights.',
    images: ['/images/Visualize-Final.jpg'],
  },
  alternates: {
    canonical: 'https://advize.com',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
