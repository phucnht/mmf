import { Popover, Transition } from '@headlessui/react';

import classNames from 'classnames';
import ButtonImageRef from './ButtonImageRef';
import { CxProps } from 'utils/types';
import Link from 'next/link';
import { Button } from '@whammytechvn/wt-components';

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
        className="absolute left-0 mt-8 w-full"
      >
        <Popover.Panel className="text-white text-md bg-blue-400 rounded-[2rem] w-full p-2 xl:p-4">
          <Link href="/document" passHref>
            <Button className="text-sm !leading-[3.2rem] xl:text-btn p-1 xl:p-3 w-[9rem] !min-w-fit xl:w-[15rem] bg-transparent hover:bg-blue-100/10 font-black text-white uppercase">
              Document
            </Button>
          </Link>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
