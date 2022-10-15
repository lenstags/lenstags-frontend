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
        { 'text-black dark:bg-opacity-20 bg-primary bg-opacity-100 font-bold w-full': active },
        'flex w-full items-center space-x-2 px-4 sm:px-3 py-2 sm:py-1 text-black hover:bg-hoverPrimary dark:hover:bg-opacity-20 hover:bg-opacity-100'
      )}
      aria-label={name}
    >
      {icon}
      <span className="hidden sm:block">{name}</span>
      {count ? (
        <span className=" text-xs rounded-full bg-primary dark:bg-primary">{nFormatter(count)}</span>
      ) : null}
    </button>
  );
};

export default TabButton;
