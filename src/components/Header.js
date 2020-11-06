import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CountriesContext } from "../context/CountriesContext";

const Header = () => {
  const { theme, toggleTheme } = useContext(CountriesContext);
  return <div></div>;
};

export default Header;
