import { Box, Flex, Stack, Text } from '@whammytechvn/wt-components';
import classNames from 'classnames';
import Image from 'components/display/image/Image';
import { ReactNode } from 'react';
import imgClothes from '/public/assets/items/items/clothes.png';

export interface CardImageItemProps {
  id?: string;
  name?: string;
  imgSrc?: StaticImageData | undefined;
  className?: string;
  children?: ReactNode;
}

export default function CardImageItem({ imgSrc, className, id, name, children }: CardImageItemProps) {
  const cxCardWrapper = classNames('w-full flex-col h-[42rem] max-w-[48rem] items-center justify-center', className);
  const renderContent = children || <Text>{name}</Text>;

  return (
    <Flex className={cxCardWrapper}>
      <Image alt={name} src={imgSrc || imgClothes} />
      <Stack className="flex-col justify-center w-full gap-7">
        <Box className="text-[4.8rem] font-black">{renderContent}</Box>
        <Text className={'bg-blue-100 text-md font-black py-3 px-6 rounded-[2rem]'}>#{id}</Text>
      </Stack>
    </Flex>
  );
}
