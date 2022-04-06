import { Box, Center, Flex, Grid } from '@whammytechvn/wt-components';
import Image, { externaImageLoader } from 'components/display/image/CustomImage';
import { AirdropEventDto } from 'store/market/airdrop-event/airdropEvent.i';
import MetaverseCardDescription from './MetaverseCardDescription';
import MetaverseCardTitle from './MetaverseCardTitle';

// import imgMetaverseBackground from 'public/assets/metaverse/metaverse-card-1.png';
// import imgMetaverseBackgroundMobile from 'public/assets/metaverse/metaverse-card-mobile.png';
// import imgMetaverseItem from 'public/assets/metaverse/metaverse-card-sub-1.png';
import CustomImage from 'components/display/image/CustomImage';

export interface MetaverseCardProps {
  metaverse: AirdropEventDto;
}

export default function MetaverseCard({ metaverse }: MetaverseCardProps) {
  const metaverseCardImage = (
    <Box className="relative w-full h-full min-h-[60rem] bg-gray-100/30 border-[3px] border-gray-300 rounded-[2rem]">
      <CustomImage
        loader={externaImageLoader}
        src={metaverse.backgroundImage}
        alt={metaverse.description}
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        unoptimized={true}
      />
      <Box className="absolute left-12 bottom-0 lg:left-4 lg:bottom-4 w-1/2 h-1/2 bg-blue-100/90 border-[3px] border-blue-300 rounded-[2rem]">
        <CustomImage
          loader={externaImageLoader}
          src={metaverse.itemImage}
          alt={metaverse.description}
          layout="fill"
          objectFit="contain"
          placeholder="blur"
          unoptimized={true}
        />
      </Box>
    </Box>
  );

  const metaverseCardImageMobile = (
    <>
      <Image
        loader={externaImageLoader}
        src={metaverse.backgroundImage}
        alt={metaverse.description}
        layout="fill"
        objectFit="cover"
        className="rounded-[2rem]"
        unoptimized={true}
      />
      <Box className="absolute left-1 lg:bottom-0 lg:left-4 2xl:left-4 w-1/2 h-full max-w-[16rem] max-h-64 lg:w-1/2 lg:h-1/2">
        <Image
          loader={externaImageLoader}
          src={metaverse.itemImage}
          alt={metaverse.description}
          layout="fill"
          objectFit="cover"
          className="rounded-[2rem]"
          unoptimized={true}
        />
      </Box>
    </>
  );

  return (
    <Grid className="w-full lg:grid-cols-11 gap-4 text-white text-xl font-bold">
      <Flex className="flex-col lg:col-span-6 gap-4">
        <MetaverseCardTitle title={metaverse.name} logo={metaverse.logo} />
        <Center className="flex lg:hidden justify-center items-center relative w-full h-full min-h-[12.5rem]">
          {metaverseCardImageMobile}
        </Center>
        <MetaverseCardDescription
          onchainId={metaverse.onchainId}
          description={metaverse.description}
          condition={metaverse.condition}
          fromDate={metaverse.fromDate}
          toDate={metaverse.toDate}
          whitelistContract={metaverse.whitelistContract}
        />
      </Flex>
      <Center className="hidden lg:flex lg:col-span-5 justify-center items-center relative">
        {metaverseCardImage}
      </Center>
    </Grid>
  );
}
