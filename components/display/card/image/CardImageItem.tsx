import { Box, Flex, Stack, Text } from '@whammytechvn/wt-components';
import classNames from 'classnames';
import Canvas3D from 'components/3d/Canvas3D';
import { ReactNode } from 'react';
import { ObjectProps } from 'utils/types';

export interface CardImageItemProps {
  item: ObjectProps;
  external?: ObjectProps;
  className?: string;
  children?: ReactNode;
}

export default function CardImageItem({ item, external, className, children }: CardImageItemProps) {
  const cxCardWrapper = classNames('w-full flex-col h-[42rem] max-w-[48rem] items-center justify-center', className);
  const renderContent = children || <Text>{item.name}</Text>;

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
      {external && (
        <Canvas3D
          url={external.model_url}
          urlTexture={external.uv_url}
          alt={item.name}
          imgFallback={external.background_url}
        />
      )}
      <Stack className="flex-col justify-center w-full gap-7 mt-4">
        <Box className="text-[4.8rem] font-black">{renderContent}</Box>
        <Text className={'bg-blue-100 text-md font-black py-3 px-6 rounded-[2rem] flex items-center'}>
          #{item.tokenId}
        </Text>
      </Stack>
    </Flex>
  );
}
