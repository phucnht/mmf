import { Tab } from '@headlessui/react';
import { Box, Flex, Text } from '@whammytechvn/wt-components';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import Image from 'components/display/image/Image';
import _findIndex from 'lodash/findIndex';
import { SidebarRoutesProps } from './sidebar.typings';

export default function SidebarHorizontal({
  className,
  routes,
  baseSlug,
  levelSlug = 2,
  children
}: SidebarRoutesProps) {
  const router = useRouter();

  const currentIndex = _findIndex(routes, { slug: router.pathname.split('/')[levelSlug] });

  const goTo = (path: string) => {
    router.push(path);
  };

  const cxTabWrapper = classNames('w-full text-white text-sm', className);
  const cxTabs = classNames(
    'justify-start gap-20 text-white w-full py-6 px-8 xl:py-10 xl:px-12 rounded-[2rem] bg-green-300'
  );
  const cxTab = classNames('flex items-center relative uppercase font-black text-md');

  return (
    <Tab.Group defaultIndex={currentIndex} as={Box} className={cxTabWrapper}>
      <Tab.List as={Flex} className={cxTabs}>
        {routes.map(route => (
          <Tab as={Fragment} key={route.slug}>
            {({ selected }) => (
              <div
                aria-disabled={route.disabled}
                key={route.slug}
                onClick={route.disabled ? undefined : () => goTo(`${baseSlug}/${route.slug}`)}
                className={classNames(cxTab, {
                  "cursor-pointer hover:after:bg-white/75 hover:after:h-[0.3rem] xl:hover:after:h-2 after:h-0 after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-full after:bg-white after:rounded-3xl":
                    !route.disabled,
                  'after:h-[0.3rem] xl:after:h-2': !route.disabled && selected,
                  'cursor-not-allowed pointer-events-none opacity-50': route.disabled
                })}
              >
                <Image src={route.icon} alt={route.label} />
                <Text className="text-sm xl:text-md ml-3 uppercase">{route.label}</Text>
              </div>
            )}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels as={Box} className="w-full text-white text-sm mt-12">
        {children}
      </Tab.Panels>
    </Tab.Group>
  );
}
