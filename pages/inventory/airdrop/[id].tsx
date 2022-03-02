import Head from 'next/head';
import { Box, Container, Flex, Heading, Text } from '@whammytechvn/wt-components';
import ButtonBack from 'components/buttons/ButtonBack';
import { getLayoutDefault } from 'components/layouts/pages/default/getLayoutDefault';

import { MOCK_CONTENT } from 'utils/mock';
import ProgressBar from 'components/display/progress-bar/ProgressBar';
import useAuthGuard from 'hooks/useAuthGuard';

import imgItem from '/public/assets/inventory/airdrop/t-shirt.png';
import CardItem from 'components/pages/inventory/airdrop/CardItem';
import { getEllipsisTxt } from 'utils/format';
import { GetServerSidePropsContext } from 'next';
import DataTableHistory from 'components/table/DataTableHistory';
import { useAppSelector } from 'store/store.hook';
import { selectPaymentTokenData } from 'store/market/payment-token/paymentToken.slice';
export interface InventoryMetaverseDetailProps {
  metaverseItem: any;
}

export default function InventoryMetaverseDetail({ metaverseItem }: InventoryMetaverseDetailProps) {
  useAuthGuard();
  const { BUSD } = useAppSelector(selectPaymentTokenData);

  return (
    <>
      <Head>
        <title>{metaverseItem.name} | My Metafarm</title>
        <meta name="description" content={`${metaverseItem.name} | My Metafarm`} />
      </Head>
      <Container className="max-w-screen-lg min-h-fit">
        <ButtonBack className="mb-8" />
        <Flex className="justify-between gap-20 p-28 rounded-[2rem] border-[3px] border-green-200 text-white">
          <Flex className="col-span-3 flex-col items-center justify-between min-h-[48rem] w-full">
            <CardItem content={metaverseItem.name} imgSrc={imgItem} />
          </Flex>
          <Flex className="col-span-2 flex-col justify-between w-[34rem] min-w-[34rem]">
            <Box className="overflow-y-auto overflow-x-hidden max-h-[40rem] pr-12">
              <Heading className="font-black text-lg items-baseline">
                Owner: {getEllipsisTxt(metaverseItem.ownerAddress)}
              </Heading>
              <Flex className="flex-col mt-9">
                <Heading className="uppercase font-black text-md">Story</Heading>
                <Text className="mt-4 text-md whitespace-normal	break-normal">{MOCK_CONTENT}</Text>
              </Flex>
              <Flex className="flex-col mt-9">
                <Heading className="uppercase font-black text-md">Stats</Heading>
                <Flex className="flex-col mt-4">
                  <ProgressBar type="error" content="base health" value={360} maxValue={360} className="mb-7" />
                  <ProgressBar type="success" content="base defense" value={180} maxValue={360} className="mb-7" />
                </Flex>
              </Flex>
            </Box>
            <Flex className="justify-between">
              <Flex className="flex-col price-block">
                <Heading as="h6" className="font-bold text-2xl">
                  Price
                </Heading>
                <Text className="font-black text-xl">0.361 {BUSD?.symbol}</Text>
              </Flex>
              {/* <Button
                color="secondary"
                className="text-red-100 py-3 px-4 min-w-fit xl:min-w-[20rem] text-xl"
                content="Buy Now"
              /> */}
            </Flex>
          </Flex>
        </Flex>
        <DataTableHistory nftItemId={metaverseItem.id} />
      </Container>
    </>
  );
}

export const getServerSideProps = async ({ query }: GetServerSidePropsContext) => {
  const res = await fetch(`https://metafarm-api.onsky.services/market-apis/api/items/${query.id}`);
  const { data } = await res.json();
  return { props: { metaverseItem: data } };
};

InventoryMetaverseDetail.getLayout = getLayoutDefault;
