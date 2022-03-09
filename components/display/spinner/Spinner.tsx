import classNames from 'classnames';

interface SpinnerProps {
  className?: string;
}

const Spinner = ({ className }: SpinnerProps) => {
  const spinnerClassName = classNames(
    'animate-spin ease-linear rounded-full border-4 border-t-4 h-8 w-8 ml-4 border-t-transparent',
    className
  );
  return <div className={spinnerClassName} />;
};

Spinner.displayName = 'Spinner';

export default Spinner;
