'use client';
import { cn } from '@/lib/utils';
import {
  Box,
  LayoutDashboard,
  ShoppingBag,
  Tags,
  TrendingUp,
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import React, { type JSX, useState } from 'react';
import { Button } from '../ui/button';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import Link from 'next/link';

interface SidebarItem {
  name: string;
  href: string;
  icon: React.ElementType;
}

const sidebarItems: SidebarItem[] = [
  { name: 'Productos', href: '/dashboard/products', icon: ShoppingBag },
  { name: 'Categorías', href: '/dashboard/categories', icon: Tags },
  { name: 'Movimientos', href: '/dashboard/transactions', icon: TrendingUp },
  { name: 'Sucursales', href: '/dashboard/stores', icon: Box },
];

export function Sidebar(): JSX.Element {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  return (
    <aside
      className={cn(
        'fixed inset-y-0 left-0 z-50 w-64 transform bg-gray-900 text-white transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0',
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      )}
    >
      <div className="flex h-full flex-col">
        {/* Sidebar header */}
        <div className="flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center">
            <LayoutDashboard className="mr-2 h-6 w-6" />
            <b className="text-lg font-semibold">Admin Dashboard</b>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <span className="sr-only">Close sidebar</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Button>
        </div>

        {/* Sidebar content */}
        <ScrollArea className="flex-1 py-4">
          <nav className="space-y-1 px-2">
            {sidebarItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'group flex items-center rounded-md px-2 py-2 text-sm font-medium',
                  pathname === item.href
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                )}
              >
                <item.icon className="mr-3 h-6 w-6 flex-shrink-0" />
                {item.name}
              </Link>
            ))}
          </nav>
        </ScrollArea>
      </div>
    </aside>
  );
}
