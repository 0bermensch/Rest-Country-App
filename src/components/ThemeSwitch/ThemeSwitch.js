import React from "react";

import styles from "./ThemeSwitch.scss";

const ThemeSwitch = (props) => (
  <div className={styles.ThemeSwitch} onClick={props.toggleTheme}>
    <p>
      {props.theme === "light" ? (
        <i className="far fa-moon"></i>
      ) : (
        <i className="fas fa-moon"></i>
      )}
    </p>
    <p>Dark Mode</p>
  </div>
);

export default ThemeSwitch;
