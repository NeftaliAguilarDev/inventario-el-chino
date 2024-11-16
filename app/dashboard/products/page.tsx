import type { JSX } from 'react';
import { Metadata } from 'next';
import { ProductsIndex } from '@/components/products/ProductsIndex';

export const metadata: Metadata = {
  title: 'Listado de Productos',
};

export default function productsPage(): JSX.Element {
  return <ProductsIndex />;
}
