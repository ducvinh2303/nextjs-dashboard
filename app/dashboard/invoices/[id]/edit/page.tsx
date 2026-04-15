import type { Metadata } from 'next';
import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchInvoiceById, fetchCustomers } from '@/app/lib/data';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  return {
    title: 'Edit Invoice',
    description: 'Edit an existing invoice in the Acme Dashboard.',
    robots: {
      index: false,
      follow: false,
    },
    alternates: {
      canonical: `/dashboard/invoices/${id}/edit`,
    },
    openGraph: {
      title: 'Edit Invoice | Acme Dashboard',
      description: 'Edit an existing invoice in the Acme Dashboard.',
      url: `/dashboard/invoices/${id}/edit`,
      images: ['/opengraph-image.png'],
    },
  };
}

export default async function Page({ params }: Props) {
  const { id } = await params;

  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);

  if (!invoice) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form invoice={invoice} customers={customers} />
    </main>
  );
}