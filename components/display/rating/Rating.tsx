import classNames from 'classnames';
import RatingStar from './components/RatingStar';

export type RatingProps = {
  size?: 'small' | 'big';
  level?: number;
  className?: string;
};

const Rating = ({ size = 'small', level = 0, className = '' }) => {
  const ratingClassName = classNames('flex justify-center items-center card-header-details-star', className);

  return (
    <div className={ratingClassName}>
      <div className="flex items-center mt-2 mb-1">
        <RatingStar size={size} level={level} index={1} />
        <RatingStar size={size} level={level} index={2} />
        <RatingStar size={size} level={level} index={3} />
        <RatingStar size={size} level={level} index={4} />
        <RatingStar size={size} level={level} index={5} />
      </div>
    </div>
  );
};

export default Rating;
