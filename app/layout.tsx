import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Silent Relief: Your Drug-Free Guide to Eliminating Menstrual Pain',
  description: 'A comprehensive, natural guide to managing and eliminating menstrual pain through gentle, evidence-based methods.',
  keywords: 'menstrual pain, natural relief, drug-free, period pain, dysmenorrhea, womens health',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
