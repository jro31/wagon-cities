import React from 'react';

import City from './city';

const CityList = (props) => {
  const renderList = () => {
    return props.cities.map((city, index) => {
      return (
        <City
          city={city.name}
          key={city.slug}
          selected={city.name === props.selectedCity.name}
          index={index}
          selectCity={props.selectCity}
        />
      );
    });
  };

  return (
    <div className="cities">
      {renderList()}
    </div>
  );
};

export default CityList;
