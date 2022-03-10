import { Listbox, Transition } from '@headlessui/react';
import { Box } from '@whammytechvn/wt-components';
import { useRouter } from 'next/router';
import _find from 'lodash/find';
import { SidebarRoutesProps } from '../sidebar/sidebar.typings';
import Image from 'next/image';

export default function NavbarMobileSelect({ routes, levelSlug = 1 }: SidebarRoutesProps) {
  const router = useRouter();
  const currentSlug = _find(routes, { slug: router.pathname.split('/')[levelSlug] })?.slug;

  const handleOnChange = (value: string) => {
    router.push(levelSlug === 1 ? `/${value}` : value);
  };

  return (
    <Listbox value={currentSlug} onChange={handleOnChange}>
      {({ open }) => (
        <Box className="relative z-[1]">
          <Listbox.Button
            className={`${
              open ? 'rounded-t-2xl' : 'rounded-2xl'
            } flex justify-between relative w-full p-4 uppercase font-black text-left bg-green-300 shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm`}
          >
            <span className="block truncate text-white">{_find(routes, { slug: currentSlug })?.label}</span>
            {!open && (
              <span className="ml-auto my-auto bg-[url('/assets/icons/select-icon.svg')] bg-center bg-auto bg-no-repeat w-5 h-4 text-white"></span>
            )}
          </Listbox.Button>
          <Transition
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Listbox.Options className="rounded-b-2xl absolute w-full py-1 overflow-auto text-base bg-green-300 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {routes.map(route => (
                <Listbox.Option
                  key={route.slug}
                  value={route.slug}
                  disabled={route.disabled}
                  className={({ active }) =>
                    `flex gap-4 items-center relative p-4 ${active && 'bg-green-200'} ${
                      route.disabled ? 'text-gray-300 cursor-not-allowed' : 'cursor-pointer text-white'
                    }`
                  }
                >
                  {route.icon && <Image src={route.icon} alt={route.label} />}
                  <span className={`uppercase truncate font-black`}>{route.label}</span>
                </Listbox.Option>
              ))}
              <span className="block ml-auto my-auto bg-[url('/assets/icons/select-icon.svg')] bg-center bg-auto bg-no-repeat w-5 h-4 text-white mr-5 mb-5 scale-[-1]" />
            </Listbox.Options>
          </Transition>
        </Box>
      )}
    </Listbox>
  );
}
