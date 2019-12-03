import React from 'react';
import PropTypes from 'prop-types';

function Beer(props){
  return (
    <div className="color-toggle">
      <style global jsx>{`
          div .color-toggle{
            background-color: red;
          }
          .color-toggle:hover{
            background: green;
          }
        `}</style>
        <h3>{props.location} - {props.names}</h3>
        <p><em>{props.issue}</em></p>
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
