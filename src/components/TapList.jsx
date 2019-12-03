import React from 'react';
import Beer from './Beer';
import PropTypes from 'prop-types';

var masterBeerList = [
  {
    name: 'Arrogant Bastard',
    brand: 'Stone',
    type: 'Ale',
    price: '5',
    alcoholContent: '7.2'
  },
  {
    name: 'Black Butte',
    brand: 'Deschutes',
    type: 'Porter',
    price: '4',
    alcoholContent: '5.2'
  },
  {
    name: 'Bud Light',
    brand: 'Budweiser',
    type: 'Lager',
    price: '2',
    alcoholContent: '5'
  },
  {
    name: 'Newcastle Brown Ale',
    brand: 'Heineken',
    type: 'Brown Ale',
    price: '3',
    alcoholContent: '4.7'
  }
];

function TapList(props){
  return (
    <div>
      <hr/>
      {masterBeerList.map((beer, index)=>
        <Beer name={beer.name}
          brand={beer.brand}
          type={beer.type}
          price={beer.price}
          alcoholContent={beer.alcoholContent}
          key={index}/>
      )}
    </div>
  );
}

export default TapList;
