import Image from 'next/image';

import logo from '/public/assets/logo.png';

import { Box, Scaffold } from '@whammytechvn/wt-components';
import NavLink from 'components/navigation/NavLink';

import HeaderButtonUser from './HeaderButtonUser';
import Link from 'next/link';

const Header = () => {
  return (
    <>
      <Box className="absolute z-30 bgg-green h-40 w-full" />
      <Scaffold.Header className="relative">
        <Link href="/">
          <Image alt="Idle Glory" src={logo} className="hover:cursor-pointer" />
        </Link>
        <ul className="ml-4 flex items-baseline gap-x-2">
          <NavLink href="/" exact content="Home" />
          <NavLink href="/dashboard" content="Dashboard" />
          <NavLink href="/marketplace" content="Marketplace" />
          <NavLink href="/airdrop" content="Airdrop" />
          <NavLink href="/document" content="Document" />
          <HeaderButtonUser />
        </ul>
      </Scaffold.Header>
    </>
  );
};

export default Header;
