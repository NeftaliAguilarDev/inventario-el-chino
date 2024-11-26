'use client';
import type { JSX } from 'react';
import { CategorySelect } from '@/components/categories/CategorySelect';
import { PageTitle } from '@/components/shared/component/PageTitle';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  Input,
  Label,
} from '@/components/ui';
import { Product } from '@prisma/client';
import { useForm } from 'react-hook-form';

interface ProductEditProps {
  readonly productData: Product;
}

type Inputs = {
  name: string;
  description: string;
  price: number;
};

export function ProductEdit({ productData }: ProductEditProps): JSX.Element {
  const { register } = useForm<Inputs>();
  return (
    <div className="size-full">
      <PageTitle title="Editar producto" />
      <Card className="w-full md:w-8/12">
        <CardHeader>
          <CardDescription>Editar información del producto</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Nombre</Label>
                <Input
                  defaultValue={productData.name}
                  {...(register('name'), { required: true })}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Descripción</Label>
                <Input
                  defaultValue={productData.description}
                  {...(register('description'), { required: false })}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Precio</Label>
                <Input
                  type="number"
                  defaultValue={productData.price}
                  {...(register('price'), { required: true })}
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Categoria</Label>
                <CategorySelect />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Imágen del producto</Label>
                <Input type="file" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex">
          <Button className="w-full md:w-auto">Guardar</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
