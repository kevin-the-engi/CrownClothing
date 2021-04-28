import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

import Homepage from './Homepage/Homepage.jsx';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <div>
        {/* <Switch> */}
        <Route path='/hats' component={HatsPage} />

          <Route path='/' component={Homepage} />
        {/* </Switch> */}
      </div>
    )
  }
}

export default App;