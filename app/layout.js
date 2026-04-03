import { Cormorant_SC, Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'

const cormorantSC = Cormorant_SC({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-display',
  display: 'swap',
})

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300'],
  style: ['italic'],
  variable: '--font-editorial',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '500'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata = {
  title: 'Copper Stag LLC — Web Development for Small Business',
  description:
    'Local web development and software services for small businesses in Charlotte & Statesville, NC. Flat-rate pricing, veteran-owned, you talk to the developer directly.',
  openGraph: {
    title: 'Copper Stag LLC — Web Development for Small Business',
    description:
      'Local web development and software services for small businesses in Charlotte & Statesville, NC. Flat-rate pricing, veteran-owned, you talk to the developer directly.',
    images: ['/stag-mark.png'],
    url: 'https://copperstag.dev',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Copper Stag LLC — Web Development for Small Business',
    description:
      'Local web development and software services for small businesses in Charlotte & Statesville, NC. Flat-rate pricing, veteran-owned, you talk to the developer directly.',
    images: ['/stag-mark.png'],
  },
  alternates: {
    canonical: 'https://copperstag.dev',
  },
  icons: {
    icon: '/stag-mark.png',
    shortcut: '/stag-mark.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${cormorantSC.variable} ${cormorantGaramond.variable} ${dmSans.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
