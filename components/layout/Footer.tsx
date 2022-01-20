import { Button } from "@whammytechvn/wt-components";
import NextLink from "next/link";
import Link from "../navigation/Link";

const Footer = () => {
  return (
    <footer>
      <NextLink href="/" passHref>
        <Link>http://mymetafarm.com</Link>
      </NextLink>
      <ul
        className={`w-full h-[6.7rem] shrink-0 mt-40 max-w-full flex justify-center items-center flex-wrap gap-12 bg-gradient-to-r from-[#0000000D] via-[#00000080] to-[#0000000D]`}
      >
        <NextLink href="/contact" passHref>
          <Link>Contact</Link>
        </NextLink>
        <NextLink href="/help" passHref>
          <Link>Get help</Link>
        </NextLink>
        <NextLink href="/marketplace" passHref>
          <Link>Marketplace</Link>
        </NextLink>
        <NextLink href="/buy-token" passHref>
          <Link>Buy Token</Link>
        </NextLink>
      </ul>
    </footer>
  );
};

export default Footer;
