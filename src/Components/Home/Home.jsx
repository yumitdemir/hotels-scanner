import React from "react";
import styles from "./styles.module.css";
import Search from "./Search/Search";

function Home(props) {
  return (
    <div className={styles.Home}>
      <Search />
    </div>
  );
}

export default Home;
