import React, { Component } from 'react';
import HomeButton from '../components/HomeButton';
import beerService from '../services/beerService';

class NewBeer extends Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: '',
    style: 'none',
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    await beerService.newBeer(this.state);
    this.setState({
      style: 'block',
    });
    setTimeout(() => {
      this.setState({
        style: 'none',
      });
    }, 2000);
  };

  render() {
    const {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    } = this.state;
    return (
      <div>
        <HomeButton props={this.props} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={this.handleInputChange}
          />
          <label htmlFor="tagline">Tagline</label>
          <input
            type="text"
            name="tagline"
            id="tagline"
            value={tagline}
            onChange={this.handleInputChange}
          />

          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            rows="10"
            name="description"
            id="description"
            value={description}
            onChange={this.handleInputChange}
          />

          <label htmlFor="firstBrewed">First brewed</label>
          <input
            type="text"
            name="first_brewed"
            id="firstBrewed"
            value={first_brewed}
            onChange={this.handleInputChange}
          />
          <label htmlFor="brewersTips">Brewers Tips</label>
          <input
            type="text"
            name="brewers_tips"
            id="brewersTips"
            value={brewers_tips}
            onChange={this.handleInputChange}
          />

          <label htmlFor="attenuation_level">Attenuation Level</label>
          <input
            type="number"
            name="attenuation_level"
            id="attenuationLevel"
            value={attenuation_level}
            onChange={this.handleInputChange}
          />
          <label htmlFor="contributedBy">Contributed by</label>
          <input
            type="text"
            name="contributed_by"
            id="contributedBy"
            value={contributed_by}
            onChange={this.handleInputChange}
          />
          <button type="submit">add new beer</button>
        </form>
        <div className="message-box" style={{ display: this.state.style }}>
          Beer saved!
        </div>
      </div>
    );
  }
}

export default NewBeer;
