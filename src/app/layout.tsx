import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { twMerge } from 'tailwind-merge'
import './globals.css'
import { Header } from '@/components/ui/Header'
import { Footer } from '@/components/ui/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-prompt',
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'JHS Store',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body
        className={twMerge(
          poppins.variable,
          'bg-black-800 font-sans antialiased',
        )}
      >
        <Header.Root />
        {children}
        <Footer.Root />
      </body>
    </html>
  )
}
