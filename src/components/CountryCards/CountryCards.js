import React, { useContext } from "react";
import { CountriesContext } from "../../context/CountriesContext";
import { withRouter } from "react-router-dom";

const CountryCards = ({ history }) => {
  const { theme, countries } = useContext(CountriesContext);
  return (
    <div className="countriescard">
      {countries.map((country) => (
        <div onClick={() => history.push(country.alpha3Code)}>
          <img className="countriescard__flag" src={country.flag} />
          <div className="countriescard__info">
            <div className="countriescard__countryname">{country.name}</div>
            <div className="countriescardy__population">
              Population: {country.population}
            </div>
            <div className="countriescard__region">
              Region: {country.region}
            </div>
            <div className="countriescard__capital">
              Capital: {country.capital}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default withRouter(CountryCards);
