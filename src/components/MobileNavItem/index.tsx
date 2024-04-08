import { Popover } from '@headlessui/react';
import Link from 'next/link';

export function MobileNavItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Popover.Button
        as={Link}
        href={href}
        className="block py-2 text-zinc-800 dark:text-zinc-200"
        data-testid="MobileNavItem"
      >
        {children}
      </Popover.Button>
    </li>
  );
}
