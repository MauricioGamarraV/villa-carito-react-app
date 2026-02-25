import type { ReactNode } from 'react';
import styles from './Content.module.css';

type Props = {
  children?: ReactNode;
  className?: string;
}

const Content = ({children, className}: Props) => {
  const contentClasses = `${styles.style} ${className}`;

  return (
    <p className={contentClasses}>{children}</p>
  );
}

export { Content };
