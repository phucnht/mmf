import { Scaffold } from '@whammytechvn/wt-components';

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
      <Scaffold.Header className="layout flex justify-between relative my-4">
        {windowSize?.width < 960 ? <HeaderMobile /> : <HeaderDesktop />}
      </Scaffold.Header>
    </>
  );
}
