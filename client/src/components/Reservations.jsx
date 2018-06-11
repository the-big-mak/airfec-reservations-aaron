import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NightlyRateAndStars from './NightlyRateAndStars';
import BookItForm from './BookItForm';
import ReportListing from './ReportListing';
import ViewsCount from './ViewsCount';

const Reservations = ({
  avgNightlyRate, stars, totRatings, availNights, maxGuests,
  minNightStay, cleaningFee, addtlGuestFee, dateDropDownActive,
  handleDateDropDown, guestDropDownActive, handleGuestDropDown,
  handleOutsideDropDownClick, postBooking, isBookItFixed, views,
  checkIn, checkOut, guests, handleChangeGuests, handleChangeCheckInOut,
  isBillVisible, handleShowBill, billPricePerNight, serviceFee, nights,
}) => (
  <DivOuterContainer isBookItFixed={isBookItFixed}>
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
          dateDropDownActive={dateDropDownActive}
          handleDateDropDown={handleDateDropDown}
          guestDropDownActive={guestDropDownActive}
          handleGuestDropDown={handleGuestDropDown}
          handleOutsideDropDownClick={handleOutsideDropDownClick}
          postBooking={postBooking}
          checkIn={checkIn}
          checkOut={checkOut}
          guests={guests}
          handleChangeGuests={handleChangeGuests}
          handleChangeCheckInOut={handleChangeCheckInOut}
          isBillVisible={isBillVisible}
          handleShowBill={handleShowBill}
          billPricePerNight={billPricePerNight}
          serviceFee={serviceFee}
          nights={nights}
        />
        {isBookItFixed &&
        <ViewsCount isBookItFixed={isBookItFixed} views={views} />
        }
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
  serviceFee: PropTypes.number.isRequired,
  addtlGuestFee: PropTypes.number.isRequired,
  dateDropDownActive: PropTypes.shape({
    checkIn: PropTypes.bool,
    checkOut: PropTypes.bool,
  }).isRequired,
  handleDateDropDown: PropTypes.func.isRequired,
  guestDropDownActive: PropTypes.bool.isRequired,
  handleGuestDropDown: PropTypes.func.isRequired,
  handleOutsideDropDownClick: PropTypes.func.isRequired,
  postBooking: PropTypes.func.isRequired,
  isBookItFixed: PropTypes.bool.isRequired,
  views: PropTypes.number.isRequired,
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
  isBillVisible: PropTypes.bool.isRequired,
  billPricePerNight: PropTypes.number.isRequired,
  nights: PropTypes.number.isRequired,
};

const DivOuterContainer = styled.div`
  box-sizing: border-box;
  color: #484848;
  font: 14px Circular, "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: 1.43;
  margin-left: 45px;
  width: 376px;
  -webkit-font-smoothing: antialiased;
  ${props => (props.isBookItFixed ? 'position: fixed; top: 75px;' : 'position: absolute; top: 24px;')}
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
