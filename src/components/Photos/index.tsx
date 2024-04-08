import Image from 'next/image';
import clsx from 'clsx';
import holdingQuinnPhoto from '@/images/photos/lifting-quinn.jpg';
import walkingPhoto from '@/images/photos/family-walking.jpg';
import kissingPhoto from '@/images/photos/kissing-quinn.jpg';

export function Photos() {
  return (
    <div className="mt-16 sm:mt-20" data-testid="Photos">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        <div
          className={clsx(
            'relative aspect-[1/1] w-28 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-40 sm:rounded-2xl md:w-48 lg:w-56 xl:w-64 2xl:w-72',
          )}
        >
          <Image
            src={holdingQuinnPhoto}
            alt=""
            sizes="(min-width: 640px) 18rem, 11rem"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div
          className={clsx(
            'relative aspect-[1/1] w-28 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-40 sm:rounded-2xl md:w-48 lg:w-56 xl:w-64 2xl:w-72',
          )}
        >
          <Image
            src={kissingPhoto}
            alt=""
            sizes="(min-width: 640px) 18rem, 11rem"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div
          className={clsx(
            'relative aspect-[1/1] w-28 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-40 sm:rounded-2xl md:w-48 lg:w-56 xl:w-64 2xl:w-72',
          )}
        >
          <Image
            src={walkingPhoto}
            alt=""
            sizes="(min-width: 640px) 18rem, 11rem"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
