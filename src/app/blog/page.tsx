import { type Metadata } from 'next';

import { SimpleLayout } from '@/components/SimpleLayout';
import { getAllBlogs } from '@/util/blogs';
import { Blog } from '@/components/Blog';

export const metadata: Metadata = {
  title: 'Blog',
  description: "A mom's journey on and off the yoga mat.",
};

export default async function BlogsIndex() {
  const blogs = await getAllBlogs();

  return (
    <SimpleLayout
      title={
        <>
          A mom&apos;s journey{' '}
          <span className="text-lime-700 dark:text-amber-400">
            on and off the yoga mat
          </span>
          .
        </>
      }
      intro="Join my candid exploration of life's ups and downs as a mom, yogi, and adventure-seeker in Phoenix, with no day the same and every moment a story."
    >
      <div className="md:border-l md:border-lime-700/40 md:pl-6 md:dark:border-amber-400/20">
        <div className="flex max-w-3xl flex-col space-y-16">
          {blogs.map((blog) => (
            <Blog key={blog.slug} blog={blog} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  );
}
