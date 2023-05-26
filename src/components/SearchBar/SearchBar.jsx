import React, { Component } from 'react';
import { SearchBarStyled } from './SearchBar.styled';

export default class SearchBar extends Component {
  state = {
    input: '',
  };

  handleChange = e => {
    const { value } = e.currentTarget;
    this.setState({ input: value.trim() });
  };
  submitHandler = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState(prevState => ({ ...prevState, input: '' }));
  };

  render() {
    return (
      <SearchBarStyled>
        <form className="form" onSubmit={this.submitHandler}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.input}
          />
        </form>
      </SearchBarStyled>
    );
  }
}
