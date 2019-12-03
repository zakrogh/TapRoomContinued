import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import TapList from './TapList';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={todo:HOMEPAGE} />
        <Route path='/taplist' component={TapList} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
