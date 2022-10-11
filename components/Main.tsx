import { ReactNode } from 'react';

interface IMainProps {
  children: ReactNode
}

export function Main({ children }: IMainProps) {
  return (
    <main className="flex-grow max-w-2xl mx-auto grid p-6 gap-6 sm:grid-cols-2 bg-teal-100">
      {children}
    </main>
  );
}
