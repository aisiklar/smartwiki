"use client";
import { useState } from "react";
import styles from "./userinput.module.css";

export default function UserInput() {
  const [userInput, setUserInput] = useState("");

  //LOGS
  console.log("userInput: ", userInput);

  // METHODS

  const searchButtonHandler = () => {
    console.log("search button clicked!");
  };

  return (
    <div className={styles.userInputContainer}>
      <input
        className={styles.inputFieldWrapper}
        type="text"
        value={userInput}
        placeholder="Please enter your input"
        onChange={(e) => setUserInput(e.target.value)}
      ></input>
      <button
        type="button"
        onClick={searchButtonHandler}
        className={styles.searchButton}
      >
        Search
      </button>
    </div>
  );
}
