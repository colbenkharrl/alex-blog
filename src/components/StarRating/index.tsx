import { FC } from 'react';
import { StarIcon } from '../Icons';

export type StarRatingProps = {
  rating: 0 | 1 | 2 | 3 | 4 | 5;
};

export const StarRating: FC<StarRatingProps> = ({ rating }) => {
  return (
    <>
      {new Array(rating).fill(null).map((_, index) => (
        <StarIcon
          className="h-4 w-4 fill-lime-700 dark:fill-amber-400"
          key={index}
        />
      ))}
      {new Array(5 - rating).fill(null).map((_, index) => (
        <StarIcon className="h-4 w-4 fill-zinc-300 " key={index} />
      ))}
    </>
  );
};
