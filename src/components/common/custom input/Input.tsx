import styles from './Input.module.css';
import { Title } from '../index';
import type { ReactNode } from 'react';

type Props = {
  classNameLabel?: string;
  classNameInput?: string;
  onChange: () => void;
  icon?: ReactNode;
  label?: string;
  placeholder?: string;
  type: string;
}

const Input = ({ classNameLabel, classNameInput, onChange, icon, label, placeholder, type }: Props) => {
  const labelClasses = `${styles.label} ${classNameLabel || ''}`;
  const inputClasses = `${styles.input} ${classNameInput || ''}`;

  return (
    <div className={styles.style}>
      {label && <Title className={labelClasses}>{label}</Title>}
      
      <div className={styles.inputWrapper}>
        {icon && <div className={styles.iconContainer}>{icon}</div>}
        <input 
          className={inputClasses} 
          type={type} 
          placeholder={placeholder || "Escribe aqui..."}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export { Input };
