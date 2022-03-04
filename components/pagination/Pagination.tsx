import { useState } from 'react';
import classNames from 'classnames';
import PaginationButton from './components/PaginationButton';
import PaginationInput from './components/PaginationInput';

interface PaginationProps {
  size: number;
  index: number;
  className?: string;
  cb?: any;
}

const defaultProps = { size: 0, index: 1 };

const Pagination = ({ cb, className, size, index }: PaginationProps) => {
  const [currentIndex, setCurrentIndex] = useState(index);
  const paginationWrapperClassName = classNames('flex items-center justify-center text-white text-2xl', className);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    validateInput(currentIndex);
  };

  const handleDecrease = () => {
    validateInput(currentIndex - 1);
  };

  const handleIncrease = () => {
    validateInput(currentIndex + 1);
  };

  const handleChangeNumber = (e: any) => {
    e.preventDefault();
    const value = Number.parseInt(e.target.value);
    setCurrentIndex(value);
  };

  const validateInput = (value: number) => {
    if (value >= 1 && value <= size) {
      setCurrentIndex(Number(value));
    } else {
      setCurrentIndex(1);
    }
    if (cb) cb(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <form onSubmit={handleSubmit} className={paginationWrapperClassName}>
      <PaginationButton direction="previous" disabled={currentIndex <= 1} onClick={handleDecrease} />
      <PaginationInput value={currentIndex} min={1} max={size} type="number" onChange={handleChangeNumber} />
      {`of ${size}`}
      <PaginationButton direction="next" disabled={currentIndex >= size} onClick={handleIncrease} />
    </form>
  );
};

Pagination.displayName = 'Pagination';
Pagination.defaultProps = defaultProps;

export default Pagination;
