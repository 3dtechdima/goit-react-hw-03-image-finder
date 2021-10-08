import React from "react";
import PropTypes from "prop-types";
import { SearchbarStyle } from "./SearchbarStyle";
const Searchbar = ({ onSubmit }) => {
  return (
    <SearchbarStyle>
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={onSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            name="find"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    </SearchbarStyle>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
