'use client';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Roboto_Slab } from 'next/font/google';

const robotoSlab = Roboto_Slab({ subsets: ['latin'] });

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div
        className={`fixed inset-0 flex justify-center sm:px-8 ${robotoSlab.className}`}
      >
        <div className="flex w-full max-w-6xl bg-white dark:bg-black">
          <div className="w-full bg-amber-50/20 ring-1 ring-amber-50 dark:bg-lime-950/50 dark:ring-lime-950/20" />
        </div>
      </div>
      <div className={`relative flex w-full flex-col ${robotoSlab.className}`}>
        <Header />
        <main className="flex-auto">{children}</main>
        <Footer />
      </div>
    </>
  );
}
