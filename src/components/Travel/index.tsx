import { Trip } from '@/components/Trip';
import { GlobeIcon } from '@/components/Icons';
import { SectionContainer } from '../SectionContainer';
import { trips } from '@/data/trips';

export function Travel() {
  return (
    <SectionContainer title="Trips" Icon={GlobeIcon}>
      <ol className="mt-6 space-y-4" role="list">
        {trips.map((role, roleIndex) => (
          <Trip key={roleIndex} trip={role} />
        ))}
      </ol>
    </SectionContainer>
  );
}
