import React from "react";
import styles from "./SearchBar.module.css";
import { BsSearch } from "react-icons/bs"

export default function SearchBar() {
  return (
    <form className={styles.SearchBar}>
      <BsSearch className={styles.icon} />
      <input className={styles.input} placeholder="buscar..." />
      <button className={styles.submit} type="submit">Buscar</button>
      <button className={styles.reset} type="reset">X</button>
    </form>
  );
}