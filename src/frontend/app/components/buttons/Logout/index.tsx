import styles from "../styles.module.scss";

export const LogoutButton = () => {
  return (
    <a className={styles.button} href="/api/auth/logout">
      Log Out
    </a>
  );
};
