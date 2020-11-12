import React, { useContext } from "react";
import CountrySearch from "../CountrySearch/CountrySearch";
import RegionSelect from "../RegionSearch/RegionSelect";
import { CountriesContext } from "../../context/CountriesContext";
import styles from "./SearchBar.module.scss";

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
    <div className={styles.SearchBar}>
      <CountrySearch
        theme={theme}
        searchText={searchText}
        searchHandler={setSearchText}
      />
      <RegionSelect
        list={regionList}
        theme={theme}
        selectedItem={region}
        onSelect={setRegion}
        buttonText="Filter by Region"
      />
    </div>
  );
};

export default SearchBar;
