import './globals.css';
import { Metadata } from 'next'

import { Inter } from 'next/font/google';
import { Navigation } from '@/components/navigation';

import { PageWrapper } from '@/providers/animation-provider';
import Footer from "@/components/ui/footer";



const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Lo Bin Stores',
    default: 'Lo Bin Stores',
  },
  description: 'Discover local bin stores near me selling a wide variety of trash cans, recycling bins, compost bins, and more. Find the perfect bin for your home or business.',
  icons: {
    icon: [
      {
        url: "/favicon/favicon.ico",
        type: "image/x-icon"
      },
      {
        url: "/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png"
      }
      // add favicon-32x32.png, favicon-96x96.png, android-chrome-192x192.png
    ],
    shortcut: [
      {
        url: "/favicon/favicon.ico",
        type: "image/x-icon"
      }
    ],
    apple: [
      {
        url: "/favicon/apple-icon-57x57.png",
        sizes: "57x57",
        type: "image/png"
      },
      {
        url: "/favicon/apple-icon-60x60.png",
        sizes: "60x60",
        type: "image/png"
      }
      // add apple-icon-72x72.png, apple-icon-76x76.png, apple-icon-114x114.png, apple-icon-120x120.png, apple-icon-144x144.png, apple-icon-152x152.png, apple-icon-180x180.png
    ]
  }
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lobinstores.com',
    siteName: 'Lo Bin Stores',
  },
}

/*
export const metadata: Metadata = {
  title: 'Lo Bin Stores Directory',
  description: 'Discover and explore local stores in your area',
};*/

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <Navigation />
        <PageWrapper>{children}</PageWrapper>
        <Footer />
      </body>
    </html>
  );
}