import { Box, Center, Flex, Grid } from '@whammytechvn/wt-components';
import Image from 'components/display/image/Image';
import { AirdropEventDto } from 'store/market/airdrop-event/airdropEvent.i';
import MetaverseCardDescription from './MetaverseCardDescription';
import MetaverseCardTitle from './MetaverseCardTitle';

import imgMetaverseBackground from '/public/assets/metaverse/metaverse-card-1.png';
import imgMetaverseItem from '/public/assets/metaverse/metaverse-card-sub-1.png';

export interface MetaverseCardProps {
  metaverse: AirdropEventDto;
}

export default function MetaverseCard({ metaverse }: MetaverseCardProps) {
  return (
    <Grid className="grid-cols-11 gap-4 text-white text-xl font-bold">
      <Flex className="flex-col col-span-6 gap-4">
        <MetaverseCardTitle title={metaverse.name} />
        <MetaverseCardDescription
          onchainId={metaverse.onchainId}
          description={metaverse.description}
          condition={metaverse.condition}
          fromDate={metaverse.fromDate}
          toDate={metaverse.toDate}
          whitelistContract={metaverse.whitelistContract}
        />
      </Flex>
      <Center className="col-span-5 flex justify-center items-center relative">
        {/* <Image
          src={metaverse.backgroundImage}
          alt={metaverse.description}
          width={638}
          height={776}
          className="rounded-[2rem]"
          isExternal
        /> */}
        <Image src={imgMetaverseBackground} alt={metaverse.description} className="rounded-[2rem]" />
        <Box className="absolute left-12 lg:left-1 xl:left-2 2xl:left-4 bottom-4">
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
      </Center>
    </Grid>
  );
}
