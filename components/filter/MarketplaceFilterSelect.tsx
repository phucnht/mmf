import { useFormContext, Controller } from 'react-hook-form';
import classNames from 'classnames';
import { Listbox, Transition } from '@headlessui/react';
import { Box, Flex, Heading } from '@whammytechvn/wt-components';
import _find from 'lodash/find';
import { ChevronDownIcon } from '@heroicons/react/outline';
import { Option } from 'utils/types';
import { SORT_BY } from './MarketplaceFilter';

interface FilterSelectProps {
  className?: string;
  name: string;
  options: Option[];
  disabled?: boolean;
  callback?: () => void;
}

export default function MarketplaceFilterSelect({ disabled, className, name, options, callback }: FilterSelectProps) {
  const method = useFormContext();
  const cxSelectWrapper = classNames(
    'w-full items-center justify-between relative rounded-[1rem] bg-white pl-7 py-7 pr-5',
    { '!bg-gray-400 disabled:cursor-not-allowed disabled:pointer-events-none mx-auto': disabled },
    className
  );

  return (
    <Flex className={cxSelectWrapper}>
      <Heading as="h6" className="text-blue-400 !font-extrabold text-lg">
        Sort by:
      </Heading>
      <Controller
        control={method.control}
        name={name}
        render={({ field: { onChange, value } }) => {
          return (
            <Listbox
              value={value}
              onChange={e => {
                if (!disabled) {
                  onChange(e);
                  if (callback) {
                    callback();
                  }
                }
              }}
            >
              {({ open }) => (
                <Box className="relative z-[1]">
                  <Listbox.Button className="flex items-center gap-2 font-bold text-lg text-blue-400 p-2 hover:bg-black/5 rounded-[1rem]">
                    <span className="truncate">
                      {_find(options, ['value', value || { orderBy: 'createdAt', desc: true }])?.text}
                    </span>
                    <ChevronDownIcon className="h-6 text-blue-400" aria-hidden="true" />
                  </Listbox.Button>
                  <Transition
                    show={!disabled && open}
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Listbox.Options className="absolute z-[2] flex flex-col right-0 mt-2 py-8 w-full min-w-[18rem] overflow-auto text-lg bg-blue-400 text-white rounded-2xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {options.map(({ key, value, text }) => (
                        <Listbox.Option
                          key={key}
                          value={value}
                          className={({ active }) =>
                            `cursor-pointer select-none text-lg font-bold px-6 py-2 ${active && 'bg-blue-500'}`
                          }
                        >
                          {text}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </Box>
              )}
            </Listbox>
          );
        }}
      />
    </Flex>
  );
}
