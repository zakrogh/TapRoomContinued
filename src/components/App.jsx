import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import TapList from './TapList';
import Welcome from './Welcome';

function App(){
  return (
    <div>
      <Header/>
      <div className='container'>
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route path='/taplist' component={TapList} />
          <Route component={Error404} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
