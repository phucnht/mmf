import { Switch } from '@headlessui/react';
import { Flex, Heading } from '@whammytechvn/wt-components';
import classNames from 'classnames';
import { Controller, useFormContext } from 'react-hook-form';

interface FilterSwitchBoxProps {
  name: string;
  label?: string;
  className?: string;
  disabled?: boolean;
  callback?: () => void;
}

export default function MarketplaceFilterSwitch({ className, disabled, name, label, callback }: FilterSwitchBoxProps) {
  const method = useFormContext();
  const cxSwitchWrapper = classNames(
    'w-full items-center justify-between relative rounded-[1rem] bg-white pl-7 py-7 pr-5',
    { '!bg-gray-400 disabled:cursor-not-allowed disabled:pointer-events-none': disabled },
    className
  );

  return (
    <Flex className={cxSwitchWrapper}>
      <Heading as="h6" className="text-blue-400 !font-extrabold text-xl uppercase">
        {label}
      </Heading>
      <Controller
        control={method.control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <Switch
            checked={value}
            onChange={e => {
              if (!disabled) {
                onChange(e);
                if (callback) {
                  callback();
                }
              }
            }}
            className={`${value ? 'bg-green-500' : 'bg-[#7E0D0A]'}
        relative inline-flex flex-shrink-0 h-[2.4rem] w-[6.2rem] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span
              aria-hidden="true"
              className={`${value ? 'bg-green-a100 translate-x-[2.2rem]' : 'bg-pink-200 translate-x-0'}
          pointer-events-none inline-block h-[2rem] w-[3.6rem] rounded-full shadow-lg transform ring-0 transition ease-in-out duration-200`}
            />
          </Switch>
        )}
      />
    </Flex>
  );
}
