import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BookItFields from './BookItFields';
import BookingButton from './BookingButton';

const BookItForm = ({ guestDropDownActive, handleGuestDropDown, maxGuests }) => (
  <FormContainer>
    <BookItFields
      guestDropDownActive={guestDropDownActive}
      handleGuestDropDown={handleGuestDropDown}
      maxGuests={maxGuests}
    />
    <BookingButton />
    <DivNotChargedYet>
      <SmallInnerNotChargedYet>You won’t be charged yet</SmallInnerNotChargedYet>
    </DivNotChargedYet>
  </FormContainer>
);

BookItForm.propTypes = {
  guestDropDownActive: PropTypes.bool.isRequired,
  handleGuestDropDown: PropTypes.func.isRequired,
  maxGuests: PropTypes.number.isRequired,
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
