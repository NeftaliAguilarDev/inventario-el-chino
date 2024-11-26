'use client';

import * as React from 'react';
import type { JSX } from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Category } from '@prisma/client';

export function CategorySelect({
  categories,
}: {
  categories: Category[];
}): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-auto pr-10 relative justify-start"
        >
          {value
            ? categories.find((category) => category.name === value)?.name
            : 'Seleccionar categoría'}
          <ChevronsUpDown className="h-4 w-4 absolute right-2" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto pr-10 p-0">
        <Command>
          <CommandInput placeholder="Buscar ..." />
          <CommandList>
            <CommandEmpty>Categoria no encontrada</CommandEmpty>
            <CommandGroup>
              {categories.map((category) => (
                <CommandItem
                  key={category.name}
                  value={category.name}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      value === category.name ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                  {category.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
