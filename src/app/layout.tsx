import type { Metadata } from 'next'
import { Press_Start_2P } from 'next/font/google'
import './globals.css'

const pressStart2P = Press_Start_2P({ 
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Portfólio Game Dev',
  description: 'Portfólio profissional com tema de games',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={pressStart2P.className}>
        <div className="min-h-screen bg-background bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-background via-background to-black">
          {children}
        </div>
      </body>
    </html>
  )
} 