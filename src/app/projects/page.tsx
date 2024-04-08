import { type Metadata } from 'next';
import { SimpleLayout } from '@/components/SimpleLayout';
import { Projects } from '@/components/Projects';
import { Travel } from '@/components/Travel';
import { Groups } from '@/components/Groups';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Channeling my creativity, one project at a time.',
};

export default function Portfolio() {
  return (
    <SimpleLayout
      title={
        <>
          Channeling my creativity,{' '}
          <span className="text-lime-700 dark:text-amber-400">
            one project at a time
          </span>
          .
        </>
      }
      intro="Step into my creative corner, a casual space where all my latest projects hang out."
    >
      <Groups />
      <Projects />
    </SimpleLayout>
  );
}
