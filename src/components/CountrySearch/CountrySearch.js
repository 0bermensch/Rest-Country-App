import React from "react";
import styles from "./CountrySearch.module.scss";

const CountrySearch = (props) => {
  return (
    <div
      className={`${styles.SearchForm} ${
        props.theme === "dark" ? styles.dark : null
      }`}
    >
      <input
        type="text"
        placeholder="Search Country"
        value={props.searchText}
        onChange={(e) => {
          props.searchHandler(e.target.value);
        }}
      />
    </div>
  );
};

export default CountrySearch;
