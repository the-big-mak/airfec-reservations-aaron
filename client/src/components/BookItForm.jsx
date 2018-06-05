import React from 'react';
import styled from 'styled-components';
import BookingButton from './BookingButton'

const BookItForm = ({ availNights, maxGuests, minNightStay, cleaningFee, addtlGuestFee, postBooking }) => (
  <FormContainer>
    <div>
      Calendar Will Go Here
    </div>
    <BookingButton />
    <DivNotChargedYet>
      <SmallInnerNotChargedYet>You won’t be charged yet</SmallInnerNotChargedYet>
    </DivNotChargedYet>
  </FormContainer>
);

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
