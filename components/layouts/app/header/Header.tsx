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
      <HeaderButtonHamburger />
      <HeaderLogo />
      <HeaderButtonUser />
    </>
  );
};

export default function Header() {
  const windowSize = useWindowSize();

  return (
    <>
      <BackgroundHeaderShadow />
      <nav className="z-40 layout grid grid-cols-4 gap-x-6 relative my-4 !px-0">
        {windowSize?.width < 960 ? <HeaderMobile /> : <HeaderDesktop />}
      </nav>
    </>
  );
}
