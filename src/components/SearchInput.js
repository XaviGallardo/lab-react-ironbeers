import React, { Component } from 'react';

class SearchInput extends Component {
  state = {
    value: '',
  };

  changeInputValue = event => {
    this.props.filterBeers(event.target.value);
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    return (
      <input
        className="input"
        type="text"
        value={this.state.value}
        onChange={this.changeInputValue}
        placeholder="Buzz"
      />
    );
  }
}

export default SearchInput;
