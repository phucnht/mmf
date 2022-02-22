import classNames from 'classnames';
interface FilterHeaderProps {
  className?: string;
  onResetFilter?: () => void;
}

export default function MarketplaceFilterHeader({ className, onResetFilter }: FilterHeaderProps) {
  const filterClassname = classNames(
    'filter-header w-[35rem] h-[7.3rem] bg-filter-header bg-img-default px-12 py-9 flex justify-between items-center',
    className
  );

  const handleResetFilter = () => {
    if (onResetFilter) {
      onResetFilter();
    }
  };

  return (
    <div className={filterClassname}>
      <h6 className="text-fill-transparent bg-gradient-to-tr from-primary to-primary-light bg-clip-text font-black uppercase text-[2rem]">
        Filters
      </h6>
      <button className="font-medium text-[2rem] text-[#00cffe]" onClick={handleResetFilter}>
        Reset Filter
      </button>
    </div>
  );
}
