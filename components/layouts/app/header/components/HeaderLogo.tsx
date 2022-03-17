import logo from 'public/media/header/logo.png';

import { Box } from '@whammytechvn/wt-components';

import Link from 'next/link';
import Image from 'components/display/image/CustomImage';

export default function HeaderLogo() {
  return (
    <Box className="h-full text-center relative cursor-pointer">
      <Link href="/" passHref>
        <Image alt="Idle Glory" src={logo} />
      </Link>
    </Box>
  );
}
