import type { JSX } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Transacciones',
  description: 'Transacciones',
  keywords: 'transacciones',
};

export default function productsPage(): JSX.Element {
  return (
    <div className="size-full">
      <h1>Movimientos</h1>
    </div>

  );
}