import { ReactNode } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import { Box, Scaffold } from '@whammytechvn/wt-components';
import { useAccount } from 'wagmi';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Scaffold className="bg-[#0B2F51] bg-[url('/assets/bg-main.png')] bg-[length:100%_51rem] bg-no-repeat bg-bottom flex flex-col">
      <Box className="absolute bottom-0 w-full min-h-[51rem] main-bg" />
      <Header />
      <Box className="w-full relative grow px-12">{children}</Box>
      <Footer />
    </Scaffold>
  );
}
