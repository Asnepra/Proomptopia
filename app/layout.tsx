import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Proomptopia',
  description: 'An app for Ai Prompts',
}

/**
 * 
 * @param param0 It is the main entry point of the application, whatever is vritten here
 * is displayed on all the pages, and all the other components are vrapped in it as its childrens
 * Ideally you can include navigation and footer as it is common and make a main section that is variable
 * @returns 
 */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
