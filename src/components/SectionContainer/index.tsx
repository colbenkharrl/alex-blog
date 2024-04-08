import { FC, ReactNode } from 'react';
import { IconComponent } from '../Icons';

export type SectionContainerProps = {
  Icon: IconComponent;
  title: string;
  children: ReactNode;
};

export const SectionContainer: FC<SectionContainerProps> = ({
  Icon,
  title,
  children,
}) => {
  return (
    <div
      className="my-8 rounded-2xl border border-lime-700/40 p-6 dark:border-amber-400/20"
      data-testid="SectionContainer"
    >
      <h2 className="flex text-sm font-semibold text-lime-700 dark:text-amber-400">
        <Icon className="h-6 w-6 flex-none stroke-lime-700 dark:stroke-amber-400" />
        <span className="ml-3">{title}</span>
      </h2>
      {children}
    </div>
  );
};
