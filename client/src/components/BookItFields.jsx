import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from './DatePicker';
import GuestPicker from './GuestPicker';

const BookItFields = ({
  changeMonth, handleChangeCheckInOut, handleChangeGuests, handleDateDropDown,
  handleGuestDropDown, handleOutsideDropDownClick,
}) => (
  <div>
    <DatePicker
      changeMonth={changeMonth}
      handleChangeCheckInOut={handleChangeCheckInOut}
      handleDateDropDown={handleDateDropDown}
      handleOutsideDropDownClick={handleOutsideDropDownClick}
    />
    <GuestPicker
      handleChangeGuests={handleChangeGuests}
      handleGuestDropDown={handleGuestDropDown}
      handleOutsideDropDownClick={handleOutsideDropDownClick}
    />
  </div>
);

BookItFields.propTypes = {
  handleDateDropDown: PropTypes.func.isRequired,
  handleGuestDropDown: PropTypes.func.isRequired,
  handleOutsideDropDownClick: PropTypes.func.isRequired,
  handleChangeGuests: PropTypes.func.isRequired,
  handleChangeCheckInOut: PropTypes.func.isRequired,
  changeMonth: PropTypes.func.isRequired,
};

export default BookItFields;
