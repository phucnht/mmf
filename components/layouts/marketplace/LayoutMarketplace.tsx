import { Tab } from '@headlessui/react';
import { Box, Flex } from '@whammytechvn/wt-components';
import classNames from 'classnames';
import UserAvatar from 'components/user-avatar/UserAvatar';
import { useRouter } from 'next/router';
import { Fragment, ReactElement, ReactNode } from 'react';
import _findIndex from 'lodash/findIndex';

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

const DEFAULT_SLUG = 'inventory';

interface LayoutMarketplaceProps {
  children: ReactNode;
}

export function LayoutMarketplace({ children }: LayoutMarketplaceProps) {
  const router = useRouter();

  const currentIndex = _findIndex(routes, { slug: router.pathname.split('/')[2] || DEFAULT_SLUG });

  const goTo = (path: string) => {
    router.push(path);
  };

  return (
    <Tab.Group
      defaultIndex={currentIndex}
      as={Flex}
      className="grid grid-cols-4 items-start justify-start w-full gap-x-6 gap-y-4"
    >
      <Box className="border-green-200 border-[3px] rounded-[2rem] mt-48 pt-8 pb-48 bg-[url('/assets/marketplace/sidemenu-bottom.png')] bg-bottom bg-auto bg-no-repeat min-w-[18rem] max-w-[35rem] w-full">
        <UserAvatar className="mb-4" />
        <Tab.List className="text-white text-md flex flex-col items-start font-black">
          {routes.map(route => (
            <Tab as={Fragment} key={route.slug}>
              {({ selected }) => (
                <div
                  role="navigation"
                  className={classNames('py-6 px-10 w-full text-left cursor-pointer hover:bg-green-300/75', {
                    'bg-green-300': selected
                  })}
                  onClick={() => goTo(`/marketplace/${route.slug}`)}
                >
                  {route.label}
                </div>
              )}
            </Tab>
          ))}
        </Tab.List>
      </Box>
      <Tab.Panels as={Box} className="col-span-3 w-full text-white text-sm">
        {children}
      </Tab.Panels>
    </Tab.Group>
  );
}

export function LayoutPageMarketplace(page: ReactElement) {
  return <LayoutMarketplace>{page}</LayoutMarketplace>;
}
