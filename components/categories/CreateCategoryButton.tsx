'use client';
import type { JSX } from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button, Input, Label } from '../ui';
import React, { useCallback } from 'react';

export function CreateCategoryButton(): JSX.Element {
  const onSubmit = useCallback(() => {
    // handle logig here
  }, []);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="ml-2">+</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Crear Categoria</DialogTitle>
          <DialogDescription asChild>
            <form onSubmit={onSubmit}>
              <div className="flex flex-col space-y-1.5 mt-5">
                <Label htmlFor="name">Nombre</Label>
                <Input
                  required
                  type="text"
                  id="name"
                  placeholder="Nombre de la categoria"
                />
              </div>
              <Button className="mt-5">Guardar</Button>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
