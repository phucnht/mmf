import { Center, Flex, Grid } from '@whammytechvn/wt-components';
import Image from 'next/image';
import imgAirdrop1 from 'public/assets/airdrop/airdrop-card-1.png';
import AirdropCardContent from './AirdropCardContent';
import AirdropCardTitle from './AirdropCardTitle';

const CARD_CONTENT =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec congue turpis. Nullam feugiat mi consequat interdum tempus. Etiam lorem nisl, semper at convallis ac, dictum eu magna. Praesent non urna tempus, hendrerit nulla sit amet';

const CARD_CONDITIONS =
  'The conditions for you to receive this award are: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec congue turpis. ';

const AirdropCard = () => {
  return (
    <Grid className="grid-cols-11 gap-4 text-white text-xl font-bold">
      <Flex className="flex-col col-span-6 gap-4">
        <AirdropCardTitle title="My Meta Farm" />
        <AirdropCardContent content={CARD_CONTENT} conditions={CARD_CONDITIONS} />
      </Flex>
      <Center className="col-span-5 flex justify-center items-center">
        <Image alt="Airdrop 1" src={imgAirdrop1} height={668} />
      </Center>
    </Grid>
  );
};

export default AirdropCard;
