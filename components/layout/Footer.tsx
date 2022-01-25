import { Scaffold } from '@whammytechvn/wt-components';
import NextLink from 'next/link';
import Link from '../navigation/Link';

const Footer = () => {
  return (
    <Scaffold.Footer>
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
    </Scaffold.Footer>
  );
};

export default Footer;
