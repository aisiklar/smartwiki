"use client";
import styles from "./header.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [userInput, setUserInput] = useState("");

  //LOGS
  console.log("userInput: ", userInput);

  return (
    <nav className={styles.headerContainer}>
      <Link href="/dictionary" className={styles.headerLinks}>
        dictionary(soon)
      </Link>
      <div>
        <input
          type="text"
          value={userInput}
          placeholder="Please enter your input"
          onChange={(e) => setUserInput(e.target.value)}
        ></input>
      </div>
      <Link className={styles.headerLinks} href="wikipedia">
        Wikipedia
      </Link>
    </nav>
  );
}
