import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'

const open = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Team Chat Application',
  description: 'This is a discord clone app made using NextJs13',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={open.className}>{children}</body>
    </html>
  )
}
