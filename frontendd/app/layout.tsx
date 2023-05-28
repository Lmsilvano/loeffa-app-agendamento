import './globals.css'
import { Roboto } from 'next/font/google'
import Header from './components/header'
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
})

export const metadata = {
  title: 'WorkStationPlanner',
  description: 'Sistema de reserva de estações de Trabalho',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={`${roboto.variable}`}>
        <Header />
        {children}

      </body>
    </html>
  )
}

// mx-4 md:mx-48 xl:-mx-64