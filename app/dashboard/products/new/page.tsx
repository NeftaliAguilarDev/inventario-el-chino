import type { JSX } from 'react';
import { ProductNew } from '@/components/products/ProductNew';
import { Metadata } from 'next';
import { getCategories } from '@/lib/actions/categories';

export const metadata: Metadata = {
  title: 'Crear producto',
};

export default async function ProductNewPage(): Promise<JSX.Element> {
  const categories = await getCategories();
  return <ProductNew categories={categories} />;
}
