import { Popover, Transition } from '@headlessui/react';

import classNames from 'classnames';
import ButtonImageRef from './ButtonImageRef';
import { CxProps } from 'utils/types';
import { Box, Button } from '@whammytechvn/wt-components';
import { SidebarRouteProps } from 'components/navigation/sidebar/sidebar.typings';
import { useRouter } from 'next/router';
import ReactTooltip from 'react-tooltip';
import useWindowSize from 'hooks/useWindowSize';
import clsxm from 'utils/clsxm';

const mobileRoutes = [
  {
    slug: '/',
    label: 'Home'
  },
  {
    slug: 'https://news.mymetafarm.com/',
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
    slug: 'https://news.mymetafarm.com/',
    label: 'News'
  }
];

const HeaderButtonRoute = ({ route }: { route: SidebarRouteProps }) => {
  const router = useRouter();

  const goToRoute = () => {
    router.push(route.slug);
  };

  const cxButton = classNames(
    'text-sm !leading-[3.2rem] xl:text-btn p-1 w-full xl:p-3 lg:w-[9rem] !min-w-fit xl:w-[15rem] bg-transparent hover:bg-blue-100/10 font-black text-white uppercase',
    {
      '!bg-gray-400 !cursor-not-allowed': route.disabled
    }
  );

  return (
    <Box className="relative">
      <Button onClick={goToRoute} className={cxButton} data-tip={route.disabled ? 'Coming Soon' : undefined}>
        {route.label}
      </Button>
      <ReactTooltip place="bottom" className="z-[100]" />
    </Box>
  );
};

export default function HeaderButtonHamburger({ className }: CxProps) {
  const { width } = useWindowSize();

  if (!width) {
    return null;
  }
  const isMobile = width < 1024;
  const routes = isMobile ? mobileRoutes : desktopRoutes;

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
        <Popover.Panel
          className={clsxm('lg:flex text-white text-md bg-blue-400 rounded-none lg:rounded-[2rem] w-full p-2 xl:p-4', {
            'z-50 divide-y-[1px]': isMobile
          })}
        >
          {routes.map(route => (
            <HeaderButtonRoute key={route.slug} route={route} />
          ))}
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
