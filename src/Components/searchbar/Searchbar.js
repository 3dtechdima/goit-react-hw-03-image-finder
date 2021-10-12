import React, { Component } from "react";
import PropTypes from "prop-types";
import { SearchbarStyle } from "./SearchbarStyle";

class Searchbar extends Component {
  state = {
    search: "",
  };

  getInputValue = (e) => {
    this.setState({ search: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const { onSearch } = this.props;
    onSearch(this.state.search);
    this.setState({ search: "" });
  };

  render() {
    return (
      <SearchbarStyle>
        <header className="Searchbar">
          <form className="SearchForm" onSubmit={this.onSubmit}>
            <button type="submit" className="SearchForm-button">
              <span className="SearchForm-button-label">Search</span>
            </button>

            <input
              className="SearchForm-input"
              type="text"
              name="find"
              autoComplete="off"
              autoFocus
              onChange={this.getInputValue}
              value={this.state.search}
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </SearchbarStyle>
    );
  }
}

Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Searchbar;
