import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from './DatePicker';
import GuestPicker from './GuestPicker';

const BookItFields = ({
  availNights, dateDropDownActive, handleDateDropDown,
  guestDropDownActive, handleGuestDropDown, maxGuests,
  minNightStay, handleOutsideDropDownClick, checkIn,
  checkOut, guests, handleChangeGuests, handleChangeCheckInOut,
  prevDateContext, curDateContext, nextDateContext, changeMonth,
}) => (
  <div>
    <DatePicker
      availNights={availNights}
      dateDropDownActive={dateDropDownActive}
      handleDateDropDown={handleDateDropDown}
      minNightStay={minNightStay}
      handleOutsideDropDownClick={handleOutsideDropDownClick}
      checkIn={checkIn}
      checkOut={checkOut}
      handleChangeCheckInOut={handleChangeCheckInOut}
      prevDateContext={prevDateContext}
      curDateContext={curDateContext}
      nextDateContext={nextDateContext}
      changeMonth={changeMonth}
    />
    <GuestPicker
      guestDropDownActive={guestDropDownActive}
      handleGuestDropDown={handleGuestDropDown}
      maxGuests={maxGuests}
      handleOutsideDropDownClick={handleOutsideDropDownClick}
      guests={guests}
      handleChangeGuests={handleChangeGuests}
    />
  </div>
);

BookItFields.propTypes = {
  availNights: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  dateDropDownActive: PropTypes.shape({
    checkIn: PropTypes.bool,
    checkOut: PropTypes.bool,
  }).isRequired,
  handleDateDropDown: PropTypes.func.isRequired,
  guestDropDownActive: PropTypes.bool.isRequired,
  handleGuestDropDown: PropTypes.func.isRequired,
  maxGuests: PropTypes.number.isRequired,
  minNightStay: PropTypes.number.isRequired,
  handleOutsideDropDownClick: PropTypes.func.isRequired,
  checkIn: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  checkOut: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  guests: PropTypes.number.isRequired,
  handleChangeGuests: PropTypes.func.isRequired,
  handleChangeCheckInOut: PropTypes.func.isRequired,
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
  changeMonth: PropTypes.func.isRequired,
};

export default BookItFields;
