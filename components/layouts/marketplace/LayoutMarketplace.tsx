import { Tab } from '@headlessui/react';
import { Box, Flex } from '@whammytechvn/wt-components';
import classNames from 'classnames';
import UserAvatar from 'components/user-avatar/UserAvatar';
import { useRouter } from 'next/router';
import { Fragment, ReactElement, useEffect } from 'react';
import InventoryTabs from './InventoryTabs';

const routes = [
  {
    slug: 'inventory',
    label: 'Inventory'
  },
  {
    slug: 'account',
    label: 'Account'
  },
  {
    slug: 'history',
    label: 'History'
  },
  {
    slug: 'wallet',
    label: 'Wallet'
  },
  {
    slug: 'upgrade',
    label: 'Upgrade'
  }
];

export default function LayoutMarketplace(page: ReactElement) {
  const router = useRouter();
  const currentPath = router.query.route;
  const currentComp = routes.find(route => route.slug === router.query.route);

  useEffect(() => {
    if (currentPath && !currentComp) {
      router.push('/404');
    }
  }, [router]);

  const goTo = (path: string) => {
    router.push(path);
  };

  return (
    <Tab.Group as={Flex} className="grid grid-cols-4 items-start justify-start w-full mt-8 gap-6">
      <Box className="border-green-200 border-[3px] rounded-[2rem] pt-8 pb-48 bg-[url('/assets/marketplace/sidemenu-bottom.png')] bg-bottom bg-auto bg-no-repeat min-w-[18rem] max-w-[35rem] w-full">
        <UserAvatar className="mb-4" />
        <Tab.List className="text-white text-md flex flex-col items-start font-black">
          {routes.map(route => (
            <Tab as={Fragment} key={route.slug}>
              {({ selected }) => (
                <div
                  className={classNames('py-6 px-10 w-full text-left cursor-pointer', { 'bg-green-300': selected })}
                  onClick={() => goTo(`/marketplace/${encodeURIComponent(route.slug)}`)}
                >
                  {route.label}
                </div>
              )}
            </Tab>
          ))}
        </Tab.List>
      </Box>
      <Box className="col-span-3 w-full text-white text-sm">
        <InventoryTabs />
        <Tab.Panels as={Box} className="w-full text-white text-sm">
          <Tab.Panel>{page}</Tab.Panel>
        </Tab.Panels>
      </Box>
    </Tab.Group>
  );
}
