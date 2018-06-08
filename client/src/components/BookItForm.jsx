import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BookItFields from './BookItFields';
import BookingButton from './BookingButton';

const BookItForm = ({
  availNights, dateDropDownActive, handleDateDropDown,
  guestDropDownActive, handleGuestDropDown, maxGuests,
  minNightStay, handleOutsideDropDownClick,
}) => (
  <FormContainer>
    <BookItFields
      availNights={availNights}
      dateDropDownActive={dateDropDownActive}
      handleDateDropDown={handleDateDropDown}
      guestDropDownActive={guestDropDownActive}
      handleGuestDropDown={handleGuestDropDown}
      handleOutsideDropDownClick={handleOutsideDropDownClick}
      maxGuests={maxGuests}
      minNightStay={minNightStay}
    />
    <BookingButton />
    <DivNotChargedYet>
      <SmallInnerNotChargedYet>You won’t be charged yet</SmallInnerNotChargedYet>
    </DivNotChargedYet>
  </FormContainer>
);

BookItForm.propTypes = {
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

const FormContainer = styled.form`

`;

const DivNotChargedYet = styled.div`
  margin-top: 8px;
  text-align: center;
`;

const SmallInnerNotChargedYet = styled.small`
  color: #484848;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: normal;
  line-height: 16px;
  margin: 0px;
  padding-top: 0px;
  padding-bottom: 0px;
  word-wrap: break-word;
`;
export default BookItForm;
