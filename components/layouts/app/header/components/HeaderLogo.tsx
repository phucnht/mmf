import logo from 'public/media/header/logo.png';

import { Box } from '@whammytechvn/wt-components';

import Link from 'next/link';
import Image from 'components/display/image/CustomImage';

export default function HeaderLogo() {
  return (
    <Box className="h-8rem lg:h-full text-center relative cursor-pointer">
      <Link href="/" passHref>
        <Image alt="My Meta Farm" src={logo} />
      </Link>
    </Box>
  );
}
