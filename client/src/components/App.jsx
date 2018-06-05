import React, { Component } from 'react';
import axios from 'axios';
import Reservation from './Reservations'
const ROOM = 42;

class App extends Component {
  constructor() {
    super();
    this.state = {
      availNights: []
    }
  }
  componentDidMount () {
    this.fetch(ROOM);
  }
  fetch (roomId) {
    axios.get(`/rooms/${roomId}`)
      .then(db => this.setState({availNights: db.data}))
      .catch(console.err);
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
