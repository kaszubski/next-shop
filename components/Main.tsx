import { ReactNode } from 'react';

interface IMainProps {
  children: ReactNode
}

export function Main({ children }: IMainProps) {
  return (
    <main className="flex-grow mx-auto grid p-6 gap-6 bg-gray-300">
      {children}
    </main>
  );
}
