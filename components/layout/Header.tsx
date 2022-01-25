import { Box, Button, ButtonImage, Scaffold } from '@whammytechvn/wt-components';
import Image from 'next/image';
import NavLink from '../navigation/NavLink';
import { useRouter } from 'next/router';
import logo from '/public/assets/logo.png';

const Header = () => {
  const router = useRouter();

  const goToHome = () => {
    router.push('/');
  };

  return (
    <>
      <Box className="absolute z-30 header-nav h-40 w-full" />
      <Scaffold.Header className="relative">
        <Image alt="Idle Glory" src={logo} onClick={goToHome} className="hover:cursor-pointer" />
        <ul className="ml-4 flex items-baseline gap-x-2">
          <NavLink href="/" exact content="Home" />
          <NavLink href="/dashboard" content="Dashboard" />
          <NavLink href="/marketplace" content="Marketplace" />
          <NavLink href="/airdrop" content="Airdrop" />
          <NavLink href="/document" content="Document" />
          <ButtonImage imgSrc="/assets/login.png" className="h-[10rem] w-[19.3rem] pt-6">
            Login
          </ButtonImage>
        </ul>
      </Scaffold.Header>
    </>
  );
};

export default Header;
