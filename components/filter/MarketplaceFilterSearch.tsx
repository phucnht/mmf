import { Flex } from '@whammytechvn/wt-components';
import debounce from 'lodash/debounce';
import { useFormContext } from 'react-hook-form';
import { SearchIcon } from '@heroicons/react/outline';

interface MarketplaceFilterSearchProps {
  className?: string;
  name: string;
  callback?: () => void;
}

export default function MarketplaceFilterSearch({ name, callback }: MarketplaceFilterSearchProps) {
  const method = useFormContext();
  const { onChange, ...rest } = method.register(name);

  const onTextChange = debounce(event => {
    onChange(event);
    if (callback) {
      callback();
    }
  }, 700);

  return (
    <Flex className="w-full items-center justify-between relative rounded-[1rem] bg-white py-5 pl-5 pr-7">
      <input
        {...rest}
        className="outline-none border-none text-xl !text-blue-400 w-full placeholder:text-blue-400/70"
        type="text"
        placeholder="Search in market"
        onChange={onTextChange}
      />
      <SearchIcon className="h-10 text-blue-400" />
    </Flex>
  );
}
