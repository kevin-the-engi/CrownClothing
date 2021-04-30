import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

import Homepage from './Homepage/Homepage.jsx';
import ShopPage from './ShopPage/ShopPage.jsx';
import Header from './Header/Header.jsx';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  )
}

export default App;