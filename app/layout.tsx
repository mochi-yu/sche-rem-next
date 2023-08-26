import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'normalize.css'
import { ScheRemHeader } from '../components/ScheRemHeader'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sche Rem',
  description: 'Sche Rem',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className} style={{backgroundColor: "#FFF8F6"}}>
        <ScheRemHeader />
        {children}
      </body>
    </html>
  )
}
