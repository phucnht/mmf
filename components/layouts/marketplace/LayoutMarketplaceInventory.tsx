import { Tab } from '@headlessui/react';
import { Box } from '@whammytechvn/wt-components';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { ReactElement, ReactNode } from 'react';
import Image from 'components/display/Image';
import { Flex, Text } from '@whammytechvn/wt-components';
import { Fragment } from 'react';
import _findIndex from 'lodash/findIndex';

import imgIconAirdrop from '/public/assets/icons/airdrop.png';
import imgIconBox from '/public/assets/icons/box.png';
import imgIconCharacters from '/public/assets/icons/characters.png';
import imgIconEvents from '/public/assets/icons/events.png';
import imgIconItems from '/public/assets/icons/items.png';
import imgIconLands from '/public/assets/icons/lands.png';
import { LayoutMarketplace } from './LayoutMarketplace';

const routes = [
  {
    icon: imgIconCharacters,
    label: 'Characters',
    slug: 'characters'
  },
  {
    icon: imgIconLands,
    label: 'Lands',
    slug: 'lands'
  },
  {
    icon: imgIconItems,
    label: 'Items',
    slug: 'items'
  },
  {
    icon: imgIconEvents,
    label: 'Events',
    slug: 'events'
  },
  {
    icon: imgIconAirdrop,
    label: 'Airdrop',
    slug: 'airdrop'
  },
  {
    icon: imgIconBox,
    label: 'Box',
    slug: 'box'
  }
];

const DEFAULT_SLUG = 'airdrop';
interface LayoutMarketplaceInventoryProps {
  children: ReactNode;
}

export function LayoutMarketplaceInventory({ children }: LayoutMarketplaceInventoryProps) {
  const router = useRouter();

  const currentIndex = _findIndex(routes, { slug: router.pathname.split('/')[3] || DEFAULT_SLUG });

  const goTo = (path: string) => {
    router.push(path);
  };

  const cxTabsInventory = classNames(
    'text-white w-full py-10 px-12 rounded-[2rem] bg-green-300 justify-between mt-4 mb-[1rem]'
  );

  const cxTabInventory = classNames(
    "flex items-center relative uppercase font-black text-md cursor-pointer hover:after:h-2 after:h-0 after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-full after:bg-white after:rounded-3xl"
  );

  return (
    <Tab.Group defaultIndex={currentIndex} as={Box} className="w-full text-white text-sm">
      <Tab.List as={Flex} className={cxTabsInventory}>
        {routes.map(route => (
          <Tab as={Fragment} key={route.slug}>
            {({ selected }) => {
              return (
                <div
                  key={route.slug}
                  className={classNames(cxTabInventory, { 'after:h-2': selected })}
                  onClick={() => goTo(`/marketplace/inventory/${encodeURIComponent(route.slug)}`)}
                >
                  <Image src={route.icon} alt={route.label} />
                  <Text className="ml-3 uppercase">{route.label}</Text>
                </div>
              );
            }}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels as={Box} className="w-full text-white text-sm">
        <Tab.Panel>{children}</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}

export function LayoutPageMarketplaceInventory(page: ReactElement) {
  return (
    <LayoutMarketplace>
      <LayoutMarketplaceInventory>{page}</LayoutMarketplaceInventory>
    </LayoutMarketplace>
  );
}
