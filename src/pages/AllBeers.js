import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import beerService from '../services/beerService';
import Card from '../components/Card';
import HomeButton from '../components/HomeButton';
import SearchInput from '../components/SearchInput';
import Search from '../components/Search';

class AllBeers extends Component {
  state = {
    beers: [],
    value: '',
  };

  componentDidMount() {
    beerService
      .getAllBeers()
      .then(response => {
        const beersFromAPI = response.data;
        console.log(
          'TCL: AllBeers -> componentDidMount -> beersFromAPI',
          beersFromAPI,
        );
        this.setState({
          beers: beersFromAPI,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleQuery = query => {
    beerService.getQuery(query).then(beers => {
      this.setState({
        beers,
      });
    });
  };

  filterBeers = value => {
    this.setState({
      value: value,
    });
  };

  render() {
    const { beers } = this.state;
    return (
      <div>
        <HomeButton props={this.props} />
        <h1>BEER's LIST</h1>
        <Search query={this.handleQuery} />
        <SearchInput filterBeers={this.filterBeers} />
        {beers.length > 0 ? (
          beers.map((beer, index) => {
            if (beer.name.includes(this.state.value)) {
              return (
                <Link className="link" to={`/beers/${beer._id}`} key={beer._id}>
                  <Card beer={beer}></Card>
                </Link>
              );
            } else {
              return null;
            }
          })
        ) : (
          <p>Loading data from server...</p>
        )}
      </div>
    );
  }
}

export default AllBeers;
