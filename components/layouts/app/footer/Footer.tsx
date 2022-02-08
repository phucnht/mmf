import { Grid, Scaffold } from '@whammytechvn/wt-components';
import Link from 'components/navigation/link/Link';
import NextLink from 'next/link';

const Footer = () => {
  return (
    <Scaffold.Footer className="bg-black/40">
      <Grid className="container grid-cols-4 text-md">
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
      </Grid>
    </Scaffold.Footer>
  );
};

export default Footer;
