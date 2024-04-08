import { GroupIcon, LinkIcon, PaintIcon } from '@/components/Icons';
import { SectionContainer } from '../SectionContainer';
import { projects } from '@/data/projects';
import { CardGrid } from '../CardGrid';
import { groups } from '@/data/groups';

export function Projects() {
  return (
    <SectionContainer title="Projects & Crafts" Icon={PaintIcon}>
      <CardGrid items={projects} />
    </SectionContainer>
  );
}
