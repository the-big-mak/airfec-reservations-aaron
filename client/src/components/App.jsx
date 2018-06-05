import React, { Component } from 'react';
import Reservation from './Reservations'

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Reservation />
      </div>
    );
  }
};

export default App;
