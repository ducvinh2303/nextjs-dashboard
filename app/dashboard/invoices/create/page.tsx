import type { Metadata } from 'next';
import Form from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';

export const metadata: Metadata = {
  title: 'Create Invoice',
  description: 'Create a new invoice in the Acme Dashboard.',
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: '/dashboard/invoices/create',
  },
  openGraph: {
    title: 'Create Invoice | Acme Dashboard',
    description: 'Create a new invoice in the Acme Dashboard.',
    url: '/dashboard/invoices/create',
    images: ['/opengraph-image.png'],
  },
};

export default async function Page() {
  const customers = await fetchCustomers();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Create Invoice',
            href: '/dashboard/invoices/create',
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}