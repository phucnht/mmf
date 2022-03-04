import { Box, Heading, Text } from '@whammytechvn/wt-components';
import { useFormContext } from 'react-hook-form';
import { Disclosure, Transition } from '@headlessui/react';
import { PlusIcon, MinusIcon } from '@heroicons/react/outline';
import Divider from 'components/display/divider/Divider';
import { Option } from 'utils/types';
import { Fragment } from 'react';

interface MarketplaceFilterCheckboxProps {
  className?: string;
  name: string;
  options: Option[];
  disabled?: boolean;
  callback?: () => void;
}

export default function MarketplaceFilterCheckbox({
  name,
  disabled,
  options,
  callback
}: MarketplaceFilterCheckboxProps) {
  const method = useFormContext();
  const { onChange, ...rest } = method.register(name);

  const handleChange = (e: any) => {
    if (!disabled) {
      onChange(e);
      if (callback) {
        callback();
      }
    }
  };

  return (
    <Box className="w-full mx-auto">
      <Disclosure defaultOpen={true}>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between w-full text-xl uppercase font-black text-white bg-blue-100 rounded-2xl px-8 py-6">
              <Heading as="h6" className="text-xl uppercase !font-black text-white">
                Element
              </Heading>
              <Box className="flex items-center justify-center w-[2.8rem] h-[2.8rem] bg-brown-100 rounded-lg">
                {open && <PlusIcon className={'text-white h-8'} />}
                {!open && <MinusIcon className={`text-white h-8`} />}
              </Box>
            </Disclosure.Button>
            <Transition
              show={open}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="flex flex-col m-8 gap-4">
                {options.map(option => {
                  return (
                    <Fragment key={option.key}>
                      <label className="flex items-center gap-6">
                        <input
                          {...rest}
                          disabled={disabled}
                          className="outline-none border-none w-[2.8rem] h-[2.8rem] !bg-brown-100 rounded-lg text-lg text-white font-bold placeholder:text-gray-200 disabled:!bg-gray-400 disabled:cursor-not-allowed disabled:pointer-events-none"
                          type="checkbox"
                          value={option.value}
                          onChange={handleChange}
                        />
                        <Text className="text-lg font-bold text-white">{option.text}</Text>
                      </label>
                      <Divider />
                    </Fragment>
                  );
                })}
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </Box>
  );
}
