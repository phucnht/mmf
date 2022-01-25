import { Button, Scaffold } from '@whammytechvn/wt-components';
import Image from 'next/image';
import NavLink from '../navigation/NavLink';
import { useRouter } from 'next/router';
import logo from '/public/assets/logo.png';
import ButtonLogin from '../controls/button/ButtonLogin';
const Header = () => {
  const router = useRouter();

  const goToHome = () => {
    router.push('/');
  };

  return (
    <Scaffold.Header className="header-nav">
      <Image alt="Idle Glory" src={logo} onClick={goToHome} className="hover:cursor-pointer" />
      <ul className="ml-4 flex items-baseline gap-x-2">
        <NavLink href="/" exact content="Home" />
        <NavLink href="/dashboard" content="Dashboard" />
        <NavLink href="/marketplace" content="Marketplace" />
        <NavLink href="/airdrop" content="Airdrop" />
        <NavLink href="/document" content="Document" />
        <ButtonLogin />
      </ul>
    </Scaffold.Header>
  );
};

export default Header;
