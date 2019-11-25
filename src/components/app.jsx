import React, { Component } from 'react';
import CityList from '../containers/city_list';
import ActiveCity from './active_city';

// TODO: remove this line and use Redux
const cities = [
  { name: 'Paris', address: '16 Villa Gaudelet, 75011 Paris', slug: 'paris', imageUrl: 'https://www.telegraph.co.uk/content/dam/Travel/hotels/europe/france/paris/paris-cityscape-overview-guide.jpg' },
  { name: 'London', address: '14-22 Elder St, London E1 6BT', slug: 'london', imageUrl: 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/11/20/11/Wonderland01.jpg' },
  { name: 'Berlin', address: 'Rudi-Dutschke-Straße 26, 10969 Berlin', slug: 'berlin', imageUrl: 'https://media.globalchampionsleague.com/cache/750x429/assets/berlin.jpg' },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCity: cities[0],
      cities
    };
  }

  selectCity = (index) => {
    this.setState({ selectedCity: cities[index] });
  }

  render() {
    return (
      <div className="app">
        <CityList
          cities={cities}
          selectedCity={this.state.selectedCity}
          selectCity={this.selectCity}
        />
        <ActiveCity city={this.state.selectedCity} />
      </div>
    );
  }
};

export default App;
