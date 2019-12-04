import React from 'react';
import PropTypes from 'prop-types';

function NewBeerForm(props){
  let _name = null;
  let _brand = null;
  let _type = null;
  let _price = null;
  let _alcoholContent = null;

  function handleNewBeerFormSubmission(event) {
    event.preventDefault();
    props.onNewBeerCreation({names: _name.value, brand: _brand.value, type: _type.value, price: _price.value, alcoholContent: _alcoholContent.value });
    _name.value = '';
    _brand.value = '';
    _type.value = '';
    _price.value = '';
    _alcoholContent.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewBeerFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Beer Name'
          ref={(input) => {_name = input;}}/>
        <input
          type='text'
          id='brand'
          placeholder='Brewery'
          ref={(input) => {_brand = input;}}/>
        <input
          type='text'
          id='type'
          placeholder='Beer Type'
          ref={(input) => {_type = input;}}/>
        <input
          type='text'
          id='price'
          placeholder='Price'
          ref={(input) => {_price = input;}}/>
        <input
          type='text'
          id='alcoholContent'
          placeholder='ABV'
          ref={(input) => {_alcoholContent = input;}}/>
        <button className='btn btn-warning' type='submit'>Submit</button>
      </form>
    </div>
  );
}

NewBeerForm.propTypes = {
  onNewBeerCreation: PropTypes.func
};

export default NewBeerForm;
