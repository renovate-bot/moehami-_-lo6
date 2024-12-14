// next.d.ts
import type { Metadata } from 'next';

declare module 'next' {
  interface PageProps<P = {}> {
    params: P;
    searchParams?: { [key: string]: string | string[] | undefined };
  }
}
