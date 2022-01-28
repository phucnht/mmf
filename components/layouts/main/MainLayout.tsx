import { ReactNode } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import { Box, Container, Scaffold } from '@whammytechvn/wt-components';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <Scaffold className="bg-[#0B2F51] bg-[url('/assets/bg-main.png')] bg-[length:100%_51rem] bg-no-repeat bg-bottom flex flex-col">
      <Box className="absolute bottom-0 w-full min-h-[51rem] main-bg" />
      <Header />
      <Container className="mb-36">
        <Box className="w-full relative grow">{children}</Box>
      </Container>
      <Footer />
    </Scaffold>
  );
}
