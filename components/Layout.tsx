import { ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

interface ILayoutProps {
  children: ReactNode;
}

function Layout({ children }: ILayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
