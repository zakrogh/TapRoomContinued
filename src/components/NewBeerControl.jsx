import React from 'react';
import NewBeerForm from './NewBeerForm';
import PropTypes from 'prop-types';

class NewBeerControl extends React.Component {

  render(){
    return (
      <div>
        <NewBeerForm onNewBeerCreation={this.props.onNewBeerCreation}/>
      </div>
    );
  }
}
NewBeerControl.propTypes = {
  onNewBeerCreation: PropTypes.func
};

export default NewBeerControl;
