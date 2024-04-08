import { TabConfig } from '@/data/recommendations';
import clsx from 'clsx';
import {
  ChangeEventHandler,
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useMemo,
} from 'react';

export type TabsProps<TName extends string = string> = {
  tabs: Record<TName, TabConfig<TName>>;
  currentTab: TName;
  onTabChange: Dispatch<SetStateAction<TName>>;
};

export const Tabs = <TName extends string = string>({
  tabs,
  currentTab,
  onTabChange,
}: TabsProps<TName>) => {
  const tabList = useMemo(
    () => Object.values(tabs) as TabConfig<TName>[],
    [tabs],
  );

  const onTabChangeInternal: ChangeEventHandler<HTMLSelectElement> =
    useCallback(
      (event) => {
        onTabChange(event.target.value as TName);
      },
      [onTabChange],
    );

  return (
    <>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        <select
          id="tabs"
          name="tabs"
          onChange={onTabChangeInternal}
          className="mt-4 block w-full rounded-md border-lime-700 bg-transparent py-2 pl-3 pr-10 text-base text-lime-700 focus:border-lime-700 focus:outline-none focus:ring-lime-700 dark:border-amber-400 dark:text-amber-400 dark:focus:border-amber-400 dark:focus:ring-amber-400 sm:text-sm"
          defaultValue={tabList[0].name}
        >
          {tabList.map((tab) => (
            <option
              key={tab.name}
              value={tab.name}
            >{`${tab.name} (${tab.items.length})`}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabList.map((tab) => (
              <button
                key={tab.name}
                className={clsx(
                  tab.name === currentTab
                    ? 'border-lime-700 text-lime-700 dark:border-amber-400 dark:text-amber-400'
                    : 'border-transparent text-zinc-800 hover:border-zinc-800 dark:text-zinc-200 dark:hover:border-zinc-200',
                  'flex whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium',
                )}
                aria-current={tab.name === currentTab ? 'page' : undefined}
                onClick={() => {
                  onTabChange(tab.name);
                }}
              >
                {tab.name}
                {tab.items.length ? (
                  <span
                    className={clsx(
                      tab.name === currentTab
                        ? 'bg-lime-700 text-zinc-50 dark:bg-amber-200 dark:text-zinc-800'
                        : 'bg-zinc-200 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200',
                      'ml-3 hidden rounded-full px-2.5 py-0.5 text-xs font-medium md:inline-block',
                    )}
                  >
                    {tab.items.length}
                  </span>
                ) : null}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};
