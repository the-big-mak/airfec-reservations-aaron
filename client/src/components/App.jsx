import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
  updateDBData, changeMonth, changeCheckInOut, changeGuests, updateDateDropDownActive,
  toggleGuestDropDown, handleOutsideDropDownClick, setIsBookItFixed, handleShowBill,
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
          avgNightlyRate={this.props.avgNightlyRate}
          stars={this.props.stars}
          totRatings={this.props.totalRatings}
          availNights={this.props.availNights}
          maxGuests={this.props.maxGuests}
          minNightStay={this.props.minNightStay}
          cleaningFee={this.props.cleaningFee}
          serviceFee={this.props.serviceFee}
          addtlGuestFee={this.props.addtlGuestFee}
          dateDropDownActive={this.props.dateDropDownActive}
          handleDateDropDown={this.handleDateDropDown}
          guestDropDownActive={this.props.guestDropDownActive}
          handleGuestDropDown={this.handleGuestDropDown}
          handleOutsideDropDownClick={this.handleOutsideDropDownClickApp}
          postBooking={this.postBooking}
          isBookItFixed={this.props.isBookItFixed}
          views={this.props.views}
          checkIn={this.props.checkIn}
          checkOut={this.props.checkOut}
          guests={this.props.guests}
          handleChangeGuests={this.handleChangeGuests}
          handleChangeCheckInOut={this.handleChangeCheckInOut}
          isBillVisible={this.props.isBillVisible}
          billPricePerNight={this.props.billPricePerNight}
          nights={this.props.nights}
          prevDateContext={this.props.prevDateContext}
          curDateContext={this.props.curDateContext}
          nextDateContext={this.props.nextDateContext}
          changeMonth={this.changeMonth}
        />
        {/* <DateTwoMonths
          availNights={this.state.availNights}
          prevDateContext={this.state.prevDateContext}
          curDateContext={this.state.curDateContext}
          nextDateContext={this.state.nextDateContext}
          futureDateContext={this.state.futureDateContext}
          changeMonth={this.changeMonth}
        /> */}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    avgNightlyRate: reduxState.avgNightlyRate,
    stars: reduxState.stars,
    totalRatings: reduxState.totalRatings,
    availNights: reduxState.availNights,
    maxGuests: reduxState.maxGuests,
    minNightStay: reduxState.minNightStay,
    cleaningFee: reduxState.cleaningFee,
    serviceFee: reduxState.serviceFee,
    addtlGuestFee: reduxState.addtlGuestFee,
    guestDropDownActive: reduxState.guestDropDownActive,
    dateDropDownActive: reduxState.dateDropDownActive,
    roomId: reduxState.roomId,
    isBookItFixed: reduxState.isBookItFixed,
    views: reduxState.views,
    checkIn: reduxState.checkIn,
    checkOut: reduxState.checkOut,
    guests: reduxState.guests,
    isBillVisible: reduxState.isBillVisible,
    billPricePerNight: reduxState.billPricePerNight,
    nights: reduxState.nights,
    prevDateContext: reduxState.prevDateContext,
    curDateContext: reduxState.curDateContext,
    nextDateContext: reduxState.nextDateContext,
    futureDateContext: reduxState.futureDateContext,
  };
}

App.propTypes = {
  avgNightlyRate: PropTypes.number.isRequired,
  stars: PropTypes.number.isRequired,
  totalRatings: PropTypes.number.isRequired,
  availNights: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  maxGuests: PropTypes.number.isRequired,
  minNightStay: PropTypes.number.isRequired,
  cleaningFee: PropTypes.number.isRequired,
  serviceFee: PropTypes.number.isRequired,
  addtlGuestFee: PropTypes.number.isRequired,
  dateDropDownActive: PropTypes.shape({
    checkIn: PropTypes.bool,
    checkOut: PropTypes.bool,
  }).isRequired,
  guestDropDownActive: PropTypes.bool.isRequired,
  isBookItFixed: PropTypes.bool.isRequired,
  views: PropTypes.number.isRequired,
  checkIn: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  checkOut: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  guests: PropTypes.number.isRequired,
  isBillVisible: PropTypes.bool.isRequired,
  billPricePerNight: PropTypes.number.isRequired,
  nights: PropTypes.number.isRequired,
  prevDateContext: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  curDateContext: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  nextDateContext: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  roomId: PropTypes.string.isRequired,
  updateDBData: PropTypes.func.isRequired,
  changeMonth: PropTypes.func.isRequired,
  changeCheckInOut: PropTypes.func.isRequired,
  changeGuests: PropTypes.func.isRequired,
  updateDateDropDownActive: PropTypes.func.isRequired,
  toggleGuestDropDown: PropTypes.func.isRequired,
  handleOutsideDropDownClick: PropTypes.func.isRequired,
  setIsBookItFixed: PropTypes.func.isRequired,
  handleShowBill: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  updateDBData,
  changeMonth,
  changeCheckInOut,
  changeGuests,
  updateDateDropDownActive,
  toggleGuestDropDown,
  handleOutsideDropDownClick,
  setIsBookItFixed,
  handleShowBill,
})(App);
