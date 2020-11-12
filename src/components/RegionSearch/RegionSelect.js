import React, { useState } from "react";
import styles from "./RegionSearch.module.scss";

const RegionSelect = ({ buttonText, list, onSelect, selectedItem, theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleSelect = (item) => {
    toggleDropdown();
    onSelect(item);
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={`
              ${styles.Dropdown}
              ${theme === "dark" ? styles.dark : ""}
            `}
    >
      <div className={styles.clickArea} onClick={toggleDropdown}>
        <span>{selectedItem || buttonText}</span>
        {isOpen ? (
          <i className="fas fa-angle-up" />
        ) : (
          <i className="fas fa-angle-down" />
        )}
      </div>
      <ul className={isOpen ? styles.open : ""}>
        {selectedItem && <li onClick={() => handleSelect("")}>{buttonText}</li>}
        {list.map((item) => (
          <li
            key={item}
            className={item === selectedItem ? styles.selected : ""}
            onClick={() => handleSelect(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RegionSelect;
