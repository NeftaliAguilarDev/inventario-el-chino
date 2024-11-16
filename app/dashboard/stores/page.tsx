import type { JSX } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sucursales',
  description: 'Sucursales',
  keywords: 'sucursales',
};

export default function categoriesPage(): JSX.Element {
  return (
    <div className="size-full">
      <h1>Sucursales</h1>
    </div>
  );
}
