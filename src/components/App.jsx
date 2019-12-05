import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import TapList from './TapList';
import NewBeerControl from './NewBeerControl';
import Welcome from './Welcome';
/*eslint-disable*/
import Moment from 'moment';
import { v4 } from 'uuid';
/*eslint-enable*/
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterBeerList: {},
      selectedBeer: null
    };
    this.handleAddingNewBeerToList = this.handleAddingNewBeerToList.bind(this);
    this.handleChangingSelectedBeer = this.handleChangingSelectedBeer.bind(this);
  }

  handleChangingSelectedBeer(beerId){
    this.setState({selectedBeer: beerId});
  }

  handleAddingNewBeerToList(newBeer){
    var newBeerId = v4();
    var newMasterBeerList = Object.assign({}, this.state.masterBeerList, {
      [newBeerId]: newBeer
    });
    this.setState({masterBeerList: newMasterBeerList});
  }

  render(){
    return (
      <div>
        <div className='container'>
          <Header/>
          <Switch>
            <Route exact path='/' component={Welcome} />
            <Route path='/newbeer' render={()=><NewBeerControl onNewBeerCreation={this.handleAddingNewBeerToList} />} />
            <Route path='/taplist' render={()=><TapList tapList={this.state.masterBeerList} />} />
            <Route component={Error404} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
