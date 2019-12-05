import React from 'react';
import PropTypes from 'prop-types';

function Beer(props){
  var componentStyle = {
    backgroundColor: 'lightgrey',
    padding: 10
  };
  return (
    <div style={componentStyle}>
      <div className='card bg-dark text-white'>
        <div className='card-header'>
          <h3>{props.brand} - {props.name}</h3>
        </div>
        <div className='card-body'>
          <p><em>{props.type}</em></p>
          <p>Price: ${props.price}</p>
          <p>ABV: {props.alcoholContent}</p>
        </div>
      </div>
    </div>
  );
}

Beer.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  type: PropTypes.string,
  price: PropTypes.number,
  alcoholContent: PropTypes.number,
  beerId: PropTypes.string.isRequired,
};

export default Beer;
