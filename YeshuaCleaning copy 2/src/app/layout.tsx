import './globals.css';
import { Montserrat, Cormorant_Garamond, Playfair_Display } from 'next/font/google';
import ChatWidget from './components/ChatWidget';
import { COMPANY_NAME, SiteMetadata } from './data/site-metadata';

const montserrat = Montserrat({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700'],
});

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata = {
  metadataBase: new URL('https://luxuryhomeremodeling.com'), // Update with actual domain when available
  title: SiteMetadata.home.title,
  description: SiteMetadata.home.description,
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png' }
    ],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: SiteMetadata.home.title,
    description: SiteMetadata.home.description,
    url: 'https://luxuryhomeremodeling.com', // Update with actual domain when available
    siteName: COMPANY_NAME,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SiteMetadata.home.title,
    description: SiteMetadata.home.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${cormorant.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="bg-white text-dark font-sans antialiased overflow-x-hidden">
        {children}
        <ChatWidget />
      </body>
    </html>
  );
} 