import styles from "./header.module.css";
import Image from "next/image";
import UserInput from "./userInput.comp";
import HomeIcon from "./HomeIcon";

export default function Header() {
  return (
    <nav className={styles.headerTopContainer}>
      <div className={styles.homeWrapper}>
        <HomeIcon />
      </div>
      <nav className={styles.headerContainer}>
        <UserInput />
      </nav>
    </nav>
  );
}
