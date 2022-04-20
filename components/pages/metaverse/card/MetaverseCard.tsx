import { Center } from '@whammytechvn/wt-components';
import { default as CustomImage, default as Image, externaImageLoader } from 'components/display/image/CustomImage';
import { AirdropEventDto } from 'store/market/airdrop-event/airdropEvent.i';
import MetaverseCardDescription from './MetaverseCardDescription';
import MetaverseCardTitle from './MetaverseCardTitle';

export interface MetaverseCardProps {
  metaverse: AirdropEventDto;
}

export default function MetaverseCard({ metaverse }: MetaverseCardProps) {
  const metaverseCardImage = (
    <CustomImage
      loader={externaImageLoader}
      src={metaverse.backgroundImage}
      alt={metaverse.description}
      layout="fill"
      objectFit="contain"
      placeholder="blur"
      unoptimized={true}
    />
  );

  const metaverseCardImageMobile = (
    <Image
      loader={externaImageLoader}
      src={metaverse.itemImage}
      alt={metaverse.description}
      layout="fill"
      objectFit="contain"
      placeholder="blur"
      unoptimized={true}
    />
  );

  return (
    <div className="w-full flex gap-10 text-white text-xl font-bold">
      <div className="flex flex-col gap-4">
        <MetaverseCardTitle title={metaverse.name} logo={metaverse.logo} />
        <Center className="flex lg:hidden justify-center items-center relative w-full aspect-[3/1]">
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
      </div>
      <Center className="hidden lg:flex min-w-[48rem] justify-center items-center relative aspect-[5/7]">
        {metaverseCardImage}
      </Center>
    </div>
  );
}
