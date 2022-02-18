import { Tab } from '@headlessui/react';
import { Box, Grid } from '@whammytechvn/wt-components';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import _findIndex from 'lodash/findIndex';
import { SidebarRoutesProps } from './sidebar.typings';

export default function SidebarFilter({ routes, levelSlug = 1, children }: SidebarRoutesProps) {
  const router = useRouter();

  const currentIndex = _findIndex(routes, { slug: router.pathname.split('/')[levelSlug] });

  const cxTabsWrapper = classNames(
    'border-green-200 border-[3px] rounded-[2rem] mt-44 pt-8 pb-48 min-w-[18rem] max-w-[35rem] w-full'
  );

  return (
    <Tab.Group
      defaultIndex={currentIndex}
      as={Grid}
      className="grid-cols-4 items-start justify-start w-full gap-x-6 gap-y-4"
    >
      <Box className={cxTabsWrapper}></Box>
      <Tab.Panels as={Box} className="col-span-3 w-full h-full text-white text-sm">
        {children}
      </Tab.Panels>
    </Tab.Group>
  );
}
