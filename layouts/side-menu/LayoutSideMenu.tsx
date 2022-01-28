import { Tab } from '@headlessui/react';
import { Box, Flex } from '@whammytechvn/wt-components';
import classNames from 'classnames';
import UserAvatar from 'components/user-avatar/UserAvatar';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment, ReactElement, useEffect } from 'react';

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

export default function LayoutSideMenu(page: ReactElement) {
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
      <Box className="border-green-200 border-[3px] rounded-[2rem] pt-8 pb-48 bg-[url('/assets/marketplace/sidemenu-bottom.png')] bg-bottom bg-auto bg-no-repeat w-full">
        <UserAvatar className="mb-4" />
        <Tab.List className="text-white text-md flex flex-col items-start font-black">
          {routes.map(route => (
            <Tab as={Fragment}>
              {({ selected }) => (
                <div
                  className={classNames(
                    'py-[1.6rem] px-[2.4rem] w-full text-left cursor-pointer',
                    selected ? 'bg-green-300' : ''
                  )}
                  onClick={() => goTo(`/marketplace/${encodeURIComponent(route.slug)}`)}
                >
                  {route.label}
                </div>
              )}
            </Tab>
          ))}
        </Tab.List>
      </Box>
      <Tab.Panels as={Box} className="col-span-3 w-full text-white text-sm">
        <Tab.Panel>{page}</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
