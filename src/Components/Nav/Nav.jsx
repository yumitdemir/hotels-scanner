import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";

const Nav = () => {
  return (
    <div className={styles.nav}>
      <Link to={".."}>
        <p className={styles.logo}>Hotel Scanner</p>
      </Link>
      <div className={styles.navOptionListContainer}></div>
      <p>
        <a className={styles.github} href="https://github.com/yumitdemir">
          <AiFillGithub />
          yumitdemir
        </a>
      </p>
    </div>
  );
};

export default Nav;
