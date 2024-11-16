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
import { Edit, Trash2 } from 'lucide-react';

// Mock data for categories
const initialCategories = [
  { id: 1, name: 'Leather Jacket', price: 199.99, stock: 50 },
  { id: 2, name: 'Denim Jeans', price: 59.99, stock: 100 },
  { id: 3, name: 'Sneakers', price: 89.99, stock: 75 },
  { id: 4, name: 'T-Shirt', price: 24.99, stock: 200 },
  { id: 5, name: 'Hoodie', price: 49.99, stock: 80 },
  { id: 6, name: 'Baseball Cap', price: 19.99, stock: 150 },
];

export default function CategoriesListingTable(): JSX.Element {
  const [categories, setCategories] = useState(initialCategories);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredcategories = categories.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id: number) => {
    setCategories(categories.filter((product) => product.id !== id));
  };

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold mb-6">Product Management</h1>
      <div className="flex justify-between items-center mb-6">
        <Input
          className="max-w-sm"
          placeholder="Search categories..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button>Add New Product</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredcategories.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="font-medium">{product.id}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>${product.price.toFixed(2)}</TableCell>
              <TableCell>{product.stock}</TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="icon" className="mr-2">
                  <Edit className="h-4 w-4" />
                  <span className="sr-only">Edit</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleDelete(product.id)}
                >
                  <Trash2 className="h-4 w-4" />
                  <span className="sr-only">Delete</span>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
