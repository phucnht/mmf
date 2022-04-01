import { Popover, Transition } from '@headlessui/react';

import classNames from 'classnames';
import ButtonImageRef from './ButtonImageRef';
import { CxProps } from 'utils/types';
import { Box, Button } from '@whammytechvn/wt-components';
import { SidebarRouteProps } from 'components/navigation/sidebar/sidebar.typings';
import { useRouter } from 'next/router';
import ReactTooltip from 'react-tooltip';

const mobileRoutes = [
  {
    slug: '/',
    label: 'Home'
  },
  {
    slug: 'https://news.mymetafarm.com',
    label: 'News'
  },
  {
    slug: '/marketplace/items',
    label: 'Marketplace',
    disabled: true
  },
  {
    slug: '/metaverse',
    label: 'Metaverse',
    disabled: true
  },
  {
    slug: '/dashboard/box',
    label: 'Dashboard',
    disabled: true
  },
  {
    slug: '/document',
    label: 'Document',
    disabled: true
  }
];

const desktopRoutes = [
  {
    slug: '/document',
    label: 'Document',
    disabled: true
  },
  {
    slug: 'https://news.mymetafarm.com',
    label: 'News'
  }
];

const HeaderButtonRoute = ({ route, onClick }: { route: SidebarRouteProps; onClick?: () => void }) => {
  const cxButton = classNames(
    'text-sm !leading-[3.2rem] xl:text-btn p-1 w-full xl:p-3 lg:w-[9rem] !min-w-fit xl:w-[15rem] bg-transparent hover:bg-blue-100/10 font-black text-white uppercase',
    {
      '!bg-gray-400 !cursor-not-allowed': route.disabled
    }
  );

  return (
    <Box className="relative">
      <Button onClick={onClick} className={cxButton} data-tip={route.disabled ? 'Coming Soon' : undefined}>
        {route.label}
      </Button>
      <ReactTooltip place="bottom" className="z-[100]" />
    </Box>
  );
};

export default function HeaderButtonHamburger({ className }: CxProps) {
  const router = useRouter();

  const goTo = (path: string) => {
    router.push(path);
  };

  return (
    <Popover className={classNames('my-auto', className)}>
      <Popover.Button
        as={ButtonImageRef}
        imgSrc="/assets/icons/hamburger.svg"
        className="m-auto h-12 w-12 mr-2 xl:mr-1 xl:h-14 xl:w-14 rounded-none"
      />
      <Transition
        as="div"
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
        className="absolute left-0 mt-8 w-full z-50"
      >
        <Popover.Panel className="hidden lg:flex text-white text-md bg-blue-400 rounded-none lg:rounded-[2rem] w-full p-2 xl:p-4">
          {({ close }) => (
            <>
              {desktopRoutes.map(route => (
                <HeaderButtonRoute
                  key={route.slug}
                  route={route}
                  onClick={() => {
                    if (route.disabled) {
                      return;
                    }
                    goTo(route.slug);
                    close();
                  }}
                />
              ))}
            </>
          )}
        </Popover.Panel>
        <Popover.Panel className="lg:hidden text-white flex flex-col text-md bg-blue-400 rounded-none lg:rounded-[2rem] w-full p-2 xl:p-4 z-50 divide-y-[1px]">
          {({ close }) => (
            <>
              {mobileRoutes.map(route => (
                <HeaderButtonRoute
                  key={route.slug}
                  route={route}
                  onClick={() => {
                    if (route.disabled) {
                      return;
                    }
                    goTo(route.slug);
                    close();
                  }}
                />
              ))}
            </>
          )}
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
