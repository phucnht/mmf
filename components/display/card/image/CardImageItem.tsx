import { Box, Flex, Stack, Text } from '@whammytechvn/wt-components';
import classNames from 'classnames';
import Canvas3D from 'components/3d/Canvas3D';
import { ReactNode } from 'react';
import { ObjectProps } from 'utils/types';

export interface CardImageItemProps {
  item: ObjectProps;
  className?: string;
  children?: ReactNode;
}

export default function CardImageItem({ item, className, children }: CardImageItemProps) {
  const cxCardWrapper = classNames('w-full flex-col h-[42rem] max-w-[48rem] items-center justify-center', className);
  const renderContent = children || <Text>{item.name}</Text>;
  const { external } = item;

  return (
    <Flex className={cxCardWrapper}>
      {external && (
        <Canvas3D url={external.modelUrl} urlTexture={external.uvUrl} alt={item.name} imgFallback={external.iconUrl} />
      )}
      <Stack className="flex-col justify-center w-full gap-7 mt-4">
        <Box className="text-2xl font-bold">{renderContent}</Box>
        <Text className={'bg-blue-100 text-md font-black py-3 px-6 rounded-[2rem] flex items-center'}>
          #{item.tokenId}
        </Text>
      </Stack>
    </Flex>
  );
}
