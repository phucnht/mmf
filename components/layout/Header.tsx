import { Button } from "@whammytechvn/wt-components";
import Image from "next/image";
import NavLink from "../navigation/NavLink";
import { useRouter } from "next/router";
import logo from "/public/assets/logo.png";
import ButtonLogin from "../controls/button/ButtonLogin";
import Link from "next/link";
interface HeaderNavLinkProps {
  path: string;
  content: string;
}

const HeaderNavLink = ({ path, content }: HeaderNavLinkProps) => (
  <NavLink href={path}>
    <Button
      color="primary"
      content={content}
      className="w-36 h-12 uppercase hover:text-[#722828]"
    />
  </NavLink>
);

const Header = () => {
  const router = useRouter();

  const goToHome = () => {
    router.push("/");
  };

  return (
    <nav
      className={`header-nav fixed z-40 w-full h-48 flex justify-between items-start px-12`}
    >
      <Link href="/" passHref>
        <Image
          alt="Idle Glory"
          src={logo}
          onClick={goToHome}
          className="hover:cursor-pointer"
        />
      </Link>
      <ul className="ml-4 flex items-baseline gap-x-2">
        <HeaderNavLink path="/" content="Home" />
        <HeaderNavLink path="/dashboard" content="Dashboard" />
        <HeaderNavLink path="/marketplace" content="Marketplace" />
        <HeaderNavLink path="/airdrop" content="Airdrop" />
        <HeaderNavLink path="/document" content="Document" />
        <ButtonLogin />
      </ul>
    </nav>
  );
};

export default Header;
