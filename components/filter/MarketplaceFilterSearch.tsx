import { Flex } from '@whammytechvn/wt-components';
import debounce from 'lodash/debounce';
import { useFormContext } from 'react-hook-form';
import { SearchIcon } from '@heroicons/react/outline';
import classNames from 'classnames';

interface MarketplaceFilterSearchProps {
  className?: string;
  name: string;
  disabled?: boolean;
  callback?: () => void;
}

export default function MarketplaceFilterSearch({ disabled, name, callback }: MarketplaceFilterSearchProps) {
  const method = useFormContext();
  const { onChange, ...rest } = method.register(name);
  const cxFilterSearch = classNames(
    'w-full items-center justify-between relative rounded-[1rem] bg-white py-5 pl-5 pr-7',
    { '!bg-gray-400 disabled:cursor-not-allowed disabled:pointer-events-none': disabled }
  );

  const onTextChange = debounce(event => {
    onChange(event);
    if (callback) {
      callback();
    }
  }, 700);
  return (
    <Flex className={cxFilterSearch}>
      <input
        {...rest}
        disabled={disabled}
        className="outline-none border-none text-xl !text-blue-400 w-full placeholder:text-blue-400/70 disabled:bg-gray-400"
        type="text"
        placeholder="Search in market"
        onChange={onTextChange}
      />
      <SearchIcon className="h-10 text-blue-400" />
    </Flex>
  );
}
