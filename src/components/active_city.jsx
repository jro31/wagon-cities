import React from 'react';

const ActiveCity = (props) => {
  return (
    <div className="active-city" style={{backgroundImage: `url('${props.city.imageUrl}')`}}>
      <div>{props.city.name}</div>
      <div>{props.city.address}</div>
    </div>
  );
};

export default ActiveCity;
