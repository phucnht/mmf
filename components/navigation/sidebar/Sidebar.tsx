import { Tab } from '@headlessui/react';
import { Box, Flex, Grid } from '@whammytechvn/wt-components';
import classNames from 'classnames';
import UserAvatar from 'components/user-avatar/UserAvatar';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import _findIndex from 'lodash/findIndex';
import { SidebarRoutesProps } from './sidebar.typings';

export default function Sidebar({ routes, defaultSlug, children }: SidebarRoutesProps) {
  const router = useRouter();

  const currentIndex = _findIndex(routes, { slug: defaultSlug });

  const goTo = (path: string) => {
    router.push(path);
  };

  const cxTabsWrapper = classNames(
    "border-green-200 border-[3px] rounded-[2rem] mt-44 pt-8 pb-48 bg-[url('/assets/marketplace/sidemenu-bottom.png')] bg-bottom bg-auto bg-no-repeat min-w-[18rem] max-w-[35rem] w-full"
  );

  return (
    <Tab.Group
      defaultIndex={currentIndex}
      as={Grid}
      className="grid-cols-4 items-start justify-start w-full gap-x-6 gap-y-4"
    >
      <Box className={cxTabsWrapper}>
        <UserAvatar className="mb-4" />
        <Tab.List className="text-white text-md flex flex-col items-start font-black">
          {routes.map(route => (
            <Tab as={Fragment} key={route.slug}>
              {({ selected }) => {
                const cxTab = classNames('py-6 px-10 w-full text-left cursor-pointer hover:bg-green-300/75', {
                  'bg-green-300': selected
                });

                return (
                  <div role="navigation" className={cxTab} onClick={() => goTo(`/marketplace/${route.slug}`)}>
                    {route.label}
                  </div>
                );
              }}
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
