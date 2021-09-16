import React from "react";
import { useRef } from "react";

import svg from "../../img/icons.svg";

const SearchForm = (props) => {
  const enteredSearchRef = useRef();

  // Form Submit handler
  const searchFormSubmitHandler = (event) => {
    event.preventDefault();

    const enteredSearchValue = enteredSearchRef.current.value;

    if (enteredSearchValue.trim().length === 0) return;

    // Setting search result
    props.onSearchRecipe(enteredSearchValue);
    enteredSearchRef.current.value = "";
  };

  return (
    <form className="search" onSubmit={searchFormSubmitHandler}>
      <input
        type="text"
        className="search__field"
        placeholder="Search over 1,000,000 recipes..."
        ref={enteredSearchRef}
      />
      <button className="btn search__btn" type="submit">
        <svg className="search__icon">
          <use href={`${svg}#icon-search`}></use>
        </svg>
        <span>Search</span>
      </button>
    </form>
  );
};

export default SearchForm;
