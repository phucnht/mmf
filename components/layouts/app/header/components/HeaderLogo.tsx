import logo from 'public/assets/logos/logo.png';

import { Box } from '@whammytechvn/wt-components';

import Link from 'next/link';
import Image from 'components/display/image/Image';

export default function HeaderLogo() {
  return (
    <Box className="relative h-full w-full min-w-[12rem] max-w-full xl:min-w-[18rem] xl:max-w-[35rem] text-center">
      <Box className="cursor-pointer hidden relative h-full lg:block">
        <Link href="/" passHref>
          <Image alt="Idle Glory" src={logo} />
        </Link>
      </Box>
      <Box className="cursor-pointer block lg:hidden relative w-full h-full">
        <Link href="/" passHref>
          <Image alt="Idle Glory" src={logo} />
        </Link>
      </Box>
    </Box>
  );
}
