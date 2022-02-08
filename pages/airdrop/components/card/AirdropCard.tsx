import { Box, Center, Flex, Grid } from '@whammytechvn/wt-components';
import Image from 'components/display/Image';
import AirdropCardContent from './AirdropCardContent';
import AirdropCardTitle from './AirdropCardTitle';

export interface AirdropCardProps {
  content: string;
  conditions: string;
  imgSrc: StaticImageData | string;
  imgAlt: string;
  imgSubSrc: StaticImageData | string;
  imgSubAlt: string;
}

const AirdropCard = ({ content, conditions, imgSrc, imgAlt, imgSubSrc, imgSubAlt }: AirdropCardProps) => {
  return (
    <Grid className="grid-cols-11 gap-4 text-white text-xl font-bold">
      <Flex className="flex-col col-span-6 gap-4">
        <AirdropCardTitle title="My Meta Farm" />
        <AirdropCardContent content={content} conditions={conditions} />
      </Flex>
      <Center className="col-span-5 flex justify-center items-center relative">
        <Image src={imgSrc} alt={imgAlt} height={776} />
        <Box className="absolute left-12 2xl:left-24 bottom-4">
          <Image src={imgSubSrc} alt={imgSubAlt} />
        </Box>
      </Center>
    </Grid>
  );
};

export default AirdropCard;
