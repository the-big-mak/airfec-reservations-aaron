import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import BookItFields from './BookItFields';
import BillSummary from './BillSummary';
import BookingButton from './BookingButton';

const BookItForm = ({
  changeMonth, handleChangeCheckInOut, handleChangeGuests, handleDateDropDown,
  handleGuestDropDown, handleOutsideDropDownClick, isBillVisible,
}) => (
  <form>
    <BookItFields
      changeMonth={changeMonth}
      handleChangeCheckInOut={handleChangeCheckInOut}
      handleChangeGuests={handleChangeGuests}
      handleDateDropDown={handleDateDropDown}
      handleGuestDropDown={handleGuestDropDown}
      handleOutsideDropDownClick={handleOutsideDropDownClick}
    />
    {isBillVisible &&
    <BillSummary />
    }
    <BookingButton />
    <DivNotChargedYet>
      <SmallInnerNotChargedYet>You won’t be charged yet</SmallInnerNotChargedYet>
    </DivNotChargedYet>
  </form>
);

function mapStateToProps(reduxState) {
  return {
    isBillVisible: reduxState.isBillVisible,
  };
}

BookItForm.propTypes = {
  changeMonth: PropTypes.func.isRequired,
  handleChangeCheckInOut: PropTypes.func.isRequired,
  handleChangeGuests: PropTypes.func.isRequired,
  handleDateDropDown: PropTypes.func.isRequired,
  handleGuestDropDown: PropTypes.func.isRequired,
  handleOutsideDropDownClick: PropTypes.func.isRequired,
  isBillVisible: PropTypes.bool.isRequired,
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

export default connect(mapStateToProps)(BookItForm);
