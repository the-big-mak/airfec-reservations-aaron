import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import BookItForm from './BookItForm';
import NightlyRateAndStars from './NightlyRateAndStars';
import ReportListing from './ReportListing';
import ViewsCount from './ViewsCount';

const Reservations = ({
  changeMonth, handleChangeCheckInOut, handleChangeGuests, handleDateDropDown,
  handleGuestDropDown, handleOutsideDropDownClick, isBookItFixed,
}) => (
  <DivOuterContainer isBookItFixed={isBookItFixed}>
    <DivInnerContainer>
      <DivInnerMostContainer>
        <NightlyRateAndStars />
        <BookItForm
          changeMonth={changeMonth}
          handleChangeCheckInOut={handleChangeCheckInOut}
          handleChangeGuests={handleChangeGuests}
          handleDateDropDown={handleDateDropDown}
          handleGuestDropDown={handleGuestDropDown}
          handleOutsideDropDownClick={handleOutsideDropDownClick}
        />
        { isBookItFixed &&
        <ViewsCount /> }
      </DivInnerMostContainer>
    </DivInnerContainer>
    <ReportListing />
  </DivOuterContainer>
);

function mapStateToProps(reduxState) {
  return {
    isBookItFixed: reduxState.isBookItFixed,
  };
}

Reservations.propTypes = {
  changeMonth: PropTypes.func.isRequired,
  handleChangeCheckInOut: PropTypes.func.isRequired,
  handleChangeGuests: PropTypes.func.isRequired,
  handleDateDropDown: PropTypes.func.isRequired,
  handleGuestDropDown: PropTypes.func.isRequired,
  handleOutsideDropDownClick: PropTypes.func.isRequired,
  isBookItFixed: PropTypes.bool.isRequired,
};

const DivOuterContainer = styled.div`
  box-sizing: border-box;
  color: #484848;
  font: 14px Circular, "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: 1.43;
  margin-left: 45px;
  right: 210px;
  width: 376px;
  -webkit-font-smoothing: antialiased;
  ${props => (props.isBookItFixed ? 'position: fixed; top: 75px;' : 'position: absolute; top: 730px;')}
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

export default connect(mapStateToProps)(Reservations);
