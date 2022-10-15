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
        'text-transparent bg-clip-text bg-gradient-to-r from-hoverPrimary dark:from-primary to-hoverPrimary dark:to-primary text-xs sm:text-sm',
        className
      )}
    >
      {prefix}
      {slug}
    </span>
  );
};

export default Slug;
