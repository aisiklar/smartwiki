"use client";
import { useState } from "react";
import styles from "./userinput.module.css";
import getWikiResults from "../library/getWikiResults";

export default function UserInput() {
  const [userInput, setUserInput] = useState("");

  //LOGS
  console.log("userInput: ", userInput);

  // METHODS

  const searchButtonHandler = async () => {
    console.log("search button clicked!");
    let wikiResults = getWikiResults(userInput);
    let data = await wikiResults;
    setUserInput("");
    console.log("data received from getWikiResults", data);
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
