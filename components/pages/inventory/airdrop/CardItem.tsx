import { Box, Flex, Text } from '@whammytechvn/wt-components';
import classNames from 'classnames';
import Image from 'components/display/image/Image';
import { ReactNode } from 'react';

export interface CardItemProps {
  imgSrc?: StaticImageData | undefined;
  className?: string;
  content?: string;
  children?: ReactNode;
}

export default function CardItem({ imgSrc, className, content, children }: CardItemProps) {
  const cxCardWrapper = classNames('flex-col h-[42rem] max-w-[48rem] items-center justify-center', className);
  const renderContent = children || <Text>{content}</Text>;

  return (
    <Box className="w-full">
      <Flex className={cxCardWrapper}>
        {imgSrc && <Image alt={content} src={imgSrc} />}
        <Box className="text-2xl font-bold">{renderContent}</Box>
      </Flex>
    </Box>
  );
}
