import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from './DatePicker';
import GuestPicker from './GuestPicker';

const BookItFields = ({
  availNights, dateDropDownActive, handleDateDropDown,
  guestDropDownActive, handleGuestDropDown, maxGuests,
  minNightStay, handleOutsideDropDownClick,
}) => (
  <div>
    <DatePicker
      availNights={availNights}
      dateDropDownActive={dateDropDownActive}
      handleDateDropDown={handleDateDropDown}
      minNightStay={minNightStay}
      handleOutsideDropDownClick={handleOutsideDropDownClick}
    />
    <GuestPicker
      guestDropDownActive={guestDropDownActive}
      handleGuestDropDown={handleGuestDropDown}
      maxGuests={maxGuests}
      handleOutsideDropDownClick={handleOutsideDropDownClick}
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
};

export default BookItFields;
