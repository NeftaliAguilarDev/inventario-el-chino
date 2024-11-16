import ProductListingTable from '../products/ProductListingTable';
import type { JSX } from 'react';

export function ProductsIndex(): JSX.Element {
  return (
    <div className="size-full">
      <ProductListingTable />
    </div>
  );
}
