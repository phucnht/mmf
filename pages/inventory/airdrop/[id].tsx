import Head from 'next/head';
import { Box, Container, Flex, Heading, Text } from '@whammytechvn/wt-components';
import ButtonBack from 'components/buttons/ButtonBack';
import { getLayoutDefault } from 'components/layouts/pages/default/getLayoutDefault';

import { MOCK_CONTENT } from 'utils/mock';
import ProgressBar from 'components/display/progress-bar/ProgressBar';
import useAuthGuard from 'hooks/useAuthGuard';

import imgItem from 'public/assets/items/airdrop/t-shirt.png';
import CardItem from 'components/pages/inventory/airdrop/CardItem';
import { getEllipsisTxt } from 'utils/format';
import { GetServerSidePropsContext } from 'next';
import DataTableHistory from 'components/table/DataTableHistory';
import { useAppSelector } from 'store/store.hook';
import { selectPaymentTokenData } from 'store/market/payment-token/paymentToken.slice';
import FormListingButton from 'components/forms/listing/FormListingButton';
export interface InventoryMetaverseDetailProps {
  item: any;
}

export default function InventoryMetaverseDetail({ item }: InventoryMetaverseDetailProps) {
  useAuthGuard();
  const { BUSD } = useAppSelector(selectPaymentTokenData);

  return (
    <>
      <Head>
        <title>{item.name} | My Metafarm</title>
        <meta name="description" content={`${item.name} | My Metafarm`} />
      </Head>
      <Container className="max-w-screen-lg min-h-fit">
        <ButtonBack className="mb-8" />
        <Flex className="justify-between gap-20 p-28 rounded-[2rem] border-[3px] border-green-200 text-white">
          <Flex className="col-span-3 flex-col items-center justify-between min-h-[48rem] w-full">
            <CardItem content={item.name} imgSrc={imgItem} />
          </Flex>
          <Flex className="col-span-2 flex-col justify-between gap-12 w-[34rem] min-w-[34rem]">
            <Box className="overflow-y-auto overflow-x-hidden max-h-[40rem] pr-12">
              <Heading className="font-black text-lg items-baseline">
                Owner: {getEllipsisTxt(item.ownerAddress)}
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
              <FormListingButton nftItemId={item.id} nftItemOwnerAddress={item.ownerAddress} nftItemImg={imgItem} />
            </Flex>
          </Flex>
        </Flex>
        <DataTableHistory nftItemId={item.id} />
      </Container>
    </>
  );
}

export const getServerSideProps = async ({ query }: GetServerSidePropsContext) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_MARKET}/items/${query.id}`);
  const { data } = await res.json();

  if (!data) {
    return { notFound: true };
  }

  return { props: { item: data } };
};

InventoryMetaverseDetail.getLayout = getLayoutDefault;
