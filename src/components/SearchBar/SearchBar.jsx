import React, { Component } from 'react';
import { SearchBarStyled } from './SearchBar.styled';

export default class SearchBar extends Component {
  render() {
    return (
      <SearchBarStyled>
        <form className="form">
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </SearchBarStyled>
    );
  }
}
