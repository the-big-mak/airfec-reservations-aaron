import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';
import Reservations from './Reservations';
import DateTwoMonths from './DateTwoMonths';

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
      serviceFee: 2000,
      addtlGuestFee: 0,
      guestDropDownActive: false,
      dateDropDownActive: {
        checkIn: false,
        checkOut: false,
      },
      roomId: window.location.pathname.split('/')[2],
      isBookItFixed: false,
      views: 367,
      checkIn: moment().add(6, 'days').add(2, 'months'),
      checkOut: '',
      guests: 1,
      isBillVisible: false,
      billPricePerNight: 10000,
      nights: 0,
      prevDateContext: moment().add(1, 'months'),
      curDateContext: moment().add(2, 'months'),
      nextDateContext: moment().add(3, 'months'),
      futureDateContext: moment().add(4, 'months'),
    };
    this.changeMonth = this.changeMonth.bind(this);
    this.handleChangeCheckInOut = this.handleChangeCheckInOut.bind(this);
    this.handleChangeGuests = this.handleChangeGuests.bind(this);
    this.handleDateDropDown = this.handleDateDropDown.bind(this);
    this.handleGuestDropDown = this.handleGuestDropDown.bind(this);
    this.handleOutsideDropDownClick = this.handleOutsideDropDownClick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleShowBill = this.handleShowBill.bind(this);
    this.postBooking = this.postBooking.bind(this);
  }
  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
    this.fetchDetailsAndAvailNights();
  }
  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }
  changeMonth(dc, type) {
    let dateContext = { ...this.state[dc] };
    dateContext = moment(dateContext)[type](1, 'month');
    this.setState({ [dc]: dateContext });
  }
  fetchDetailsAndAvailNights() {
    axios.get(`/reservations/${this.state.roomId}`)
      .then(db => this.updateState(db.data))
      .catch(err => err);
  }
  handleChangeCheckInOut(checkInDate, checkOutDate) {
    let { checkIn, checkOut } = this.state;
    if (checkInDate !== undefined) {
      checkIn = checkInDate;
    }
    if (checkOutDate !== undefined) {
      checkOut = checkOutDate;
    }
    this.setState({ checkIn, checkOut }, this.handleShowBill);
  }
  handleChangeGuests(num) {
    let { guests } = this.state;
    guests += num;
    this.setState({ guests }, this.handleShowBill);
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
  handleGuestDropDown(e) {
    e.preventDefault();
    this.setState(prevState => ({ guestDropDownActive: !prevState.guestDropDownActive }));
  }
  handleOutsideDropDownClick() {
    const dateDropDownActive = { ...this.state.dateDropDownActive };
    dateDropDownActive.checkIn = false;
    dateDropDownActive.checkOut = false;
    this.setState({ dateDropDownActive, guestDropDownActive: false });
  }
  handleScroll() {
    if (window.scrollY > 40 && window.scrollY < 50) {
      this.setState({ isBookItFixed: true });
    } else if (window.scrollY > 30 && window.scrollY < 40) {
      this.setState({ isBookItFixed: false });
    }
  }
  handleShowBill() {
    if (this.state.checkIn && this.state.checkOut && this.state.guests) {
      let { checkIn, checkOut } = this.state;
      let nights = checkOut.diff(checkIn, 'days') + 1;
      this.setState({ nights, isBillVisible: true })
    } else {
      this.setState({ isBillVisible: false })
    }
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
      <div ref={this.bookItRef}>
        <Reservations
          avgNightlyRate={this.state.avgNightlyRate}
          stars={this.state.stars}
          totRatings={this.state.totalRatings}
          availNights={this.state.availNights}
          maxGuests={this.state.maxGuests}
          minNightStay={this.state.minNightStay}
          cleaningFee={this.state.cleaningFee}
          serviceFee={this.state.serviceFee}
          addtlGuestFee={this.state.addtlGuestFee}
          dateDropDownActive={this.state.dateDropDownActive}
          handleDateDropDown={this.handleDateDropDown}
          guestDropDownActive={this.state.guestDropDownActive}
          handleGuestDropDown={this.handleGuestDropDown}
          handleOutsideDropDownClick={this.handleOutsideDropDownClick}
          postBooking={this.postBooking}
          isBookItFixed={this.state.isBookItFixed}
          views={this.state.views}
          checkIn={this.state.checkIn}
          checkOut={this.state.checkOut}
          guests={this.state.guests}
          handleChangeGuests={this.handleChangeGuests}
          handleChangeCheckInOut={this.handleChangeCheckInOut}
          isBillVisible={this.state.isBillVisible}
          billPricePerNight={this.state.billPricePerNight}
          nights={this.state.nights}
          prevDateContext={this.state.prevDateContext}
          curDateContext={this.state.curDateContext}
          nextDateContext={this.state.nextDateContext}
          changeMonth={this.changeMonth}
        />
        <DateTwoMonths
          availNights={this.state.availNights}
          prevDateContext={this.state.prevDateContext}
          curDateContext={this.state.curDateContext}
          nextDateContext={this.state.nextDateContext}
          futureDateContext={this.state.futureDateContext}
          changeMonth={this.changeMonth}
        />
      </div>
    );
  }
}
