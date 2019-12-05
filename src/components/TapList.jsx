import React from 'react';
import Beer from './Beer';
import PropTypes from 'prop-types';

function TapList(props){
  return (
    <div>
      <hr/>
      {Object.keys(props.tapList).map(function(beerId) {
        var beer = props.tapList[beerId];
        return <Beer name={beer.name}
          brand={beer.brand}
          type={beer.type}
          price={beer.price}
          alcoholContent={beer.alcoholContent}
          currentRouterPath={props.currentRouterPath}
          key={beerId}
          beerId={beerId}/>;
      })}
    </div>
  );
}

TapList.propTypes = {
  tapList: PropTypes.object,
  currentRouterPath: PropTypes.string
};


export default TapList;
