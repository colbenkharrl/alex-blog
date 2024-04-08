import { FC } from 'react';
import { GridCard, GridCardItem } from '../GridCard';

export type CardGridProps = {
  items: GridCardItem[];
};

export const CardGrid: FC<CardGridProps> = ({ items }) => {
  return (
    <ul
      role="list"
      className="mt-8 grid grid-cols-1 gap-x-12 gap-y-16 p-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      {items.map((item) => (
        <GridCard key={item.name} item={item} />
      ))}
    </ul>
  );
};
