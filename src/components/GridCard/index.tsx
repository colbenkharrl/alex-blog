import { ComponentPropsWithoutRef, FC, PropsWithoutRef } from 'react';
import { Card } from '@/components/Card';
import { LinkIcon } from '@/components/Icons';
import Image, { StaticImageData } from 'next/image';

export type GridCardItem = {
  name: string;
  description: string;
  link: {
    href: string;
    label: string;
  };
  logo: StaticImageData;
  target?: ComponentPropsWithoutRef<'a'>['target'];
};

export type GridCardProps = {
  item: GridCardItem;
};

export const GridCard: FC<GridCardProps> = ({ item }) => {
  return (
    <Card as="li" key={item.name}>
      <div className="flex flex-row items-center justify-center">
        <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
          <Image src={item.logo} alt="" className="h-10 w-10" unoptimized />
        </div>
        <h2 className="ml-2 text-base font-semibold text-zinc-800 dark:text-zinc-100">
          <Card.Link href={item.link.href} target="_blank">
            {item.name}
          </Card.Link>
        </h2>
      </div>
      <Card.Description>{item.description}</Card.Description>
      <p className="relative z-10 mt-6 flex text-sm font-medium text-lime-700 transition dark:text-amber-400">
        <LinkIcon className="h-6 w-6 flex-none" />
        <span className="ml-2">{item.link.label}</span>
      </p>
    </Card>
  );
};
