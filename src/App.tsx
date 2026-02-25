import styles from './App.module.css';
import { Button, Title, Content, Card, Input } from './components/common/index';
import { House, User, Lock } from 'lucide-react';

function App() {
  return (
    <div className={styles.container}>
      <Title className={styles.title}>Villa Carito</Title>

      <Title className={styles.customTitle}>Inicio de sesion</Title>

      <Content>Content Text</Content>

      <Card>
        Card Info...
      </Card>

      <Input
        label='Username'
        type='text'
        classNameLabel={styles.inputTitle} 
        classNameInput='' 
        icon= {<User size={20} strokeWidth={"var(--ic-stroke-default)"} />}
        placeholder='Ej. casa-7'
        onChange={() =>{}}
      />
      
      <Input
        label='Password'
        type='password'
        classNameLabel={styles.inputTitle} 
        classNameInput='' 
        icon= {<Lock size={20} strokeWidth={"var(--ic-stroke-default)"} />}
        placeholder='*****'
        onChange={() =>{}}
      />

       <Button 
        onClick={() => console.log('Custom Button')}
        className={styles.button}
      >
        <House size={20} strokeWidth={"var(--ic-stroke-default)"} />
          Login
      </Button>
    </div>
  )
}

export default App;
