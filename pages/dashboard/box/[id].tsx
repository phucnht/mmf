import Head from 'next/head';
import { Box, Button, Container, Flex, Grid, Heading, Text } from '@whammytechvn/wt-components';
import ButtonBack from 'components/buttons/ButtonBack';
import { getLayoutDefaultSmall } from 'components/layouts/pages/default/getLayoutDefault';
import Countdown from 'components/countdown/Countdown';
import Image from 'components/display/image/Image';
import imgDashboardBox from '/public/assets/dashboard/box.png';
import { MOCK_CONTENT } from 'utils/mock';
import Alert from 'components/display/alert/Alert';
import FormBuyBox from 'components/forms/buy-box/FormBuyBox';

const MOCK_AMOUNT = 500;

export default function DashboardBoxDetail() {
  return (
    <>
      <Head>
        <title>Buy Box | My Metafarm</title>
        <meta name="description" content={`Buy Box | My Metafarm`} />
      </Head>
      <Container className="max-w-[113rem] min-h-fit">
        <ButtonBack className="mb-8" />
        <Box className="relative h-[86rem] w-full rounded-[2rem] border-[3px] border-green-200">
          <Box className="absolute h-full w-full bg-[url('/assets/bg/bg-buy-box.jpeg')] bg-cover bg-center bg-no-repeat opacity-30" />
          <Flex className="relative p-24 flex-col gap-16 items-center z-10">
            <Heading as="h1" className="!text-[4.8rem] text-white font-black">
              MetaBox
            </Heading>
            <Box className="relative w-full max-w-[60rem]">
              <Countdown
                fromDate={new Date('2022-02-26T03:54:13.000Z')}
                toDate={new Date('2022-02-28T03:54:13.000Z')}
              />
              <Box className="w-40 h-48 bg-[url('/assets/dashboard/banner-countdown.png')] bg-auto bg-center bg-no-repeat absolute -left-24 -top-7"></Box>
              <Box className="w-40 h-48 bg-[url('/assets/dashboard/banner-countdown.png')] bg-auto bg-center bg-no-repeat absolute -right-24 -top-7 scale-y-[-1] rotate-180"></Box>
            </Box>
            <Grid className="grid-cols-2 w-full p-8 gap-20">
              <Flex className="flex-col items-center w-full">
                <Image alt="Buy Box" src={imgDashboardBox} />
              </Flex>
              <Flex className="flex-col text-white gap-8 pl-12">
                <Heading className="uppercase font-black text-2xl">What&#39;s in this box?</Heading>
                <Box className="overflow-y-auto overflow-x-hidden max-h-[40rem] pr-16">
                  <Text className="text-md whitespace-normal	break-normal">{MOCK_CONTENT}</Text>
                </Box>
                <FormBuyBox amount={1} />
              </Flex>
            </Grid>
          </Flex>
        </Box>
      </Container>
    </>
  );
}

DashboardBoxDetail.getLayout = getLayoutDefaultSmall;
