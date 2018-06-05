import React from 'react';
import styled from 'styled-components';
import NightlyRateAndStars from './NightlyRateAndStars';
import BookItForm from './BookItForm';
import ReportListing from './ReportListing'

const Reservations = ({ avgNightlyRate, stars, totRatings, availNights, maxGuests, minNightStay, cleaningFee, addtlGuestFee, postBooking }) => (
  <DivOuterContainer>
    <DivInnerContainer>
      <DivInnerMostContainer>
        <NightlyRateAndStars 
          avgNightlyRate={avgNightlyRate}
          stars={stars} 
          totRatings={totRatings}
        />
        <BookItForm 
          availNights={availNights} 
          maxGuests={maxGuests} 
          minNightStay={minNightStay} 
          addtlGuestFee={addtlGuestFee}
          postBooking={postBooking}
        />
      </DivInnerMostContainer>
    </DivInnerContainer>
    <ReportListing />
  </DivOuterContainer>
);

const DivOuterContainer = styled.div`
  box-sizing: border-box;
  color: #484848;
  font-family: Circular, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 1.43;
  margin-left: 45px;
  position: absolute;
  top: 24px;
  width: 376px;
  -webkit-font-smoothing: antialiased;
`;
const DivInnerContainer = styled.div`
  border: 1px solid #e4e4e4;
  margin: 0;
  padding: 0 24px;
`;

const DivInnerMostContainer = styled.div`
  margin-top: 16px;
  margin-bottom: 24px;
`;

export default Reservations;
