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
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </SearchBarStyled>
    );
  }
}
