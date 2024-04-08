'use client';

import { FC, useMemo, useState } from 'react';
import { LightBulbIcon, StarIcon } from '../Icons';
import { SectionContainer } from '../SectionContainer';
import Image from 'next/image';
import { Card } from '../Card';
import {
  recommendationsTabMap,
  RecommendationsTabName,
} from '@/data/recommendations';
import { Tabs } from '../Tabs';
import { StarRating } from '../StarRating';

export const Recommendations: FC = () => {
  const [currentTabName, setCurrentTabName] =
    useState<RecommendationsTabName>('Dining');

  const currentTab = useMemo(
    () => recommendationsTabMap[currentTabName],
    [currentTabName],
  );

  return (
    <SectionContainer title="Recommendations" Icon={LightBulbIcon}>
      <Tabs
        tabs={recommendationsTabMap}
        currentTab={currentTabName}
        onTabChange={setCurrentTabName}
      />
      <ul
        role="list"
        className="mt-8 grid grid-cols-1 gap-x-12 gap-y-16 p-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {currentTab.items.map((item) => (
          <Card as="li" key={item.title}>
            <div className="flex flex-row items-center justify-center">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={item.icon}
                  alt={item.title}
                  className="h-10 w-10"
                  unoptimized
                />
              </div>
              <h2 className="ml-2 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={item.url || '#'} target={item.url && '_blank'}>
                  {item.title}
                </Card.Link>
              </h2>
            </div>
            <Card.Description>{item.description}</Card.Description>
            <div className="mt-4 flex w-full items-center">
              <StarRating rating={item.rating} />
              <div className="grow" />
              <p className="inline-block text-sm">
                ({new Date(item.timestamp).toLocaleDateString()})
              </p>
            </div>
          </Card>
        ))}
      </ul>
    </SectionContainer>
  );
};
