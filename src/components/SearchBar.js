import React, { useContext } from "react";
import CountrySearch from "./CountrySearch";
import RegionSelect from "./RegionSelect";
import { CountriesContext } from "../context/CountriesContext";

const SearchBar = () => {
  const {
    theme,
    regionList,
    searchText,
    setSearchText,
    region,
    setRegion,
  } = useContext(CountriesContext);
  return (
    <div className="searchbar">
      <CountrySearch
        theme={theme}
        searchText={searchText}
        searchHandler={setSearchText}
      />
    </div>
  );
};

export default SearchBar;
