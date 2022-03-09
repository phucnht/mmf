import BackgroundHeaderShadow from 'components/bg/BackgroundHeaderShadow';
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
      <BackgroundHeaderShadow />
      <nav className="z-40 items-center lg:items-start layout grid grid-cols-4 gap-x-6 relative my-4 !px-0">
        {windowSize?.width < 1024 ? <HeaderMobile /> : <HeaderDesktop />}
      </nav>
    </>
  );
}
