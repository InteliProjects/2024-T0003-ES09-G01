/** react */
import { FC } from "react";

/** style */
import styles from "./styles.module.scss";
////////////////////////////////////////////////////////////////////////////////

interface Props {
  title: string;
  children: React.ReactNode;
}

const Card: FC<Props> = ({ title, children }: Props) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      {children}
    </div>
  );
};

export default Card;
