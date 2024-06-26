'use client';

import { useContext } from 'react';
import { useRouter } from 'next/navigation';

import { AppContext } from '@/contexts/AppContext';
import { Container } from '@/components/Container';
import { Prose } from '@/components/Prose';
import { type BlogWithSlug } from '@/util/blogs';
import { formatDate } from '@/util/formatDate';
import { ArrowLeftIcon } from '@/components/Icons';

export function BlogLayout({
  blog,
  children,
}: {
  blog: BlogWithSlug;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { previousPathname } = useContext(AppContext);

  return (
    <Container className="mt-16 lg:mt-32">
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
          {previousPathname && (
            <button
              type="button"
              onClick={() => router.back()}
              aria-label="Go back to blogs"
              className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-amber-50/90 shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition hover:border hover:border-lime-700 hover:ring-lime-700/20 dark:border dark:border-zinc-700/50 dark:bg-lime-950/90 dark:ring-0 dark:ring-zinc-200/10 dark:hover:border-amber-400 dark:hover:ring-amber-400/20 lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0"
            >
              <ArrowLeftIcon className="h-4 w-4 stroke-zinc-800 transition group-hover:stroke-lime-700 dark:stroke-zinc-200 dark:group-hover:stroke-amber-400" />
            </button>
          )}
          <article>
            <header className="flex flex-col">
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                {blog.title}
              </h1>
              <time
                dateTime={blog.date}
                className="order-first flex items-center text-base text-lime-800 dark:text-amber-400/80"
              >
                <span className="h-4 w-0.5 rounded-full bg-lime-600 dark:bg-amber-400/50" />
                <span className="ml-3">{formatDate(blog.date)}</span>
              </time>
            </header>
            <Prose className="mt-8" data-mdx-content>
              {children}
            </Prose>
          </article>
        </div>
      </div>
    </Container>
  );
}
