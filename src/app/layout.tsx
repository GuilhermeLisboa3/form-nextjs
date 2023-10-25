import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '../components/ui/header'
import { Poppins } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Form',
  description: 'Generated form',
}

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900',],
  subsets: ['latin'],
  variable: '--font-poppins'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={poppins.variable}>
      <body className={`${inter.className}`}>
        <div className='flex h-full flex-col font-sans'>
          <Header/>
          <div className="flex-1">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
