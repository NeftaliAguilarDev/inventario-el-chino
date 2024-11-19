'use client';
import type { JSX } from 'react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Edit } from 'lucide-react';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '@/lib/actions/products';
import { Product } from '@prisma/client';

export default function ProductListingTable(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const { isPending } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const response = await getProducts();
      setProducts(response);
      return response;
    },
  });

  return (
    <div className="w-full">
      <div className="flex justify-between items-center flex-col md:flex-row mb-6">
        <Input
          className="w-full md:w-6/12"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button asChild className="w-full md:w-auto mt-5 md:mt-0">
          <Link href={'/dashboard/products/new'}>Agregar nuevo producto</Link>
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isPending && (
            <TableRow>
              <TableCell>Cargando productos... </TableCell>
            </TableRow>
          )}
          {products.length > 0 &&
            products?.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>${product.price.toFixed(2)}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell className="text-right">
                  <Button asChild variant="ghost" size="icon" className="mr-2">
                    <Link href={`/dashboard/products/${product.id}`}>
                      <Edit className="h-4 w-4" />
                      <span>Editar</span>
                      <span className="sr-only">Editar</span>
                    </Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
