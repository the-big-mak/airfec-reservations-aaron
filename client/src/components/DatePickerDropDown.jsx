import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DatePickerCalendarContainer from './DatePickerCalendarContainer';
import DatePickerMinStayDetails from './DatePickerMinStayDetails';

const DatePickerDropDown = ({
  availNights, minNightStay, prevMonth, nextMonth, threeMonths,
}) => (
  <DivOuterContainer>
    <DivInnerContainer>
      <DatePickerCalendarContainer
        availNights={availNights}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
        threeMonths={threeMonths}
      />
      <DatePickerMinStayDetails minNightStay={minNightStay} />
    </DivInnerContainer>
  </DivOuterContainer>
);

DatePickerDropDown.propTypes = {
  availNights: PropTypes.arrayOf(PropTypes.object).isRequired,
  minNightStay: PropTypes.number.isRequired,
  prevMonth: PropTypes.func.isRequired,
  nextMonth: PropTypes.func.isRequired,
  threeMonths: PropTypes.shape({
    prev: PropTypes.array,
    cur: PropTypes.array,
    next: PropTypes.array,
  }).isRequired,
};

const DivOuterContainer = styled.div`
  background-color: rgb(255, 255, 255);
  left: 0px;
  position: absolute;
  top: 51px;
  z-index: 1;
`;

const DivInnerContainer = styled.div`
  background: rgb(255, 255, 255);
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 6px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px;
  position: relative;
  text-align: left;
  width: 319px;
`;

export default DatePickerDropDown;
