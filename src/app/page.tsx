import { Container } from '@/components/Container';
import { IconLink } from '@/components/IconLink';
import { InstagramIcon } from '@/components/Icons';
import { Photos } from '@/components/Photos';

export default function Home() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Hi, my name is{' '}
            <span className="text-lime-700 dark:text-amber-400">Alex</span>. 🌻
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I&apos;m navigating the beautiful chaos of motherhood, yoga, and
            life in sunny Phoenix with my sweet baby boy, Quinn, and my
            wonderful husband, Matt. Join me as I share our family adventures,
            my journey on the yoga mat, and the everyday moments that make life
            and motherhood so special. Let&apos;s embrace the mess, the magic,
            and everything in between together.
          </p>
          <IconLink
            Icon={InstagramIcon}
            text="Keep up with me on Instagram."
            href="https://www.instagram.com/alex.kharrl/"
            target="_blank"
            className="mt-4 fill-lime-700 hover:text-lime-700 dark:fill-amber-400 dark:hover:text-amber-400"
          />
        </div>
      </Container>
      <Photos />
    </>
  );
}
