import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function NavItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const isActive = usePathname() === href;

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          'relative block px-3 py-2 transition',
          isActive
            ? 'text-lime-700 dark:text-amber-400'
            : 'hover:text-lime-700 dark:hover:text-amber-400',
        )}
        data-testid="NavItem"
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-lime-700/0 via-lime-700/40 to-lime-700/0 dark:from-amber-400/0 dark:via-amber-400/40 dark:to-amber-400/0" />
        )}
      </Link>
    </li>
  );
}
