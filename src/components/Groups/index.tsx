import { groups } from '@/data/groups';
import { FC } from 'react';
import { CardGrid } from '../CardGrid';
import { GroupIcon } from '../Icons';
import { SectionContainer } from '../SectionContainer';

export const Groups: FC = () => {
  return (
    <SectionContainer title="Groups & Events" Icon={GroupIcon}>
      <CardGrid items={groups} />
    </SectionContainer>
  );
};
