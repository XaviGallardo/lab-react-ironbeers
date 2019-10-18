import axios from 'axios';
import { async } from 'q';

class BeerService {
  constructor() {
    this.beer = axios.create({
      baseURL: 'https://ih-beer-api.herokuapp.com/beers/',
    });
  }

  // getAllBeers() {
  //   return this.beer
  //     .get()
  //     .then(response => response)
  //     .catch(error => {
  //       console.log('The error is: ', error);
  //     });
  // }

  async getAllBeers() {
    try {
      const response = await this.beer.get();
      return response;
    } catch (error) {
      console.log('The error is: ', error);
    }
  }

  async getBeer(id) {
    try {
      const response = await this.beer.get(`/${id}`);
      return response;
    } catch (error) {
      console.log('The error is: ', error);
    }
  }

  async getRandomBeer() {
    try {
      const response = await this.beer.get('/random');
      return response;
    } catch (error) {
      console.log('The error is: ', error);
    }
  }

  async newBeer(beer) {
    try {
      const response = await this.beer.post('/new', beer);
      return response;
    } catch (error) {
      console.log('The error is: ', error);
    }
  }

  getQuery(query) {
    return this.beer.get(`search?q=${query}`).then(({ data: beer }) => beer);
  }
}
const beerService = new BeerService();
export default beerService;
