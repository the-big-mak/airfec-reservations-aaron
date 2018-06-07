import React, { Component } from 'react';
import axios from 'axios';
import Reservations from './Reservations';

class App extends Component {
  constructor() {
    super();
    this.state = {
      avgNightlyRate: 0,
      stars: 0,
      totalRatings: 0,
      availNights: [],
      maxGuests: 0,
      minNightStay: 0,
      cleaningFee: 0,
      addtlGuestFee: 0,
      guestDropDownActive: false,
    };
    this.handleGuestDropDown = this.handleGuestDropDown.bind(this);
    this.postBooking = this.postBooking.bind(this);
  }
  componentDidMount() {
    this.fetchDetailsAndAvailNights(window.location.pathname.split('/')[2]);
  }
  fetchDetailsAndAvailNights(roomId) {
    axios.get(`/reservations/${roomId}`)
      .then(db => this.updateState(db.data))
      .catch(err => err);
  }
  handleGuestDropDown(e) {
    e.preventDefault();
    this.setState(prevState => ({ guestDropDownActive: !prevState.guestDropDownActive }));
  }
  postBooking () {

  }
  updateState(data) {
    const { avg_rating, total_ratings, max_guests, min_night_stay, cleaning_fee, addtl_guest_fee } = data[0][0];
    const avgNightlyRate = data[1].reduce((acc, night) => {
      acc = night.rate > acc ? night.rate : acc;
      return acc;
    }, 0);
    this.setState({
      stars: avg_rating,
      totalRatings: total_ratings,
      avgNightlyRate,
      availNights: data[1],
      maxGuests: max_guests,
      minNightStay: min_night_stay,
      cleaningFee: cleaning_fee,
      addtlGuestFee: addtl_guest_fee,
    });
  }
  render() {
    return (
      <div>
        <Reservations
          avgNightlyRate={this.state.avgNightlyRate}
          stars={this.state.stars}
          totRatings={this.state.totalRatings}
          availNights={this.state.availNights}
          maxGuests={this.state.maxGuests}
          minNightStay={this.state.minNightStay}
          cleaningFee={this.state.cleaningFee}
          addtlGuestFee={this.state.addtlGuestFee}
          guestDropDownActive={this.state.guestDropDownActive}
          handleGuestDropDown={this.handleGuestDropDown}
          postBooking={this.postBooking}
        />
      </div>
    );
  }
}

export default App;
