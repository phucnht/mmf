import { ReactNode, useEffect } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import { Box, Container, Scaffold } from '@whammytechvn/wt-components';
import { useAppDispatch, useAppSelector } from 'store/store.hook';
import { getSystemConfig } from 'store/market/system-config/systemConfig.api';
import { selectSystemConfigData } from 'store/market/system-config/systemConfig.slice';
import { getPaymentTokens } from 'store/market/payment-token/paymentToken.api';
import BackgroundFlare from 'components/bg/BackgroundFlare';
import BackgroundFooterShadow from 'components/bg/BackgroundFooterShadow';
import { useRouter } from 'next/router';

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const { pathname } = useRouter();
  const dispatch = useAppDispatch();
  const { id } = useAppSelector(selectSystemConfigData);

  useEffect(() => {
    if (!id) {
      dispatch(getSystemConfig());
      dispatch(getPaymentTokens());
    }
  }, [id, dispatch]);

  let renderChildren = (
    <Container className="mb-36 xl:max-w-[132rem] z-[5]">
      <Box className="w-full relative grow">{children}</Box>
    </Container>
  );

  if (pathname === '/') {
    renderChildren = <>{children}</>;
  }

  const content = (
    <>
      <Header />
      {renderChildren}
      <Footer />
    </>
  );

  return (
    <Scaffold className="bg-[#0B2F51] bg-[url('/assets/bg/bg-main.png')] bg-[length:100%_51rem] bg-no-repeat bg-bottom flex flex-col min-w-[90rem] overflow-x-auto">
      {content}
      <BackgroundFooterShadow />
      <BackgroundFlare />
    </Scaffold>
  );
}
