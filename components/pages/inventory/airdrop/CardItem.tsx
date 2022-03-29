/* eslint-disable jsx-a11y/media-has-caption */
import { Box, Flex, Stack, Text } from '@whammytechvn/wt-components';
import classNames from 'classnames';
import Canvas3D from 'components/3d/Canvas3D';
// import Image from 'components/display/image/Image';
import { ReactNode } from 'react';
import { NftItemDto } from 'store/market/nft-item/nftItem.i';

// import ReactPlayer from 'react-player';

export interface CardItemProps {
  item: NftItemDto;
  className?: string;
  children?: ReactNode;
}

export default function CardItem({ item, className, children }: CardItemProps) {
  const cxCardWrapper = classNames('flex-col h-[42rem] max-w-[48rem] items-center justify-center', className);
  const renderContent = children || <Text className="text-center">{item.name}</Text>;
  const { external } = item;

  return (
    <Box className="w-full">
      <Flex className={cxCardWrapper}>
        {/* <Image alt={content} src={imgSrc} /> */}
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
        <Canvas3D
          url={external.modelUrl}
          urlTexture={external.uvUrl}
          alt={item.name}
          imgFallback={external.backgroundUrl}
        />
        <Stack className="flex-col justify-center w-full gap-7 mt-4">
          <Box className="text-2xl font-bold">{renderContent}</Box>
          <Text className={'bg-blue-100 text-md font-black py-3 px-6 rounded-[2rem] flex items-center'}>
            #{item.tokenId}
          </Text>
        </Stack>
      </Flex>
    </Box>
  );
}
