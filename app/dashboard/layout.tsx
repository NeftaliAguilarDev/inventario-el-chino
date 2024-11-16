import type { JSX } from 'react';
import { ReactNode } from 'react';
import { Sidebar } from '@/components/app/Sidebar';
import { Header } from '@/components/shared/component/Header';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps): JSX.Element {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-auto bg-gray-100 p-4">{children}</main>
      </div>
    </div>
  );
}
