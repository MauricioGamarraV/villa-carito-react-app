import type { ReactNode } from 'react';
import styles from './Button.module.css'

type Props = {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
  onClick: () => void;
}

const Button = ({children, onClick, className}: Props) => {
  const buttonClasses = `${styles.style} ${className}`;

  return (
    <button 
      onClick={onClick}
      className={buttonClasses}
    >
      {children}
    </button>
  );
}

export { Button };
