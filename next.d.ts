import type { Metadata } from 'next';

declare module 'next/types/next' {
  interface PageProps<P = {}> {
    params: P;
    searchParams?: { [key: string]: string | string[] | undefined };
  }
}
