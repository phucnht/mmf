// import BackgroundHeaderShadow from 'components/bg/BackgroundHeaderShadow';
import HeaderLogo from './components/HeaderLogo';
import HeaderNav from './components/HeaderNav';
import useWindowSize from 'hooks/useWindowSize';
import HeaderButtonHamburger from './components/HeaderButtonHamburger';
import HeaderButtonUser from './components/HeaderButtonUser';
import clsxm from 'utils/clsxm';
import { useRouter } from 'next/router';

const HeaderDesktop = () => {
  return (
    <>
      <HeaderLogo />
      <HeaderNav />
    </>
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
  const windowSize = useWindowSize();
  const { pathname } = useRouter();

  const cxNav = clsxm(
    'z-40 grid grid-cols-3 lg:flex items-center justify-between !py-0 bg-black/30 p-[3%] fixed top-0 w-full',
    { relative: pathname !== '/' }
  );

  return (
    <>
      {/* <BackgroundHeaderShadow /> */}
      <nav className={cxNav}>{windowSize?.width < 1024 ? <HeaderMobile /> : <HeaderDesktop />}</nav>
    </>
  );
}
