import { Box, Center, Flex, Grid } from '@whammytechvn/wt-components';
import Image from 'components/display/image/Image';
import { AirdropEventDto } from 'store/market/airdrop-event/airdropEvent.i';
import MetaverseCardDescription from './MetaverseCardDescription';
import MetaverseCardTitle from './MetaverseCardTitle';

import imgMetaverseBackground from 'public/assets/metaverse/metaverse-card-1.png';
import imgMetaverseBackgroundMobile from 'public/assets/metaverse/metaverse-card-mobile.png';
import imgMetaverseItem from 'public/assets/metaverse/metaverse-card-sub-1.png';

export interface MetaverseCardProps {
  metaverse: AirdropEventDto;
}

export default function MetaverseCard({ metaverse }: MetaverseCardProps) {
  const metaverseCardImage = (
    <>
      {/* <Image
    src={metaverse.backgroundImage}
    alt={metaverse.description}
    width={638}
    height={776}
    className="rounded-[2rem]"
    isExternal
  /> */}
      <Image src={imgMetaverseBackground} alt={metaverse.description} className="rounded-[2rem]" />
      <Box className="absolute left-12 bottom-0 lg:left-4 2xl:left-4 w-1/2 h-1/2">
        {/* <Image
      src={metaverse.itemImage}
      alt={metaverse.description}
      width={300}
      height={360}
      className="rounded-[2rem]"
      isExternal
    /> */}
        <Image src={imgMetaverseItem} alt={metaverse.description} className="rounded-[2rem]" />
      </Box>
    </>
  );

  const metaverseCardImageMobile = (
    <>
      {/* <Image
    src={metaverse.backgroundImage}
    alt={metaverse.description}
    width={638}
    height={776}
    className="rounded-[2rem]"
    isExternal
  /> */}
      <Image
        src={imgMetaverseBackgroundMobile}
        alt={metaverse.description}
        layout="fill"
        objectFit="cover"
        className="rounded-[2rem]"
      />
      <Box className="absolute left-2 bottom-2 lg:bottom-0 lg:left-4 2xl:left-4 w-1/2 h-full max-w-[16rem] max-h-64 lg:w-1/2 lg:h-1/2">
        {/* <Image
      src={metaverse.itemImage}
      alt={metaverse.description}
      width={300}
      height={360}
      className="rounded-[2rem]"
      isExternal
    /> */}
        <Image
          src={imgMetaverseItem}
          alt={metaverse.description}
          layout="fill"
          objectFit="cover"
          className="rounded-[2rem]"
        />
      </Box>
    </>
  );

  return (
    <Grid className="w-full lg:grid-cols-11 gap-4 text-white text-xl font-bold">
      <Flex className="flex-col col-span-6 gap-4">
        <MetaverseCardTitle title={metaverse.name} />
        <Center className="flex lg:hidden justify-center items-center relative h-full w-full max-h-[17rem]">
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
      <Center className="hidden lg:flex col-span-5 justify-center items-center relative">{metaverseCardImage}</Center>
    </Grid>
  );
}
