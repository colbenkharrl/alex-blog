import { type Metadata } from 'next';
import { SimpleLayout } from '@/components/SimpleLayout';
import { Projects } from '@/components/Projects';
import { Travel } from '@/components/Travel';
import { Recommendations } from '@/components/Recommendations';

export const metadata: Metadata = {
  title: 'Travel',
  description:
    'Wandering the globe and experiencing humanity with my favorite people.',
};

export default function Portfolio() {
  return (
    <SimpleLayout
      title={
        <>
          Wandering the globe and{' '}
          <span className="text-lime-700 dark:text-amber-400">
            experiencing humanity
          </span>
          .
        </>
      }
      intro="Tag along on our global adventures, where we feast, explore, and take many photographs of flowers."
    >
      <Travel />
      <Recommendations />
    </SimpleLayout>
  );
}
