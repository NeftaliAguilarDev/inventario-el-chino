'use client';
import { type JSX } from 'react';
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

export function ProductNew(): JSX.Element {
  return (
    <div className="size-full">
      <PageTitle title="Crear producto" />
      <Card className="w-full md:w-8/12">
        <CardHeader>
          <CardDescription>Ingresar información del producto</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Nombre</Label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Nombre del producto"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Descripción</Label>
                <Input type="text" placeholder="Descripción del producto" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Precio</Label>
                <Input type="number" />
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
