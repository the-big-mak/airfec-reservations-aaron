import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NightlyRateAndStars from './NightlyRateAndStars';
import BookItForm from './BookItForm';
import ReportListing from './ReportListing';

const Reservations = ({
  avgNightlyRate, stars, totRatings, availNights, maxGuests,
  minNightStay, cleaningFee, addtlGuestFee, guestDropDownActive,
  handleGuestDropDown, postBooking,
}) => (
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
          cleaningFee={cleaningFee}
          addtlGuestFee={addtlGuestFee}
          guestDropDownActive={guestDropDownActive}
          handleGuestDropDown={handleGuestDropDown}
          postBooking={postBooking}
        />
      </DivInnerMostContainer>
    </DivInnerContainer>
    <ReportListing />
  </DivOuterContainer>
);

Reservations.propTypes = {
  avgNightlyRate: PropTypes.number.isRequired,
  stars: PropTypes.number.isRequired,
  totRatings: PropTypes.number.isRequired,
  availNights: PropTypes.arrayOf(PropTypes.object).isRequired,
  maxGuests: PropTypes.number.isRequired,
  minNightStay: PropTypes.number.isRequired,
  cleaningFee: PropTypes.number.isRequired,
  addtlGuestFee: PropTypes.number.isRequired,
  guestDropDownActive: PropTypes.bool.isRequired,
  handleGuestDropDown: PropTypes.func.isRequired,
  postBooking: PropTypes.func.isRequired,
};

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
