// app/layout.tsx or app/providers.tsx
'use client';

import { TinaProvider, TinaCMS } from 'tinacms';
import { useState } from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [cms] = useState(() => new TinaCMS({
    enabled: true,
    // Additional TinaCMS configuration
  }));

  return (
    <html lang="en">
      <body>
        <TinaProvider cms={cms}>
          {children}
        </TinaProvider>
      </body>
    </html>
  );
}
