import clsx from 'clsx';
import type { FC } from 'react';

interface Props {
  slug: string;
  prefix?: string;
  className?: string;
}

const Slug: FC<Props> = ({ slug, prefix, className = '' }) => {
  return (
    <span
      className={clsx(
        'text-transparent bg-clip-text bg-gradient-to-r from-lime-400 dark:from-lime-300 to-lime-700 dark:to-lime-400 text-xs sm:text-sm',
        className
      )}
    >
      {prefix}
      {slug}
    </span>
  );
};

export default Slug;
