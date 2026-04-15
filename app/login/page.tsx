import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to the Acme Dashboard homepage.',
  alternates: {
    canonical: '/',
  },
};
<h1 className="text-2xl font-bold">Login</h1>
export default function Page() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">Acme Dashboard</h1>
      <p className="mt-4 text-gray-600">
        Welcome to the dashboard application.
      </p>
    </main>
  );
}