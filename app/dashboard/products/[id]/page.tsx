import type { JSX } from 'react';
import { ProductEdit } from '@/components/products/ProductEdit';
import { Metadata } from 'next';
import { getProductById } from '@/lib/actions/products';
import { PageProps } from '@/.next/types/app/page';

export const metadata: Metadata = {
  title: 'Editar producto producto',
};

interface ProductEditPageProps extends PageProps {}

export default async function ProductEditPage({
  params,
}: ProductEditPageProps): Promise<JSX.Element> {
  const { id: productId } = await params;
  console.log('typeof params', typeof productId);
  const productData = await getProductById(productId);
  if (!productData) {
    return <div>Producto no encontrado</div>;
  }
  return <ProductEdit productData={productData} />;
}
