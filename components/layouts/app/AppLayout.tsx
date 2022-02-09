import { ReactNode } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import { Box, Container, Scaffold } from '@whammytechvn/wt-components';
import useWindowSize from 'hooks/useWindowSize';
import Warning from 'components/display/warning/Warning';

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const { width } = useWindowSize();

  let content = (
    <>
      <Header />
      <Container className="mb-36">
        <Box className="w-full relative grow">{children}</Box>
      </Container>
      <Footer />
    </>
  );

  if (width && width <= 1024) {
    content = <Warning />;
  }

  return (
    <Scaffold className="bg-[#0B2F51] bg-[url('/assets/bg/bg-main.png')] bg-[length:100%_51rem] bg-no-repeat bg-bottom flex flex-col">
      <Box className="absolute bottom-0 w-full min-h-[51rem] main-bg" />
      {content}
    </Scaffold>
  );
}
