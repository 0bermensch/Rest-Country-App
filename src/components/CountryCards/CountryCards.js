import React, { useContext } from "react";
import { CountriesContext } from "../../context/CountriesContext";
import { withRouter } from "react-router-dom";
import styles from "./CountryCards.module.scss";

const CountryCards = ({ history }) => {
  const { theme, countries } = useContext(CountriesContext);

  console.log({ countries });
  return (
    <div className={styles.CountryGrid}>
      {countries.map((country) => (
        <div
          className={`${styles.Country} ${
            theme === "light" ? styles.light : styles.dark
          }`}
          onClick={() => history.push(country.alpha3Code)}
        >
          <img className={styles.Flag} src={country.flag} alt={country.name} />
          <div className={styles.infoBlock}>
            <h1>{country.name}</h1>
            <ul>
              <li>
                <strong>Population:&nbsp;</strong>
                {country.population}
                <br />
              </li>
              <li>
                <strong>Region:&nbsp;</strong>
                {country.region}
                <br />
              </li>
              <li>
                <strong>Capital:&nbsp;</strong>
                {country.capital}
                <br />
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default withRouter(CountryCards);
