import { ProductEdit } from '@/components/products/ProductEdit';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Editar producto producto',
};

export default function ProductEditPage(): JSX.Element {
  return <ProductEdit />;
}
