"use client";
import { useState } from "react";
import styles from "./userinput.module.css";
//import getWikiResults from "../library/getWikiResults";
import { useRouter } from 'next/navigation';


export default function UserInput() {
  const [userInput, setUserInput] = useState("");
  const router = useRouter();

  //LOGS
  //console.log("userInput: ", userInput);

  // METHODS

  const searchButtonHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //console.log("search button clicked!");
    //console.log('routing to userInput');
    router.push(`/${userInput}/`)
    //let wikiResults = getWikiResults(userInput);
    //let data = await wikiResults;
    //console.log("data received from getWikiResults", data);

    setUserInput("");
  };

  return (
    <form onSubmit={searchButtonHandler}>
      <div className={styles.userInputContainer}>
        <input
          className={styles.inputFieldWrapper}
          type="text"
          value={userInput}
          placeholder="Please enter your input"
          onChange={(e) => setUserInput(e.target.value)}
        ></input>
        <button type="submit" className={styles.searchButton}>
          Search
        </button>
      </div>
    </form>
  );
}
