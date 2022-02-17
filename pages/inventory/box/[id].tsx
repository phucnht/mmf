import Head from 'next/head';
// import DataTable from 'components/table/DataTable';
import {
  Container,
  Heading
  //  Text, Box, Button, Flex
} from '@whammytechvn/wt-components';
import ButtonBack from 'components/buttons/ButtonBack';
import { getLayoutDefault } from 'components/layouts/pages/default/getLayoutDefault';

// import _times from 'lodash/times';
// import _find from 'lodash/find';
// import { MOCK_CONTENT } from 'utils/mock';
// import ProgressBar from 'components/display/progress-bar/ProgressBar';
// import { useMemo } from 'react';
// import { useAppSelector } from 'store/store.hook';
// import { selectNftItemState } from 'store/market/nft-item/nftItem.slice';
// import { useRouter } from 'next/router';
// import { getEllipsisTxt } from 'utils/format';
// import CardItem from './components/CardItem';

export default function InventoryLandDetail() {
  // const { query } = useRouter();
  // const { loading, data: nftItems } = useAppSelector(selectNftItemState);
  // const item = _find(nftItems, ['id', query.id]);

  // const data = useMemo(
  //   () =>
  //     _times(10, i => ({
  //       id: i,
  //       time: '25 Oct 2021 10:03',
  //       amount: '0.12340000 BUSD',
  //       from: '094373474873724890',
  //       to: '094373474873724890'
  //     })),
  //   []
  // );

  // const columns = useMemo(
  //   () => [
  //     {
  //       Header: 'Time',
  //       accessor: 'time'
  //     },
  //     {
  //       Header: 'Amount',
  //       accessor: 'amount'
  //     },
  //     {
  //       Header: 'From',
  //       accessor: 'from'
  //     },
  //     {
  //       Header: 'To',
  //       accessor: 'to'
  //     }
  //   ],
  //   []
  // );

  // if (loading) return <Box>Loading...</Box>;
  // if (!item) return <Box>Error</Box>;

  return (
    <>
      <Head>
        <title>In development... | My Metafarm</title>
        <meta name="description" content={`In development... | My Metafarm`} />
      </Head>
      <Container className="max-w-screen-lg min-h-fit">
        <ButtonBack className="mb-8" />
        <Heading className="text-white font-black text-lg items-baseline text-center">In development...</Heading>
        {/* <Flex className="justify-between gap-20 p-28 rounded-[2rem] border-[3px] border-green-200 text-white">
          <Flex className="col-span-3 flex-col items-center justify-between min-h-[48rem] w-full">
            <CardItem content={item.name} />
          </Flex>
          <Flex className="col-span-2 flex-col justify-between w-[34rem] min-w-[34rem]">
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
                <Text className="font-black text-xl">0.361 IGL</Text>
              </Flex>
              <Button
                color="secondary"
                className="text-red-100 py-3 px-4 min-w-fit xl:min-w-[20rem] text-xl"
                content="Buy Now"
              />
            </Flex>
          </Flex>
        </Flex>
        <DataTable title="Sale History" sortable data={data} columns={columns} className="my-24" /> */}
      </Container>
    </>
  );
}

InventoryLandDetail.getLayout = getLayoutDefault;
