import React, { Component } from 'react';
import beerService from '../services/beerService';
import BeerDetailCard from '../components/BeerDetailCard';
import HomeButton from '../components/HomeButton';

class SingleBeer extends Component {
  state = {
    beer: null,
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    beerService.getBeer(id).then(response => {
      this.setState({
        beer: response.data,
      });
    });
  }
  render() {
    const { beer } = this.state;

    return (
      <div>
        <HomeButton props={this.props} />
        <div className="single-beer">
          {beer ? (
            <BeerDetailCard beer={beer} />
          ) : (
            <p>Loading data from server...</p>
          )}
        </div>
      </div>
    );
  }
}

export default SingleBeer;
