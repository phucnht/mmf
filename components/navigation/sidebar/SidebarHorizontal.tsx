import { Tab } from '@headlessui/react';
import { Box, Flex, Text } from '@whammytechvn/wt-components';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import Image from 'components/display/Image';
import _findIndex from 'lodash/findIndex';
import { SidebarRoutesProps } from './sidebar.typings';

export default function SidebarHorizontal({ routes, defaultSlug, children }: SidebarRoutesProps) {
  const router = useRouter();

  const currentIndex = _findIndex(routes, { slug: defaultSlug });

  const goTo = (path: string) => {
    router.push(path);
  };

  const cxTabs = classNames('justify-between text-white w-full py-10 px-12 rounded-[2rem] bg-green-300');

  const cxTab = classNames(
    "flex items-center relative uppercase font-black text-md cursor-pointer hover:after:bg-white/75 hover:after:h-2 after:h-0 after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-full after:bg-white after:rounded-3xl"
  );

  return (
    <Tab.Group defaultIndex={currentIndex} as={Box} className="w-full text-white text-sm">
      <Tab.List as={Flex} className={cxTabs}>
        {routes.map(route => (
          <Tab as={Fragment} key={route.slug}>
            {({ selected }) => (
              <div
                key={route.slug}
                onClick={() => goTo(`/marketplace/inventory/${route.slug}`)}
                className={classNames(cxTab, { 'after:h-2': selected })}
              >
                <Image src={route.icon} alt={route.label} />
                <Text className="ml-3 uppercase">{route.label}</Text>
              </div>
            )}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels as={Box} className="w-full text-white text-sm mt-9">
        {children}
      </Tab.Panels>
    </Tab.Group>
  );
}
