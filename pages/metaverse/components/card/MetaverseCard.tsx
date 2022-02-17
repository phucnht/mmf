import { Box, Center, Flex, Grid } from '@whammytechvn/wt-components';
import Image from 'components/display/image/Image';
import MetaverseCardDescription from './MetaverseCardDescription';
import MetaverseCardTitle from './MetaverseCardTitle';

export interface MetaverseCardProps {
  name: string;
  description: string;
  condition: string;
  bgImgSrc: StaticImageData | string;
  bgImgAlt: string;
  itemImgSrc: StaticImageData | string;
  itemImgAlt: string;
}

const MetaverseCard = ({
  name,
  description,
  condition,
  bgImgSrc,
  bgImgAlt,
  itemImgSrc,
  itemImgAlt
}: MetaverseCardProps) => {
  return (
    <Grid className="grid-cols-11 gap-4 text-white text-xl font-bold">
      <Flex className="flex-col col-span-6 gap-4">
        <MetaverseCardTitle title={name} />
        <MetaverseCardDescription description={description} condition={condition} />
      </Flex>
      <Center className="col-span-5 flex justify-center items-center relative">
        <Image src={bgImgSrc} alt={bgImgAlt} width={638} height={776} />
        <Box className="absolute left-12 2xl:left-24 bottom-4">
          <Image src={itemImgSrc} alt={itemImgAlt} width={300} height={360} />
        </Box>
      </Center>
    </Grid>
  );
};

export default MetaverseCard;
