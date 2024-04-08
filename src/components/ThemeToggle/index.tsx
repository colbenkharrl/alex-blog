import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from '@/components/Icons';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const otherTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      type="button"
      aria-label={mounted ? `Switch to ${otherTheme} theme` : 'Toggle theme'}
      className="group rounded-full bg-amber-50/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition hover:ring-lime-700 dark:bg-lime-950/90 dark:ring-white/10 dark:hover:ring-amber-400"
      onClick={() => setTheme(otherTheme)}
      data-testid="ThemeToggle"
    >
      <SunIcon className="h-6 w-6 fill-amber-50 stroke-lime-700 transition dark:hidden" />
      <MoonIcon className="hidden h-6 w-6 fill-lime-950 stroke-amber-400 transition dark:block" />
    </button>
  );
}
