import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/app/lib/posts';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'SEO-friendly blog listing with semantic URLs.',
  alternates: {
    canonical: '/blog',
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="p-6">
      <h1 className="mb-6 text-3xl font-bold">Blog</h1>

      <div className="space-y-4">
        {posts.map((post) => (
          <article key={post.slug} className="rounded-lg border p-4">
            <h2 className="text-xl font-semibold">
              <Link href={`/blog/${post.slug}`} className="hover:underline">
                {post.title}
              </Link>
            </h2>
            <p className="mt-2 text-sm text-gray-600">{post.description}</p>
            <p className="mt-2 text-xs text-gray-500">
              Updated: {post.updatedAt}
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}