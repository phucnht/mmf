import { ReactNode, useEffect } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import { Box, Container, Scaffold } from '@whammytechvn/wt-components';
import useWindowSize from 'hooks/useWindowSize';
import Warning from 'components/display/warning/Warning';
import { useAppDispatch, useAppSelector } from 'store/store.hook';
import { getSystemConfig } from 'store/market/system-config/systemConfig.api';
import { selectSystemConfigData } from 'store/market/system-config/systemConfig.slice';
import { getPaymentTokens } from 'store/market/payment-token/paymentToken.api';

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const dispatch = useAppDispatch();
  const { id } = useAppSelector(selectSystemConfigData);
  const { width } = useWindowSize();

  useEffect(() => {
    if (!id) {
      dispatch(getSystemConfig());
      dispatch(getPaymentTokens());
    }
  }, [id, dispatch]);

  let content = (
    <>
      <Header />
      <Container className="mb-36 xl:max-w-[132rem]">
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
