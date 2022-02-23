import { Box, Flex, Grid, Scaffold, Text } from '@whammytechvn/wt-components';
import classNames from 'classnames';
import Image from 'components/display/image/Image';
import Link from 'components/navigation/link/Link';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import imgLogoEastFog from '/public/assets/home/home-footer-eastfog.png';
import imgLogoStarpunk from '/public/assets/home/home-footer-starpunk.png';

const Footer = () => {
  const { pathname } = useRouter();

  let renderFooter = (
    <Grid className="container xl:max-w-[132rem] grid-cols-4 text-md">
      <Link href="http://www.mymetafarm.com" target="_blank" rel="noopener">
        http://www.mymetafarm.com
      </Link>
      <ul className="flex justify-end gap-24 col-span-3">
        <NextLink href="/contact" passHref>
          <Link disabled>Contact</Link>
        </NextLink>
        <NextLink href="/help" passHref>
          <Link disabled>Get help</Link>
        </NextLink>
        <NextLink href="/marketplace" passHref>
          <Link disabled>Marketplace</Link>
        </NextLink>
        <NextLink href="/token" passHref>
          <Link disabled>Buy Token</Link>
        </NextLink>
      </ul>
    </Grid>
  );

  if (pathname === '/') {
    renderFooter = (
      <Flex className="flex-col items-center gap-6 container xl:max-w-[132rem] text-white">
        <Flex className="items-center gap-4">
          <Link href="https://www.eastfog.com/" target="_blank" rel="noopener">
            <Image alt="East Fog" src={imgLogoEastFog} />
          </Link>
          <Link href="https://starpunk.io/" target="_blank" rel="noopener">
            <Image alt="Starpunk" src={imgLogoStarpunk} />
          </Link>
        </Flex>
        <Text className="text-xl text-center font-normal">
          This product is cooperated by<span className="block">EASTFOG company and STARPUNK corporation.</span>
        </Text>
        <Flex className="items-center text-lg gap-6">
          <Flex className="gap-4 min-w-[10rem] items-center justify-center bg-[#186123] rounded-full p-3 shadow-md shadow-gray-700">
            <Link href="https://t.me/MyMetaFarm" target="_blank" rel="noopener">
              <Box className="bg-[url('/assets/icons/telegram.svg')] bg-auto bg-center bg-no-repeat w-7 h-8 mr-auto " />
            </Link>
            <Box className="bg-white w-[2px] h-8 rounded" />
            <Link href="https://www.facebook.com/mymetafarm" target="_blank" rel="noopener">
              <Box className="bg-[url('/assets/icons/facebook.svg')] bg-auto bg-center bg-no-repeat w-4 h-8 m-auto" />
            </Link>
            <Box className="bg-white w-[2px] h-8 rounded" />
            <Link href="https://twitter.com/mymetafarm" target="_blank" rel="noopener">
              <Box className="bg-[url('/assets/icons/twitter.svg')] bg-auto bg-center bg-no-repeat w-8 h-8 ml-auto" />
            </Link>
          </Flex>
          <Link href="mailto:info@mymetafarm.com">@MyMetaFarm</Link>
          <Link href="http://www.mymetafarm.com" target="_blank" rel="noopener">
            <Flex className="items-center gap-2">
              <Box className="bg-[#186123] rounded-full p-3 shadow-md shadow-gray-700">
                <Box className="bg-[url('/assets/icons/web.svg')] bg-auto bg-center bg-no-repeat w-11 h-11" />
              </Box>
              <Text>MyMetaFarm.com</Text>
            </Flex>
          </Link>
        </Flex>
      </Flex>
    );
  }

  const cxFooter = classNames('bg-black/40 z-10', { '!h-[22rem] relative': pathname === '/' });

  return <Scaffold.Footer className={cxFooter}>{renderFooter}</Scaffold.Footer>;
};

export default Footer;
