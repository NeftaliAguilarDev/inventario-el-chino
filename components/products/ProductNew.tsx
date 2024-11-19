'use client';
import { FormEvent, useCallback, type JSX } from 'react';
import { CategorySelect } from '../categories/CategorySelect';
import { PageTitle } from '../shared/component/PageTitle';
import { Button } from '../ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { CreateCategoryButton } from '../categories/CreateCategoryButton';
import { createProduct } from '@/lib/actions/products';
import { useMutation } from '@tanstack/react-query';
import { ProductCreateInput } from '@/lib/schemas';
import { useRouter } from 'next/navigation';

export function ProductNew(): JSX.Element {
  const router = useRouter();
  const { mutate, isPending } = useMutation({
    mutationKey: ['createProduct'],
    mutationFn: async (product: ProductCreateInput) =>
      await createProduct(product),
    onSuccess: () => {
      router.push('/dashboard/products');
    },
  });
  const onSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const productData = {
        name: formData.get('name') as string,
        price: Number(formData.get('price')),
        description: formData.get('description') as string,
        categoryId: formData.get('categoryId') as string | null,
      };
      mutate(productData);
    },
    [mutate]
  );

  return (
    <div className="size-full">
      <PageTitle title="Crear producto" />
      <Card className="w-full md:w-8/12">
        <form onSubmit={onSubmit}>
          <CardHeader>
            <CardDescription>Ingresar información del producto</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Nombre</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nombre del producto"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Descripción</Label>
                <Input
                  name="description"
                  type="text"
                  placeholder="Descripción del producto"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Precio</Label>
                <Input name="price" type="number" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Categoria</Label>
                <div className="flex items-center">
                  <CategorySelect />
                  <CreateCategoryButton />
                </div>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Imágen del producto</Label>
                <Input name="image" type="file" />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex">
            <Button className="w-full md:w-auto">
              {isPending ? 'Guardando...' : 'Guardar'}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
