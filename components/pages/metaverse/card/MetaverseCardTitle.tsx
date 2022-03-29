import Image, { externaImageLoader } from 'components/display/image/CustomImage';
import { FC } from 'react';
import { Flex, Heading, Stack } from '@whammytechvn/wt-components';

import clsxm from 'utils/clsxm';

export interface MetaverseCardTitleProps {
  title: string;
  logo: string;
}

const MetaverseCardTitle: FC<MetaverseCardTitleProps> = ({ title, logo }) => {
  return (
    <Stack className="rounded-[2rem] h-40 w-full bgg-teal divide-x-[3px] p-4 py-8 lg:p-8 lg:py-4">
      <Flex className="items-center justify-center pr-4 lg:pr-8 relative h-full w-full max-w-[8.5rem]">
        <Image loader={externaImageLoader} alt="Logo Title" src={logo} width={85} height={85} />
      </Flex>
      <Heading as="h1" className={clsxm('!text-xl lg:!text-[3.6rem] leading-snug uppercase pl-4 lg:pl-8')}>
        {title}
      </Heading>
    </Stack>
  );
};

export default MetaverseCardTitle;
