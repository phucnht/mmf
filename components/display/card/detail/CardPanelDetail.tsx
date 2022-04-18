import { Box, Container, Flex, Heading, Text } from '@whammytechvn/wt-components';
import ButtonBack from 'components/buttons/ButtonBack';

import { useAppSelector } from 'store/store.hook';
import DataTableHistory from 'components/table/DataTableHistory';
import ProgressBar from 'components/display/progress-bar/ProgressBar';
import { getEllipsisTxt } from 'utils/format';
import { selectPaymentTokenData } from 'store/market/payment-token/paymentToken.slice';
import { ObjectProps } from 'utils/types';
import CardImageItem from '../image/CardImageItem';
// import CardImageCharacter from '../image/CardImageCharacter';
// import CardImageLand from '../image/CardImageLand';
import FormBuyNowButton from 'components/forms/buy-now/FormBuyNowButton';

export type CardItemType = 'item' | 'land' | 'character';

export interface CardLayoutDetailProps {
  type: CardItemType;
  item: ObjectProps;
}

export default function CardLayoutDetail({ type, item }: CardLayoutDetailProps) {
  const { BUSD } = useAppSelector(selectPaymentTokenData);

  return (
    <Container className="max-w-screen-lg min-h-fit mx-auto">
      <ButtonBack className="mb-8" />
      <Flex className="justify-between gap-20 p-28 rounded-[2rem] border-[3px] border-green-200 text-white">
        <Flex className="flex-col items-center justify-center min-h-[48rem] w-full">
          {type === 'item' && <CardImageItem item={item} />}
          {/* {type === 'character' && <CardImageCharacter id={item.id} name={item.name} />}
          {type === 'land' && <CardImageLand id={item.id} name={item.name} />} */}
          <Heading as="h6" className="font-bold text-xl mt-4">
            Amount: <b>{item.amount}</b>
          </Heading>
        </Flex>
        <Flex className="flex-col justify-start gap-12 w-[34rem] min-w-[34rem]">
          <Box className="max-h-[40rem] pr-12">
            <Heading className="font-black text-lg items-baseline">Owner: {getEllipsisTxt(item.ownerAddress)}</Heading>
            <Flex className="flex-col mt-9">
              <Heading className="uppercase font-black text-md">Story</Heading>
              <Text className="mt-4 text-md whitespace-normal	break-normal">{item?.external.description}</Text>
            </Flex>
            {/* <Flex className="flex-col mt-9">
              <Heading className="uppercase font-black text-md">Stats</Heading>
              <Flex className="flex-col mt-4">
                <ProgressBar type="error" content="base health" value={360} maxValue={360} className="mb-7" />
                <ProgressBar type="success" content="base defense" value={180} maxValue={360} className="mb-7" />
              </Flex>
            </Flex> */}
          </Box>
          <Flex className="justify-between">
            <Flex className="flex-col price-block">
              <Heading as="h6" className="font-bold text-2xl">
                Price
              </Heading>
              <Text className="font-black text-xl">
                {item.price} {BUSD?.symbol}
              </Text>
            </Flex>
            <FormBuyNowButton item={item} />
          </Flex>
        </Flex>
      </Flex>
      <DataTableHistory tokenId={item.tokenId} />
    </Container>
  );
}
