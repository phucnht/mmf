import Image from 'next/image';

import logo from '/public/assets/logo.png';

import { Box, Scaffold } from '@whammytechvn/wt-components';
import NavLink from 'components/navigation/NavLink';

import HeaderButton from './components/HeaderButton';
import Link from 'next/link';

const Header = () => {
  return (
    <>
      <Box className="absolute z-30 bgg-green h-40 w-full" />
      <Scaffold.Header className="container grid grid-cols-4 relative px-0">
        <Box className="min-w-[18rem] max-w-[35rem] w-full text-center">
          <Link href="/">
            <Image alt="Idle Glory" src={logo} className="hover:cursor-pointer" />
          </Link>
        </Box>
        <ul className="w-full col-span-3 flex gap-x-2 justify-end items-baseline">
          <NavLink href="/" exact content="Home" />
          <NavLink href="/dashboard" content="Dashboard" />
          <NavLink href="/marketplace" content="Marketplace" />
          <NavLink href="/airdrop" content="Airdrop" />
          <NavLink href="/document" content="Document" />
          <HeaderButton />
        </ul>
      </Scaffold.Header>
    </>
  );
};

export default Header;
