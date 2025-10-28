import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nusantara Spice Heritage - Premium Indonesian Spices for Global Markets',
  description: 'Your trusted partner for premium, ethically-sourced spices directly from Indonesia. We offer authentic, high-quality spices with sustainable farming practices and fair trade partnerships.',
  keywords: 'Indonesian spices, premium spices, cinnamon, clove, pepper, spice export, fair trade, sustainable farming, B2B spices',
  authors: [{ name: 'Nusantara Spice Heritage' }],
  openGraph: {
    title: 'Nusantara Spice Heritage - Premium Indonesian Spices',
    description: 'Premium, ethically-sourced Indonesian spices for global B2B markets',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  )
}
