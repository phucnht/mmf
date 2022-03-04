import { Box, Flex, Stack, Text } from '@whammytechvn/wt-components';
import Image from 'components/display/image/Image';
import { IconStarList } from 'components/icon/IconStar';
import { ReactNode } from 'react';
import CardTitleBanner from '../title/CardTitleBanner';
import imgLand from 'public/assets/items/lands/land-2.png';

export interface CardImageLandProps {
  id?: string;
  name?: string;
  imgSrc?: StaticImageData | undefined;
  className?: string;
  children?: ReactNode;
}

export default function CardImageLand({ name, imgSrc }: CardImageLandProps) {
  return (
    <Box className="w-full">
      <Flex className="absolute flex-col items-start gap-2">
        <IconStarList count={3} withBg />
        <Text className="text-md">Breed count: {3}</Text>
      </Flex>
      <Box className="h-[28.8rem] m-auto">
        <Image alt={name} src={imgSrc || imgLand} />
      </Box>
      <Stack className="w-full flex-col items-center">
        <CardTitleBanner content={name} className="w-full" />
      </Stack>
    </Box>
  );
}
