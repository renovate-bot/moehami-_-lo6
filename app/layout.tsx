import './globals.css';
import { Metadata } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/navigation';

import { PageWrapper } from '@/providers/animation-provider';
import Footer from '@/components/ui/footer';


const inter = Inter({ subsets: ['latin'], display: 'swap', weight: ['400', '700'] });



export const metadata: Metadata = {
  title: {
    template: '%s ',
    default: 'Lo Bin Stores',
  },
  description: 'Discover local bin stores near me selling a wide variety of trash cans, recycling bins, compost bins, and more. Find the perfect bin for your home or business.',
  icons: {
    icon: [
      {
        url: "/favicon/favicon.ico",
        type: "image/x-icon",
      },
      {
        url: "/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        url: "/favicon/favicon.ico",
        type: "image/x-icon",
      },
    ],
    apple: [
      {
        url: "/favicon/apple-icon-57x57.png",
        sizes: "57x57",
        type: "image/png",
      },
      {
        url: "/favicon/apple-icon-60x60.png",
        sizes: "60x60",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lobinstores.com',
    siteName: 'Lo Bin Stores',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <link rel="preload" href="/images/logo.svg" as="image" />

        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-9M4P5J1KLF" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9M4P5J1KLF');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <Navigation />
        <PageWrapper>{children}</PageWrapper>
        <Footer />
      </body>
    </html>
  );
}
