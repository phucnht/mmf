import { Box, Flex, Stack, Text } from '@whammytechvn/wt-components';
import classNames from 'classnames';
import Canvas3D from 'components/3d/Canvas3D';
// import Image from 'components/display/image/Image';
import { ReactNode } from 'react';
// import imgClothes from 'public/assets/items/items/clothes.png';
// import ReactPlayer from 'react-player';

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
      {/* <Image alt={name} src={imgSrc || imgClothes} /> */}
      {/* <ReactPlayer
        url="/assets/img-video/item.mp4"
        style={{ borderRadius: '2rem' }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        width="100%"
        height="100%"
        loop={true}
        playing={true}
        controls={false}
        muted
      /> */}
      <Canvas3D />
      <Stack className="flex-col justify-center w-full gap-7 mt-4">
        <Box className="text-[4.8rem] font-black">{renderContent}</Box>
        <Text className={'bg-blue-100 text-md font-black py-3 px-6 rounded-[2rem] flex items-center'}>#{id}</Text>
      </Stack>
    </Flex>
  );
}
