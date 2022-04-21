import { Flex, Text } from '@whammytechvn/wt-components';
import NavLink from 'components/navigation/link/NavLink';
import imgDiscord from 'public/media/header/discord.svg';
import HeaderButtonUser from './HeaderButtonUser';
import HeaderButtonHamburger from './HeaderButtonHamburger';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useAppSelector } from 'store/store.hook';
import { selectAuthData } from 'store/account/auth/auth.slice';
import { checkIsTester } from 'store/account/auth/auth.api';

export default function HeaderNav() {
  const { address } = useAppSelector(selectAuthData);
  const [isTester, setIsTester] = useState(false);

  useEffect(() => {
    checkIsTester(address).then(setIsTester);
  }, [address]);

  return (
    <ul className="lg:col-span-3 flex w-full justify-between items-center">
      <Flex className="flex-1 relative justify-center items-center gap-1 xl:gap-4 mt-6 min-w-fit">
        <HeaderButtonHamburger />
        <NavLink href="/" exact content="Home" />
        <NavLink href="https://community.mymetafarm.com" content="Partner Token" openInNew />
        {/* <NavLink disabled={!isTester} href="/marketplace/items" content="Marketplace" /> */}
        <NavLink disabled={!isTester} href="/metaverse" content="Metaverse" />
        <Link href="https://discord.gg/A2C4eYb3T9" passHref>
          <a className="flex items-center gap-2">
            <Text className="text-white !text-sm uppercase font-black">Join Our Discord</Text>
            <Image alt="Discord" src={imgDiscord} />
          </a>
        </Link>
      </Flex>
      <HeaderButtonUser />
    </ul>
  );
}
