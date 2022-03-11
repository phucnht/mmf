import Image from 'components/display/image/Image';
import { FC } from 'react';
import { Flex, Heading, Stack } from '@whammytechvn/wt-components';

import imgLogoSmall from 'public/assets/logos/logo-sm.png';
import clsxm from 'utils/clsxm';

export interface MetaverseCardTitleProps {
  title: string;
}

const MetaverseCardTitle: FC<MetaverseCardTitleProps> = ({ title }) => (
  <Stack className="rounded-[2rem] h-40 w-full bgg-teal divide-x-[3px] p-4 py-8 lg:p-8 lg:py-4">
    <Flex className="items-center justify-center pr-4 lg:pr-8 relative h-full w-full max-w-[8.5rem]">
      <Image alt="Logo Title" src={imgLogoSmall} />
    </Flex>
    <Heading as="h1" className={clsxm('!text-xl lg:!text-[3.6rem] leading-snug uppercase pl-4 lg:pl-8')}>
      {title}
    </Heading>
  </Stack>
);

export default MetaverseCardTitle;
