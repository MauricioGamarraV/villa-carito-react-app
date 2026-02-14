import styles from './App.module.css';
import { Button, Title, Content, Card, Input } from './components/common/index';
import { House } from 'lucide-react';

function App() {
  return (
    <div className={styles.container}>
      <Title className={styles.title}>Villa Carito</Title>

      <Title className={styles.customTitle}>Content</Title>

      <Content>Content Text</Content>

      <Button 
        onClick={() => console.log('Custom Button')}
        className={styles.button}
      >
        <House size={20} strokeWidth={"var(--ic-stroke-default)"} />
        Custom Button
      </Button>

      <Card>
        Card Info...
      </Card>

      <Input></Input>
    </div>
  )
}

export default App;
