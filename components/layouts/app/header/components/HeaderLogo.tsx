import logo from 'public/assets/logos/logo.png';

import { Box } from '@whammytechvn/wt-components';

import Link from 'next/link';
import Image from 'components/display/image/Image';

export default function HeaderLogo() {
  return (
    <Box className="relative w-full min-w-[12rem] max-w-[24rem] xl:min-w-[18rem] xl:max-w-[35rem] text-center">
      <Box className="absolute cursor-pointer">
        <Link href="/" passHref>
          <Image alt="Idle Glory" src={logo} />
        </Link>
      </Box>
    </Box>
  );
}
