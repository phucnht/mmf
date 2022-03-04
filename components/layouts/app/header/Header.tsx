import logo from '/public/assets/logos/logo.png';

import { Box, Scaffold } from '@whammytechvn/wt-components';
import NavLink from 'components/navigation/link/NavLink';

import Link from 'next/link';
import Image from 'components/display/image/Image';
import HeaderButtonUser from './components/HeaderButtonUser';
import BackgroundHeaderShadow from 'components/bg/BackgroundHeaderShadow';
import { isProduction } from 'utils/networks';

const Header = () => {
  return (
    <>
      <BackgroundHeaderShadow />
      <Scaffold.Header className="container xl:max-w-[132rem] grid grid-cols-4 relative !px-0 mb-4">
        <Box className="relative min-w-[18rem] max-w-[35rem] w-full text-center">
          <Box className="absolute cursor-pointer">
            <Link href="/" passHref>
              <Image alt="Idle Glory" src={logo} />
            </Link>
          </Box>
        </Box>
        <ul className="w-full col-span-3 flex gap-x-2 justify-end items-baseline">
          <NavLink href="/" exact content="Home" />
          <NavLink disabled={isProduction} href="/dashboard/box" content="Dashboard" />
          <NavLink href="/marketplace/items" content="Marketplace" />
          <NavLink href="/metaverse" content="Metaverse" />
          <NavLink disabled href="/document" content="Document" />
          <HeaderButtonUser />
        </ul>
      </Scaffold.Header>
    </>
  );
};

export default Header;
