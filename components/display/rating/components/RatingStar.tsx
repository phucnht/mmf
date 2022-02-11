import classNames from 'classnames';

export type RatingProps = {
  size?: 'small' | 'big';
  level?: number;
  index?: number;
  className?: string;
};

const RatingStar = ({ size = 'small', level = 0, index = 1, className = '' }) => {
  const ratingStarClassName = classNames(
    'mx-1 fill-current text-white',
    {
      'w-8 h-8': size === 'small',
      'w-10 h-10': size === 'big',
      'text-primary': level >= index,
      'text-white': level < index
    },
    className
  );

  return (
    <svg className={ratingStarClassName} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path
        d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
        stroke="black"
      />
    </svg>
  );
};

export default RatingStar;
