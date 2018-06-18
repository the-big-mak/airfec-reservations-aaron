import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
  changeCheckInOut, changeMonth, changeGuests, handleShowBill,
  handleOutsideDropDownClick, setIsBookItFixed, toggleGuestDropDown,
  updateDateDropDownActive, updateDBData,
} from '../actions/actions';
import Reservations from './Reservations';

class App extends Component {
  constructor(props) {
    super(props);
    this.bookItRef = React.createRef();
    this.changeMonth = this.changeMonth.bind(this);
    this.handleChangeCheckInOut = this.handleChangeCheckInOut.bind(this);
    this.handleChangeGuests = this.handleChangeGuests.bind(this);
    this.handleDateDropDown = this.handleDateDropDown.bind(this);
    this.handleGuestDropDown = this.handleGuestDropDown.bind(this);
    this.handleOutsideDropDownClickApp = this.handleOutsideDropDownClickApp.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleShowBillApp = this.handleShowBillApp.bind(this);
    this.postBooking = this.postBooking.bind(this);
  }
  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
    this.fetchDetailsAndAvailNights();
  }
  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }
  changeMonth(dc, typeOperator) {
    this.props.changeMonth(dc, typeOperator);
  }
  fetchDetailsAndAvailNights() {
    axios.get(`/reservations/${this.props.roomId}`)
      .then(db => this.updateState(db.data))
      .catch(err => err);
  }
  handleChangeCheckInOut(checkInDate, checkOutDate) {
    let { checkIn, checkOut } = this.props;
    if (checkInDate !== undefined) {
      checkIn = checkInDate;
    }
    if (checkOutDate !== undefined) {
      checkOut = checkOutDate;
    }
    this.props.changeCheckInOut(checkIn, checkOut);
    this.handleShowBillApp(checkIn, checkOut);
  }
  handleChangeGuests(num) {
    let { guests } = this.props;
    guests += num;
    this.props.changeGuests(guests);
  }
  handleDateDropDown(e, checkInOut) {
    e.preventDefault();
    const dateDropDownActive = { ...this.props.dateDropDownActive };
    const checkInOrOutPair = checkInOut === 'checkIn' ? 'checkOut' : 'checkIn';
    if (dateDropDownActive[checkInOrOutPair]) {
      dateDropDownActive[checkInOrOutPair] = false;
    }
    dateDropDownActive[checkInOut] = true;
    this.props.updateDateDropDownActive(dateDropDownActive);
  }
  handleGuestDropDown(e) {
    e.preventDefault();
    this.props.toggleGuestDropDown();
  }
  handleOutsideDropDownClickApp() {
    const dateDropDownActive = { ...this.props.dateDropDownActive };
    dateDropDownActive.checkIn = false;
    dateDropDownActive.checkOut = false;
    this.props.handleOutsideDropDownClick(dateDropDownActive);
  }
  handleScroll() {
    if (window.scrollY > 800) {
      if (!this.props.isBookItFixed) {
        this.props.setIsBookItFixed(true);
      }
      this.props.setIsBookItFixed(true);
    } else if (window.scrollY < 800) {
      if (this.props.isBookItFixed) {
        this.props.setIsBookItFixed(false);
      }
    }
  }
  handleShowBillApp(checkIn, checkOut) {
    if (checkIn && checkOut && this.props.guests) {
      const nights = checkOut.diff(checkIn, 'days');
      this.props.handleShowBill(nights, true);
    } else {
      this.props.handleShowBill(null, false);
    }
  }
  postBooking() {
    axios.post(`/reservations/${this.props.roomId}`)
      .then(db => this.updateState(db.data))
      .catch(err => err);
  }
  updateState(data) {
    const avgNightlyRate = Math.max(...Object.values(data[1])) || 11500;
    this.props.updateDBData(data, avgNightlyRate);
  }
  render() {
    return (
      <div ref={this.bookItRef}>
        <Reservations
          changeMonth={this.changeMonth}
          handleChangeCheckInOut={this.handleChangeCheckInOut}
          handleChangeGuests={this.handleChangeGuests}
          handleDateDropDown={this.handleDateDropDown}
          handleGuestDropDown={this.handleGuestDropDown}
          handleOutsideDropDownClick={this.handleOutsideDropDownClickApp}
        />
        {/* <DateTwoMonths
          availNights={this.state.availNights}
          changeMonth={this.changeMonth}
          curDateContext={this.state.curDateContext}
          futureDateContext={this.state.futureDateContext}
          nextDateContext={this.state.nextDateContext}
          prevDateContext={this.state.prevDateContext}
        /> */}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    addtlGuestFee: reduxState.addtlGuestFee,
    avgNightlyRate: reduxState.avgNightlyRate,
    availNights: reduxState.availNights,
    billPricePerNight: reduxState.billPricePerNight,
    checkIn: reduxState.checkIn,
    checkOut: reduxState.checkOut,
    cleaningFee: reduxState.cleaningFee,
    curDateContext: reduxState.curDateContext,
    dateDropDownActive: reduxState.dateDropDownActive,
    futureDateContext: reduxState.futureDateContext,
    guestDropDownActive: reduxState.guestDropDownActive,
    guests: reduxState.guests,
    isBillVisible: reduxState.isBillVisible,
    isBookItFixed: reduxState.isBookItFixed,
    maxGuests: reduxState.maxGuests,
    minNightStay: reduxState.minNightStay,
    nextDateContext: reduxState.nextDateContext,
    nights: reduxState.nights,
    prevDateContext: reduxState.prevDateContext,
    roomId: reduxState.roomId,
    serviceFee: reduxState.serviceFee,
    stars: reduxState.stars,
    totalRatings: reduxState.totalRatings,
    views: reduxState.views,
  };
}

App.propTypes = {
  changeCheckInOut: PropTypes.func.isRequired,
  changeGuests: PropTypes.func.isRequired,
  changeMonth: PropTypes.func.isRequired,
  checkIn: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  checkOut: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  dateDropDownActive: PropTypes.shape({
    checkIn: PropTypes.bool,
    checkOut: PropTypes.bool,
  }).isRequired,
  guests: PropTypes.number.isRequired,
  handleOutsideDropDownClick: PropTypes.func.isRequired,
  handleShowBill: PropTypes.func.isRequired,
  isBookItFixed: PropTypes.bool.isRequired,
  roomId: PropTypes.string.isRequired,
  setIsBookItFixed: PropTypes.func.isRequired,
  toggleGuestDropDown: PropTypes.func.isRequired,
  updateDateDropDownActive: PropTypes.func.isRequired,
  updateDBData: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  changeCheckInOut,
  changeMonth,
  changeGuests,
  handleOutsideDropDownClick,
  handleShowBill,
  setIsBookItFixed,
  toggleGuestDropDown,
  updateDateDropDownActive,
  updateDBData,
})(App);
