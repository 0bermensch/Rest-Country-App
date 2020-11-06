import React, { useContext, useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import { CountriesContext } from "../context/CountriesContext";

const CountryDetail = ({ match, history, countries }) => {
  const { getCountry, getCountryNameByCode, theme } = useContext(
    CountriesContext
  );
  const [country, setCountry] = useState(null);

  useEffect(() => {
    setCountry(getCountry(match.params.countryCode.toUpperCase()));
  }, [match.params.countryCode, getCountry]);
  return (
    <div>
      <button
        onClick={() => {
          history.goBack();
        }}
      >
        <p>back</p>
      </button>
      <div className="countrydetail__content">
        {/* <img
          className="countrydetail__flag"
          src={country.flag}
          alt={country.name}
        /> */}
        <h1 className="countrydetail__name">{countries.name}</h1>
        <ul>
          <li>
            <b>Native Name:</b> {country.nativeName}
          </li>
          <li>
            <b>Population:</b> {country.population}
          </li>
          <li>
            <b>Region:</b> {country.region}
          </li>
          <li>
            <b>Sub Region:</b> {country.subregion}
          </li>
          <li>
            <b>Capital:</b> {country.capital}
          </li>
        </ul>
        <ul>
          <li>
            <b>Top Level Domain:</b> {country.topLevelDomain}
          </li>
          <li>
            <b>Currencies:</b>{" "}
            {country.currencies.map((currency) => currency.name).join(", ")}
          </li>
          <li>
            <b>Languages:</b>{" "}
            {country.languages.map((language) => language.name).join(", ")}
          </li>
        </ul>
        {country.borders.length > 0 && (
          <div className="countrydetail__borders">
            <h2>Border Countries:</h2>
            {country.borders.map((countryCode) => (
              <Link to={countryCode} key={countryCode}>
                <button>{getCountryNameByCode(countryCode)}</button>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default withRouter(CountryDetail);
