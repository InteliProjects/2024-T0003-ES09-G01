/** react */
import { FC } from "react";

/** style */
import styles from "./styles.module.scss";
import { LogoutButton } from "../buttons/Logout";
import Link from "next/link";
import Image from "next/image";
////////////////////////////////////////////////////////////////////////////////

interface Props {}

const Header: FC<Props> = ({}: Props) => {
  return (
    <nav className={styles.nav}>
      <div>
        <Image src="/logo.svg" alt="logo" width={164} height={46} />
      </div>
      <ul>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/upload">Upload</Link>
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
