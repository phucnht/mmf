import { Flex, Heading } from '@whammytechvn/wt-components';
import classNames from 'classnames';
interface FilterHeaderProps {
  className?: string;
  onResetFilter?: () => void;
}

export default function MarketplaceFilterHeader({ className, onResetFilter }: FilterHeaderProps) {
  const cxHeaderWrapper = classNames(
    'pl-7 pr-5 py-5 bg-white/20 justify-between items-center rounded-[1rem]',
    className
  );

  const handleResetFilter = () => {
    if (onResetFilter) {
      onResetFilter();
    }
  };

  return (
    <Flex className={cxHeaderWrapper}>
      <Heading as="h6" className="text-white font-bold uppercase text-xl">
        Filters
      </Heading>
      <button
        className="font-bold text-xl text-blue-100 p-2 hover:bg-white/5 rounded-[1rem]"
        onClick={handleResetFilter}
      >
        Reset Filter
      </button>
    </Flex>
  );
}
