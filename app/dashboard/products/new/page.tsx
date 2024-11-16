import type { JSX } from 'react';
import { ProductNew } from '@/components/products/ProductNew';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Crear producto',
};

export default function ProductNewPage(): JSX.Element {
  return <ProductNew />;
}
