import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  CountriesContext,
  CountriesProvider,
} from "./context/CountriesContext";
import { getCountries } from "./api/ApiCalls";
import AllCountries from "./pages/AllCountries";
import CountryDetail from "./pages/CountryDetail";

function App() {
  const { theme, setCountries, setAllCountries } = useContext(CountriesContext);

  useEffect(() => {
    getCountries().then(({ data }) => {
      setAllCountries(data);
      setCountries(data);
    });
  }, [setCountries, setAllCountries]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={AllCountries} />
          <Route path="/:countryCode" exact component={CountryDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
