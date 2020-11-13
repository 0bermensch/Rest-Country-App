import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CountriesContext } from "../../context/CountriesContext";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import styles from "./Header.module.scss";

const Header = () => {
  const { theme, toggleTheme } = useContext(CountriesContext);
  return (
    <div
      className={`${styles.Fwc} ${
        theme === "light" ? styles.light : styles.dark
      }`}
    >
      <div className={styles.Header}>
        <p>
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            Where in the world?
          </Link>
        </p>
        <ThemeSwitch theme={theme} toggleTheme={toggleTheme} />
      </div>
    </div>
  );
};

export default Header;
