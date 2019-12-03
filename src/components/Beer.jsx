import React from 'react';
import PropTypes from 'prop-types';

function Beer(props){
  return (
    <div className="color-toggle">
      <style global jsx>{`
          div .color-toggle{
            background-color: bisque;
          }
          .color-toggle:hover{
            background: lightblue;
          }
        `}</style>
        <h3>{props.brand} - {props.name}</h3>
        <p><em>{props.type}</em></p>
        <p>Price: ${props.price}</p>
        <p>ABV: {props.alcoholContent}</p>
        <hr/>
      </div>
  );
}

Beer.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string,
  type: PropTypes.string,
  price: PropTypes.number,
  alcoholContent: PropTypes.number
};

export default Beer;
