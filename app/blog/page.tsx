export type Post = {
  slug: string;
  title: string;
  description: string;
  content: string;
  updatedAt: string;
};

export const posts: Post[] = [
  {
    slug: 'seo-in-nextjs',
    title: 'SEO in Next.js',
    description: 'Learn how to improve SEO in a Next.js App Router project.',
    content:
      'This article explains metadata, sitemaps, robots tags, canonical URLs, and semantic routing in Next.js.',
    updatedAt: '2026-04-15',
  },
  {
    slug: 'app-router-basics',
    title: 'App Router Basics',
    description: 'Understand layouts, pages, and dynamic segments in App Router.',
    content:
      'This article covers the fundamentals of Next.js App Router including layouts, pages, and dynamic routes.',
    updatedAt: '2026-04-15',
  },
  {
    slug: 'create-nextjs-dashboard',
    title: 'Create a Next.js Dashboard',
    description: 'Build a dashboard app with authentication, forms, and SEO.',
    content:
      'This article shows how to build a production-style dashboard with Next.js, PostgreSQL, and authentication.',
    updatedAt: '2026-04-15',
  },
];

export async function getAllPosts() {
  return posts;
}

export async function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}