import { Button } from "@whammytechvn/wt-components";
import Image from "next/image";
import NavLink from "../navigation/NavLink";
import { useRouter } from "next/router";
import logo from "/public/assets/logo.png";

const Header = () => {
  const router = useRouter();

  const goToHome = () => {
    router.push("/");
  };

  return (
    <nav
      className={`fixed z-40 w-full max-w-full max-h-32 px-6 flex justify-items-start items-center bg-[#11131b]`}
    >
      <Image alt="Idle Glory" src={logo} onClick={goToHome} />
      <ul className="ml-4 flex gap-x-4">
        <NavLink href="/">
          <Button color="primary" content="Dashboard" />
        </NavLink>
        <NavLink href="/marketplace">
          <Button color="primary" content="Marketplace" />
        </NavLink>
        <NavLink href="/marketplace">
          <Button color="primary" content="Buy Box" />
        </NavLink>
        <NavLink href="/airdrop">
          <Button color="primary" content="Inventory" />
        </NavLink>
        <NavLink href="/document">
          <Button color="primary" content="Document" />
        </NavLink>
        <Button className="ml-auto" content="Login" />
      </ul>
    </nav>
  );
};

export default Header;
