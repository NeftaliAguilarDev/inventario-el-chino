import type { JSX } from 'react';
import { ProductEdit } from '@/components/products/ProductEdit';
import { Metadata } from 'next';
import { getProductById } from '@/lib/actions/products';

export const metadata: Metadata = {
  title: 'Editar producto producto',
};

interface ProductEditPageProps {
  readonly params: {
    readonly id: string;
  };
}

export default async function ProductEditPage({
  params,
}: ProductEditPageProps): Promise<JSX.Element> {
  const { id: productId } = await params;
  const productData = await getProductById(productId);
  return <ProductEdit productData={productData} />;
}
