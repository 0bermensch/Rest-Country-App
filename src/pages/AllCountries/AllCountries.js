import React, { useContext } from "react";
import { CountriesContext } from "../../context/CountriesContext";
import SearchBar from "../../components/SearchBar/SearchBar";
import CountryCards from "../../components/CountryCards/CountryCards";
import styles from "./AllCountries.module.scss";

const AllCountries = () => {
  const { theme } = useContext(CountriesContext);

  return (
    <div
      className={`${styles.AllCountryPage} ${
        theme === "dark" ? styles.dark : null
      }`}
    >
      <SearchBar />
      <div className={styles.container}>
        <CountryCards />
      </div>
    </div>
  );
};

export default AllCountries;
