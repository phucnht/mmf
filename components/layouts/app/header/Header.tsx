// import BackgroundHeaderShadow from 'components/bg/BackgroundHeaderShadow';
import HeaderLogo from './components/HeaderLogo';
import HeaderNav from './components/HeaderNav';
import useWindowSize from 'hooks/useWindowSize';
import HeaderButtonHamburger from './components/HeaderButtonHamburger';
import HeaderButtonUser from './components/HeaderButtonUser';
import clsxm from 'utils/clsxm';
import { useRouter } from 'next/router';
import { Flex } from '@whammytechvn/wt-components';
import Spinner from 'components/display/spinner/Spinner';

const HeaderDesktop = () => {
  return (
    <Flex className="layout">
      <HeaderLogo />
      <HeaderNav />
    </Flex>
  );
};

const HeaderMobile = () => {
  return (
    <>
      <HeaderButtonHamburger className="mr-auto lg:mr-0" />
      <HeaderLogo />
      <HeaderButtonUser className="ml-auto lg:ml-0" />
    </>
  );
};

export default function Header() {
  const { width } = useWindowSize();
  const { pathname } = useRouter();

  const cxNav = clsxm(
    'z-40 grid grid-cols-3 lg:flex items-center justify-between !py-0 bg-black/30 p-[3%] fixed top-0 w-full',
    { relative: pathname !== '/' }
  );

  if (!width) {
    return <Spinner />;
  }

  return (
    <>
      {/* <BackgroundHeaderShadow /> */}
      <nav className={cxNav}>{width < 1024 ? <HeaderMobile /> : <HeaderDesktop />}</nav>
    </>
  );
}
