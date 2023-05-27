"use client";
import styles from "./header.module.css";
import Link from "next/link";
import UserInput from "./userInput.comp";

export default function Header() {
  return (
    <nav className={styles.headerContainer}>
      <UserInput />
    </nav>
  );
}
