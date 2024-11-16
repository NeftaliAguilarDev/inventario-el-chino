import type { JSX } from 'react';
interface PageTitleProps {
  title: string;
}

export function PageTitle({ title }: PageTitleProps): JSX.Element {
  return <h1 className="text-3xl font-bold mb-6">{title}</h1>;
}
