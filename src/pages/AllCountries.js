import React, { useContext } from "react";
import { CountriesContext } from "../context/CountriesContext";
import SearchBar from "../components/SearchBar";
import CountryCards from "../components/CountryCards";

const AllCountries = () => {
  const { theme } = useContext(CountriesContext);

  return (
    <div className="allcountries">
      <SearchBar />
      <CountryCards />
    </div>
  );
};

export default AllCountries;
