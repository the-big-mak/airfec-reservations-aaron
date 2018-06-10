import React, { Component } from 'react';
import axios from 'axios';
import Reservations from './Reservations';

export default class App extends Component {
  constructor() {
    super();
    this.bookItRef = React.createRef();
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
      dateDropDownActive: {
        checkIn: false,
        checkOut: false,
      },
      roomId: window.location.pathname.split('/')[2],
      isBookItFixed: false,
      views: 367,
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.handleDateDropDown = this.handleDateDropDown.bind(this);
    this.handleGuestDropDown = this.handleGuestDropDown.bind(this);
    this.handleOutsideDropDownClick = this.handleOutsideDropDownClick.bind(this);
    this.postBooking = this.postBooking.bind(this);
  }
  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
    this.fetchDetailsAndAvailNights();
  }
  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }
  fetchDetailsAndAvailNights() {
    axios.get(`/reservations/${this.state.roomId}`)
      .then(db => this.updateState(db.data))
      .catch(err => err);
  }
  handleDateDropDown(e, checkInOut) {
    e.preventDefault();
    const dateDropDownActive = { ...this.state.dateDropDownActive };
    const checkInOrOutPair = checkInOut === 'checkIn' ? 'checkOut' : 'checkIn';
    if (dateDropDownActive[checkInOrOutPair]) {
      dateDropDownActive[checkInOrOutPair] = false;
    }
    dateDropDownActive[checkInOut] = true;
    this.setState({ dateDropDownActive });
  }
  handleScroll() {
    if (window.scrollY > 40 && window.scrollY < 50) {
      this.setState({ isBookItFixed: true });
    } else if (window.scrollY > 30 && window.scrollY < 40) {
      this.setState({ isBookItFixed: false });
    }
  }
  handleOutsideDropDownClick() {
    const dateDropDownActive = { ...this.state.dateDropDownActive };
    dateDropDownActive.checkIn = false;
    dateDropDownActive.checkOut = false;
    this.setState({ dateDropDownActive, guestDropDownActive: false });
  }
  handleGuestDropDown(e) {
    e.preventDefault();
    this.setState(prevState => ({ guestDropDownActive: !prevState.guestDropDownActive }));
  }
  postBooking() {
    axios.post(`/reservations/${this.state.roomId}`)
      .then(db => this.updateState(db.data))
      .catch(err => err);
  }
  updateState(data) {
    const avgNightlyRate = data[1].reduce((acc, night) => {
      const accESLint = night.rate > acc ? night.rate : acc;
      return accESLint;
    }, 0) || 11500;
    this.setState({
      stars: data[0][0].avg_rating,
      totalRatings: data[0][0].total_ratings,
      avgNightlyRate,
      availNights: data[1],
      maxGuests: data[0][0].max_guests,
      minNightStay: data[0][0].min_night_stay,
      cleaningFee: data[0][0].cleaning_fee,
      addtlGuestFee: data[0][0].addtl_guest_fee,
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
          dateDropDownActive={this.state.dateDropDownActive}
          handleDateDropDown={this.handleDateDropDown}
          guestDropDownActive={this.state.guestDropDownActive}
          handleGuestDropDown={this.handleGuestDropDown}
          handleOutsideDropDownClick={this.handleOutsideDropDownClick}
          postBooking={this.postBooking}
          ref={this.bookItRef}
          isBookItFixed={this.state.isBookItFixed}
          views={this.state.views}
        />
      </div>
    );
  }
}
