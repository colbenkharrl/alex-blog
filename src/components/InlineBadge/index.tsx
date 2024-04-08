import { ComponentPropsWithoutRef, FC, ReactNode } from 'react';
import clsx from 'clsx';

export type InlineBadgeProps = ComponentPropsWithoutRef<'span'> & {
  children: ReactNode;
};

export const InlineBadge: FC<InlineBadgeProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <span
      className={clsx(
        className,
        'inline-flex items-center rounded-md bg-amber-50 px-2 py-1 text-xs font-medium text-lime-700 ring-1 ring-inset ring-amber-400/10 hover:bg-amber-100 dark:bg-amber-400/10 dark:text-amber-400 dark:ring-amber-400/20 dark:hover:bg-amber-400/20',
      )}
      {...props}
    >
      {children}
    </span>
  );
};
