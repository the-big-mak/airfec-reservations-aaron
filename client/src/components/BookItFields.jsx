import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from './DatePicker';
import GuestPicker from './GuestPicker';

const BookItFields = ({
  availNights, dateDropDownActive, handleDateDropDown,
  guestDropDownActive, handleGuestDropDown, maxGuests,
  minNightStay, handleOutsideDropDownClick, checkIn,
  checkOut, guests, handleChangeGuests, handleChangeCheckInOut,
  handleShowBill,
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
      handleShowBill={handleShowBill}
    />
    <GuestPicker
      guestDropDownActive={guestDropDownActive}
      handleGuestDropDown={handleGuestDropDown}
      maxGuests={maxGuests}
      handleOutsideDropDownClick={handleOutsideDropDownClick}
      guests={guests}
      handleChangeGuests={handleChangeGuests}
      handleShowBill={handleShowBill}
    />
  </div>
);

BookItFields.propTypes = {
  availNights: PropTypes.arrayOf(PropTypes.object).isRequired,
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
  handleShowBill: PropTypes.func.isRequired,
};

export default BookItFields;
