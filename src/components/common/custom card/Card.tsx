import styles from './Card.module.css';

type Props = {
  children: React.ReactNode;
}

const Card = ({children}: Props) => {
  return (
    <div className={styles.style}>
      {children}
    </div>
  )
}

export { Card };
