import { Flex, Text } from '@whammytechvn/wt-components';
import NavLink from 'components/navigation/link/NavLink';
import imgDiscord from 'public/media/header/discord.svg';
import HeaderButtonUser from './HeaderButtonUser';
// import { isProduction } from 'utils/networks';
import HeaderButtonHamburger from './HeaderButtonHamburger';
import Link from 'components/navigation/link/Link';
import Image from 'next/image';

export default function HeaderNav() {
  return (
    <ul className="lg:col-span-3 flex w-full justify-between items-center">
      <Flex className="flex-1 relative justify-center items-center gap-1 xl:gap-4 mt-6 min-w-fit">
        <HeaderButtonHamburger />
        <NavLink href="/" exact content="Home" />
        <NavLink disabled href="/dashboard/box" content="Dashboard" />
        <NavLink href="/marketplace/items" content="Marketplace" />
        <NavLink href="/metaverse" content="Metaverse" />
        <Link href="https://discord.gg/A2C4eYb3T9">
          <Flex className="items-center gap-2">
            <Text className="text-white text-btn uppercase font-black">Join Our Discord</Text>
            <Image alt="Discord" src={imgDiscord} />
          </Flex>
        </Link>
      </Flex>
      <HeaderButtonUser />
    </ul>
  );
}
