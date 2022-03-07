import { Flex } from '@whammytechvn/wt-components';
import NavLink from 'components/navigation/link/NavLink';

import HeaderButtonUser from './HeaderButtonUser';
import { isProduction } from 'utils/networks';
import HeaderButtonHamburger from './HeaderButtonHamburger';

export default function HeaderNav() {
  return (
    <ul className="flex w-full justify-between items-center">
      <Flex className="relative items-center gap-2 xl:gap-4 mt-6 min-w-fit">
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
