import type { Metadata } from 'next';
import '@/styles/tailwind.css';
import '@/styles/global.css';
import { Providers } from '@/app/providers';
import { Layout } from '@/components/Layout';

export const metadata: Metadata = {
  title: {
    template: '%s - Alex Kharrl',
    default: 'Alex Kharrl',
  },
  description: 'Hi, my name is Alex.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`h-full antialiased dark:bg-black`}
      suppressHydrationWarning
    >
      <body className="flex h-full bg-amber-50 dark:bg-lime-950/50">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  );
}
