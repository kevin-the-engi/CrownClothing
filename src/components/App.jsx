import React from 'react';
import './App.scss';

import Homepage from './Homepage/Homepage.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Homepage />
      </div>
    )
  }
}

export default App;