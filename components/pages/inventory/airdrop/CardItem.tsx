/* eslint-disable jsx-a11y/media-has-caption */
import { Box, Flex, Stack, Text } from '@whammytechvn/wt-components';
import classNames from 'classnames';
// import Image from 'components/display/image/Image';
import { ReactNode } from 'react';
import ReactPlayer from 'react-player';

export interface CardItemProps {
  imgSrc?: StaticImageData | undefined;
  className?: string;
  name?: string;
  id?: string;
  children?: ReactNode;
}

export default function CardItem({ imgSrc, className, name, id, children }: CardItemProps) {
  const cxCardWrapper = classNames('flex-col h-[42rem] max-w-[48rem] items-center justify-center', className);
  const renderContent = children || <Text className="text-center">{name}</Text>;

  return (
    <Box className="w-full">
      <Flex className={cxCardWrapper}>
        {/* <Image alt={content} src={imgSrc} /> */}
        <ReactPlayer
          url="/assets/img-video/item.mp4"
          style={{ borderRadius: '2rem' }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          width="100%"
          height="100%"
          loop={true}
          playing={true}
          controls={false}
          muted
        />
        <Stack className="flex-col justify-center w-full gap-7">
          <Box className="text-2xl font-bold">{renderContent}</Box>
          <Text className={'bg-blue-100 text-md font-black py-3 px-6 rounded-[2rem]'}>#{id}</Text>
        </Stack>
      </Flex>
    </Box>
  );
}
