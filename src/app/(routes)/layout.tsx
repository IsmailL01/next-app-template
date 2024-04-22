import { ReactNode } from 'react';
import { Header } from '@/src/widgets/header/ui/Header';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
export default Layout;
