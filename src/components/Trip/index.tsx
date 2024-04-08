import Image, { ImageProps } from 'next/image';
import Link from 'next/link';

export interface Trip {
  title: string;
  description: string;
  image: ImageProps['src'];
  time: string;
  url: string;
}

export function Trip({ trip }: { trip: Trip }) {
  return (
    <li
      className="group relative flex items-start gap-2 sm:gap-4"
      data-testid="Role"
    >
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image
          src={trip.image}
          alt=""
          className="relative z-10 h-7 w-7"
          unoptimized
        />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="relative z-10 flex w-full flex-col text-sm font-medium text-zinc-900 dark:text-zinc-100 sm:flex-row">
          {trip.title}
          <div className="flex-grow" />
          <p className="relative z-10 text-xs text-lime-700 dark:text-amber-400">
            {trip.time}
          </p>
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          <div className="absolute -inset-x-2 -inset-y-2 z-0 scale-95 rounded-lg bg-amber-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-80 dark:bg-lime-950/50" />
          <Link href={trip.url}>
            <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
            <span className="relative z-10">{trip.description}</span>
            <br />
          </Link>
        </dd>
      </dl>
    </li>
  );
}
