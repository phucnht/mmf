import Image from 'components/display/image/Image';
import { FC } from 'react';
import { Box, Heading, Stack } from '@whammytechvn/wt-components';

import imgLogoSmall from 'public/assets/logos/logo-sm.png';

export interface MetaverseCardTitleProps {
  title: string;
}

const MetaverseCardTitle: FC<MetaverseCardTitleProps> = ({ title }) => (
  <Stack className="rounded-[2rem] h-40 w-full bgg-teal divide-x-[3px] px-8">
    <Box className="pr-8">
      <Image alt="Logo Title" src={imgLogoSmall} />
    </Box>
    <Heading as="h1" className="text-[3.6rem] leading-snug uppercase pl-8">
      {title}
    </Heading>
  </Stack>
);

export default MetaverseCardTitle;
