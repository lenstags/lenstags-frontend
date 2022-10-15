import nFormatter from '@lib/nFormatter';
import clsx from 'clsx';
import type { FC, ReactNode } from 'react';

interface Props {
  name: string;
  icon: ReactNode;
  active: boolean;
  count?: number;
  onClick: () => void;
}

const TabButton: FC<Props> = ({ name, icon, active, count, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        { 'text-black bg-lime-300 dark:bg-opacity-20 bg-opacity-100 font-bold': active },
        'flex items-center space-x-2 rounded-lg px-4 sm:px-3 py-2 sm:py-1 text-black hover:bg-lime-500 dark:hover:bg-opacity-20 hover:bg-opacity-100'
      )}
      aria-label={name}
    >
      {icon}
      <span className="hidden sm:block">{name}</span>
      {count ? (
        <span className="px-2 text-xs rounded-full bg-lime-300 dark:bg-lime-500">{nFormatter(count)}</span>
      ) : null}
    </button>
  );
};

export default TabButton;
