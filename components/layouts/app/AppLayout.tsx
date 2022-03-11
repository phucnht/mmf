import { ReactNode, useEffect } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import { Box, Flex, Scaffold } from '@whammytechvn/wt-components';
import { useAppDispatch, useAppSelector } from 'store/store.hook';
import { getSystemConfig } from 'store/market/system-config/systemConfig.api';
import { selectSystemConfigData } from 'store/market/system-config/systemConfig.slice';
import { getPaymentTokens } from 'store/market/payment-token/paymentToken.api';
import BackgroundFlare from 'components/bg/BackgroundFlare';
import BackgroundFooterShadow from 'components/bg/BackgroundFooterShadow';
import { useRouter } from 'next/router';
import useWeb3Validate from 'hooks/useWeb3Validate';
import { loginLoading, selectAuthData } from 'store/account/auth/auth.slice';
import { selectPaymentTokenData } from 'store/market/payment-token/paymentToken.slice';

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const { pathname } = useRouter();
  const dispatch = useAppDispatch();
  const { id } = useAppSelector(selectSystemConfigData);
  const { accessToken } = useAppSelector(selectAuthData);
  const { MMF } = useAppSelector(selectPaymentTokenData);
  useWeb3Validate();

  useEffect(() => {
    if (!id) {
      dispatch(getSystemConfig());
    }
    if (!accessToken) {
      dispatch(loginLoading(false));
    }
    if (!MMF) {
      dispatch(getPaymentTokens());
    }
  }, [id, accessToken, MMF, dispatch]);

  let renderChildren = (
    <Box className="layout  z-[5] grow">
      <Flex className="flex-col justify-center w-full relative grow">{children}</Flex>
    </Box>
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
    <Scaffold className="bg-[#0B2F51] bg-[url('/assets/bg/bg-main.png')] bg-[length:100%_51rem] bg-no-repeat bg-bottom flex flex-col overflow-x-auto min-w-[36rem]">
      {content}
      <BackgroundFooterShadow />
      <BackgroundFlare />
    </Scaffold>
  );
}
