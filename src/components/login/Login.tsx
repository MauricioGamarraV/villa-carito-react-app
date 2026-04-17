import { House, User, Lock } from "lucide-react";
import { Button, Title, Input } from "../common/index";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.style}>
      <Title className={styles.customTitle}>Inicio de sesion</Title>
      <div className={styles.logoContainer}>
        <Title className={styles.title}>Villa Carito</Title>
      </div>
      <Input
        label="Username"
        type="text"
        classNameLabel={styles.inputTitle}
        classNameInput=""
        icon={<User size={20} strokeWidth={"var(--ic-stroke-default)"} />}
        placeholder="Ej. casa-7"
        onChange={() => {}}
      />

      <Input
        label="Password"
        type="password"
        classNameLabel={styles.inputTitle}
        classNameInput=""
        icon={<Lock size={20} strokeWidth={"var(--ic-stroke-default)"} />}
        placeholder="*****"
        onChange={() => {}}
      />

      <Button
        onClick={() => console.log("Custom Button")}
        className={styles.button}
      >
        <House size={20} strokeWidth={"var(--ic-stroke-default)"} />
        Inicio de sesion
      </Button>
    </div>
  );
};

export default Login;
