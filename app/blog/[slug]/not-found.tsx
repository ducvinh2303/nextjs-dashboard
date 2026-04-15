import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center gap-4 p-6">
      <h1 className="text-2xl font-semibold">404 - Post not found</h1>
      <p className="text-gray-600">The blog post you requested does not exist.</p>
      <Link
        href="/blog"
        className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-500"
      >
        Back to Blog
      </Link>
    </main>
  );
}