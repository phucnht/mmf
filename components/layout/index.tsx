import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Box, Scaffold } from '@whammytechvn/wt-components';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Scaffold className="bg-[#0B2F51] bg-[url('/assets/bg-main.png')] bg-[length:100%_51rem] bg-no-repeat bg-bottom flex flex-col">
      <Box className="absolute bottom-0 w-full min-h-[51rem] main-bg" />
      <Header />
      <Box className="w-full flex justify-center mt-32 mb-36 relative grow">{children}</Box>
      <Footer />
    </Scaffold>
  );
}
