// import BackgroundHeaderShadow from 'components/bg/BackgroundHeaderShadow';
import HeaderLogo from './components/HeaderLogo';
import HeaderNav from './components/HeaderNav';
import useWindowSize from 'hooks/useWindowSize';
import HeaderButtonHamburger from './components/HeaderButtonHamburger';
import HeaderButtonUser from './components/HeaderButtonUser';

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

  return (
    <>
      {/* <BackgroundHeaderShadow /> */}
      <nav className="z-40 flex items-center justify-between py-2 bg-black/30 p-[3%] fixed top-0 w-full">
        {windowSize?.width < 1024 ? <HeaderMobile /> : <HeaderDesktop />}
      </nav>
    </>
  );
}
