"use  client";

import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jourdan Catarina',
  description: 'Portfolio Website of Jourdan Catarina',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Monoton&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className='flex flex-col text-white' style={{ backgroundColor: '#0a0141' }}>
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
