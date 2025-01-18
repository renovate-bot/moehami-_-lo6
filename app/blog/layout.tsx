// app/blog/layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lo Bin Stores | Latest Updates and Store Guides',
  description: 'Read the latest news, guides, and tips about bin stores and liquidation centers across the United States.',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}