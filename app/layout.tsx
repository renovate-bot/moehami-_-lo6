import './globals.css';
import type { Metadata } from 'next';
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