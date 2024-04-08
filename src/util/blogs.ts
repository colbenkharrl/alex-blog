import glob from 'fast-glob';
import { ImageProps } from 'next/image';

interface Blog {
  title: string;
  description: string;
  author: string;
  date: string;
  image?: ImageProps['src'];
}

export interface BlogWithSlug extends Blog {
  slug: string;
}

async function importBlog(blogFilename: string): Promise<BlogWithSlug> {
  const { blog } = (await import(`../app/blog/${blogFilename}`)) as {
    default: React.ComponentType;
    blog: Blog;
  };

  return {
    slug: blogFilename.replace(/(\/page)?\.mdx$/, ''),
    ...blog,
  };
}

export async function getAllBlogs() {
  const blogFilenames = await glob('*/page.mdx', {
    cwd: './src/app/blog',
  });

  const blogs = await Promise.all(blogFilenames.map(importBlog));

  return blogs.sort((a, z) => +new Date(z.date) - +new Date(a.date));
}
