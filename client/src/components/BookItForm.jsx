import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BookItFields from './BookItFields';
import BillSummary from './BillSummary';
import BookingButton from './BookingButton';

const BookItForm = ({
  availNights, dateDropDownActive, handleDateDropDown,
  guestDropDownActive, handleGuestDropDown, maxGuests,
  minNightStay, handleOutsideDropDownClick, checkIn, checkOut,
  guests, handleChangeGuests, handleChangeCheckInOut, isBillVisible,
  handleShowBill, billPricePerNight, serviceFee, nights, cleaningFee,
}) => (
  <form>
    <BookItFields
      availNights={availNights}
      dateDropDownActive={dateDropDownActive}
      handleDateDropDown={handleDateDropDown}
      guestDropDownActive={guestDropDownActive}
      handleGuestDropDown={handleGuestDropDown}
      handleOutsideDropDownClick={handleOutsideDropDownClick}
      maxGuests={maxGuests}
      minNightStay={minNightStay}
      checkIn={checkIn}
      checkOut={checkOut}
      guests={guests}
      handleChangeGuests={handleChangeGuests}
      handleChangeCheckInOut={handleChangeCheckInOut}
      handleShowBill={handleShowBill}
    />
    {isBillVisible &&
    <BillSummary
      nights={nights}
      guests={guests}
      billPricePerNight={billPricePerNight}
      cleaningFee={cleaningFee}
      serviceFee={serviceFee}
    />
    }
    <BookingButton isBillVisible={isBillVisible} />
    <DivNotChargedYet>
      <SmallInnerNotChargedYet>You won’t be charged yet</SmallInnerNotChargedYet>
    </DivNotChargedYet>
  </form>
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
  isBillVisible: PropTypes.bool.isRequired,
  handleShowBill: PropTypes.func.isRequired,
  billPricePerNight: PropTypes.number.isRequired,
  serviceFee: PropTypes.number.isRequired,
  nights: PropTypes.number.isRequired,
  cleaningFee: PropTypes.number.isRequired,
};

const DivNotChargedYet = styled.div`
  margin-top: 8px;
  text-align: center;
`;

const SmallInnerNotChargedYet = styled.small`
  color: #484848;
  font: 600 12px Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  letter-spacing: normal;
  line-height: 16px;
  margin: 0px;
  padding-top: 0px;
  padding-bottom: 0px;
  word-wrap: break-word;
`;
export default BookItForm;
