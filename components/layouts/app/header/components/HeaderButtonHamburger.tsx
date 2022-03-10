import { Popover, Transition } from '@headlessui/react';

import classNames from 'classnames';
import ButtonImageRef from './ButtonImageRef';
import { CxProps } from 'utils/types';
import Link from 'next/link';
import { Button } from '@whammytechvn/wt-components';

const mobileRoutes = [
  {
    slug: '/',
    label: 'Home'
  },
  {
    slug: '/dashboard/box',
    label: 'Dashboard'
  },
  {
    slug: '/marketplace/items',
    label: 'Marketplace'
  },
  {
    slug: '/metaverse',
    label: 'Metaverse'
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
  }
];

export default function HeaderButtonHamburger({ className }: CxProps) {
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
        <Popover.Panel className="hidden lg:block text-white text-md bg-blue-400 rounded-[2rem] w-full p-2 xl:p-4">
          {desktopRoutes.map(({ slug, label, disabled }) => (
            <Link key={slug} href={slug} passHref>
              <Button
                disabled={disabled}
                className="text-sm !leading-[3.2rem] xl:text-btn p-1 xl:p-3 w-[9rem] !min-w-fit xl:w-[15rem] bg-transparent hover:bg-blue-100/10 font-black text-white uppercase disabled:pointer-events-none"
              >
                {label}
              </Button>
            </Link>
          ))}
        </Popover.Panel>
        <Popover.Panel className="lg:hidden text-white flex flex-col text-md bg-blue-400 rounded-2xl lg:rounded-[2rem] w-full p-2 xl:p-4 z-50">
          {mobileRoutes.map(({ slug, label, disabled }) => (
            <Link key={slug} href={slug} passHref>
              <Button
                disabled={disabled}
                className="text-sm p-4 w-full bg-transparent hover:bg-blue-100/10 font-black text-white uppercase disabled:pointer-events-none"
              >
                {label}
              </Button>
            </Link>
          ))}
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
