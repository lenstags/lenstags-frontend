import clsx from 'clsx';
import type { ElementType, FC, MouseEvent, ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  forceRounded?: boolean;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}

export const Card: FC<CardProps> = ({
  children,
  as: Tag = 'div',
  className = '',
  forceRounded = false,
  onClick
}) => {
  return (
    <Tag
      className={clsx(
        forceRounded ? '' : 'rounded-none ',
        'border-black border-b-2 border-r-2 border-l-2 dark:border-black bg-white dark:bg-black',
        className
      )}
      onClick={onClick}
    >
      {children}
    </Tag>
  );
};
