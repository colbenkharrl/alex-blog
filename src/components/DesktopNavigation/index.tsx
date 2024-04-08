import { NavItem } from '@/components/NavItem';

export function DesktopNavigation(
  props: React.ComponentPropsWithoutRef<'nav'>,
) {
  return (
    <nav {...props}>
      <ul className="flex rounded-full bg-amber-50/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-lime-950/90 dark:text-zinc-200 dark:ring-white/10">
        <NavItem href="/">Home</NavItem>
        <NavItem href="/blog">Blog</NavItem>
        <NavItem href="/travel">Travel</NavItem>
        <NavItem href="/projects">Projects</NavItem>
        <NavItem href="/social">Social</NavItem>
      </ul>
    </nav>
  );
}
