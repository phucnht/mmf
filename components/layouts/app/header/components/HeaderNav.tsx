import { Flex } from '@whammytechvn/wt-components';
import NavLink from 'components/navigation/link/NavLink';

import HeaderButtonUser from './HeaderButtonUser';
import { isProduction } from 'utils/networks';
import HeaderButtonHamburger from './HeaderButtonHamburger';

export default function HeaderNav() {
  return (
    <ul className="lg:col-span-3 flex w-full justify-between items-center">
      <Flex className="flex-1 relative justify-center items-center gap-1 xl:gap-4 mt-6 min-w-fit">
        <HeaderButtonHamburger />
        <NavLink href="/" exact content="Home" />
        <NavLink disabled={isProduction} href="/dashboard/box" content="Dashboard" />
        <NavLink href="/marketplace/items" content="Marketplace" />
        <NavLink href="/metaverse" content="Metaverse" />
      </Flex>
      <HeaderButtonUser />
    </ul>
  );
}
