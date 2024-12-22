// seo.config.ts
import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  defaultTitle: 'Lo Bin Stores',
  titleTemplate: '%s |  Lo Bin Stores',
  description: 'local bin stores near me selling a wide variety of trash cans, recycling bins, compost bins, and more. Find the perfect bin for your home or business.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lobinstores.com',
    siteName: 'Lo Bin Stores',
  },
  twitter: {
    handle: '@yourhandle',
    site: '@yoursite',
    cardType: 'summary_large_image',
  },
};

export default config;