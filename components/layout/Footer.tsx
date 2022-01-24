import NextLink from "next/link";
import Link from "../navigation/Link";

const Footer = () => {
  return (
    <footer className="absolute bottom-0 left-0 w-full h-24 flex justify-between items-center bg-black bg-opacity-40 font-black text-white px-16">
      <NextLink href="/" passHref>
        <Link>http://www.mymetafarm.com</Link>
      </NextLink>
      <ul className="flex gap-24">
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
