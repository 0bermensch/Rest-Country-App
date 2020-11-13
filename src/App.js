import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CountriesContext } from "./context/CountriesContext";
import { getCountries } from "./api/ApiCalls";
import AllCountries from "./pages/AllCountries/AllCountries";
import CountryDetail from "./pages/CountryDetail/CountryDetail";
import Header from "./components/Header/Header";
import "./App.scss";

function App() {
  const { theme, setCountries, setAllCountries } = useContext(CountriesContext);

  useEffect(() => {
    getCountries().then(({ data }) => {
      setAllCountries(data);
      setCountries(data);
    });
  }, [setCountries, setAllCountries]);

  return (
    <div className={`App ${theme === "dark" ? "dark" : ""}`}>
      <Header />
      <Route path="/" exact component={AllCountries} />
      <Route path="/:countryCode" component={CountryDetail} />
    </div>
  );
}

export default App;
