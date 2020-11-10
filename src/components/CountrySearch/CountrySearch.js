import React from "react";

const CountrySearch = (props) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search Country"
        value={props.searchText}
        onChange={(e) => {
          props.searchHandler(e.target.value);
        }}
      />
    </div>
  );
};

export default CountrySearch;
