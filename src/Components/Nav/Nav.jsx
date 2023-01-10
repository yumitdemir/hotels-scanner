import React from "react";
import styles from "./styles.module.css";

const Nav = () => {
  return (
    <div className={styles.nav}>
      <p className={styles.logo}>Hotel Scanner</p>
      <div className={styles.navOptionListContainer}>
        <ul className={styles.navOptionList}>
          <li>Hotels</li>
          <li>Rent a Car</li>
          <li>Flights</li>
        </ul>
      </div>
      <p>About Us</p>
    </div>
  );
};

export default Nav;
