import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

import Homepage from './Homepage/Homepage.jsx';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  )
}

export default App;