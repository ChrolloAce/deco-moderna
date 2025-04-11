import './globals.css';
import { Montserrat, Cormorant_Garamond, Playfair_Display } from 'next/font/google';
import ChatWidget from './components/ChatWidget';
import { COMPANY_NAME, SiteMetadata } from './data/site-metadata';
import React from 'react';

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
  metadataBase: new URL('https://www.decomodernaremodeling.com'),
  title: SiteMetadata.home.title,
  description: SiteMetadata.home.description,
  keywords: SiteMetadata.home.keywords,
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png' }
    ],
    shortcut: '/favicon.png',
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: SiteMetadata.home.title,
    description: SiteMetadata.home.description,
    url: 'https://www.decomodernaremodeling.com',
    siteName: COMPANY_NAME,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${COMPANY_NAME} - Premium remodeling services in Louisville, KY`
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SiteMetadata.home.title,
    description: SiteMetadata.home.description,
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.decomodernaremodeling.com',
  },
  verification: {
    google: 'verification_token', // Replace with your verification token when available
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Convert the structured data to a JSON string
  const structuredDataJSON = JSON.stringify(SiteMetadata.structured_data.local_business);

  return (
    <html lang="en" className={`${montserrat.variable} ${cormorant.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon.png" sizes="180x180" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: structuredDataJSON }}
        />
      </head>
      <body className="bg-white text-dark font-sans antialiased overflow-x-hidden">
        {children}
        <ChatWidget />
      </body>
    </html>
  );
} 