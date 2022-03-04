import { Box, Heading } from '@whammytechvn/wt-components';
import { useFormContext } from 'react-hook-form';
import { Disclosure, Transition } from '@headlessui/react';
import { PlusIcon, MinusIcon } from '@heroicons/react/outline';
import { debounce } from 'lodash';

interface MarketplaceFilterMinMaxProps {
  className?: string;
  nameMin: string;
  nameMax: string;
  disabled?: boolean;
  callback?: () => void;
}

export default function MarketplaceFilterMinMax({
  nameMin,
  nameMax,
  disabled,
  callback
}: MarketplaceFilterMinMaxProps) {
  const method = useFormContext();
  const { onChange: onChangeMinPrice, ...restMin } = method.register(nameMin);
  const { onChange: onChangeMaxPrice, ...restMax } = method.register(nameMax);

  const handleChangeMinPrice = debounce((e: any) => {
    onChangeMinPrice(e);
    if (callback) {
      callback();
    }
  }, 700);

  const handleChangeMaxPrice = debounce((e: any) => {
    onChangeMaxPrice(e);
    if (callback) {
      callback();
    }
  }, 700);

  return (
    <div className="w-full mx-auto">
      <Disclosure defaultOpen={true}>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between w-full rounded-lg">
              <Heading as="h6" className="text-xl uppercase !font-black text-white">
                Price (BNB)
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
              <Disclosure.Panel className="grid grid-cols-2 mt-3 gap-2">
                <input
                  {...restMin}
                  disabled={disabled}
                  className="outline-none border-none bg-blue-100 rounded-xl text-lg text-white font-bold placeholder:text-gray-200 disabled:!bg-gray-400 disabled:cursor-not-allowed disabled:pointer-events-none"
                  type="text"
                  placeholder="Min"
                  onChange={handleChangeMinPrice}
                />
                <input
                  {...restMax}
                  disabled={disabled}
                  className="outline-none border-none bg-blue-100 rounded-xl text-lg text-white font-bold placeholder:text-gray-200 disabled:!bg-gray-400 disabled:cursor-not-allowed disabled:pointer-events-none"
                  type="text"
                  placeholder="Max"
                  onChange={handleChangeMaxPrice}
                />
              </Disclosure.Panel>{' '}
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
}
