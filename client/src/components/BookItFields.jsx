import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DatePicker from './DatePicker';
import GuestPicker from './GuestPicker';

const BookItFields = ({ guestDropDownActive, handleGuestDropDown, maxGuests }) => (
  <DivContainer>
    <DatePicker />
    <GuestPicker
      guestDropDownActive={guestDropDownActive}
      handleGuestDropDown={handleGuestDropDown}
      maxGuests={maxGuests}
    />
  </DivContainer>
);

BookItFields.propTypes = {
  guestDropDownActive: PropTypes.bool.isRequired,
  handleGuestDropDown: PropTypes.func.isRequired,
  maxGuests: PropTypes.number.isRequired,
};

const DivContainer = styled.div`

`;

export default BookItFields;
