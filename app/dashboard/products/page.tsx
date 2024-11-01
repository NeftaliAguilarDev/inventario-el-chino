import type { JSX } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Products page',
  keywords: 'products',
};

export default function productsPage(): JSX.Element {
  return (
    <div className="size-full">
      <h1>Products</h1>
    </div>

  );
}
