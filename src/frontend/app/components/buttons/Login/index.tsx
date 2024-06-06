import styles from "../styles.module.scss";

const LoginButton = () => {
  return (
    <a className={styles.button} href="/api/auth/login">
      Log In
    </a>
  );
};

export default LoginButton;
