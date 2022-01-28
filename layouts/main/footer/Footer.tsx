import { Scaffold } from '@whammytechvn/wt-components';
import Link from 'components/navigation/Link';
import NextLink from 'next/link';

const Footer = () => {
  return (
    <Scaffold.Footer className="grid grid-cols-4 text-md relative bg-black/40 mt-32 px-12">
      <Link href="http://www.mymetafarm.com" target="_blank" rel="noopener">
        http://www.mymetafarm.com
      </Link>
      <ul className="flex justify-end gap-24 col-span-3">
        <NextLink href="/contact" passHref>
          <Link>Contact</Link>
        </NextLink>
        <NextLink href="/help" passHref>
          <Link>Get help</Link>
        </NextLink>
        <NextLink href="/marketplace" passHref>
          <Link>Marketplace</Link>
        </NextLink>
        <NextLink href="/token" passHref>
          <Link>Buy Token</Link>
        </NextLink>
      </ul>
    </Scaffold.Footer>
  );
};

export default Footer;
