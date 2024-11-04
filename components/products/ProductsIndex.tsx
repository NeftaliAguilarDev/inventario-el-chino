import { PageTitle } from '../shared/component/PageTitle';
import ProductListingTable from './ProductListingTable';

export function ProductsIndex(): JSX.Element {
  return (
    <div className="size-full">
      <PageTitle title="Productos" />
      <ProductListingTable />
    </div>
  );
}
