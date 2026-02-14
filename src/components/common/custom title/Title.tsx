import styles from './Title.module.css';

type Props = {
  children: React.ReactNode;
  className?: string;
}

const Title = ({children, className}: Props) => {
  const titleClasses = `${className} ${styles.style}`;
  return (
    <span 
      className={titleClasses}
    >
      {children}
    </span>
  );
}

export { Title };
