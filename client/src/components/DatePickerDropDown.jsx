import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DatePickerCalendarContainer from './DatePickerCalendarContainer';
import DatePickerMinStayDetails from './DatePickerMinStayDetails';

const DatePickerDropDown = ({
  handleChangeNextMonth, handleChangePrevMonth, handleDateClick, threeMonths,
}) => (
  <DivOuterContainer>
    <DivInnerContainer>
      <DatePickerCalendarContainer
        handleChangePrevMonth={handleChangePrevMonth}
        handleChangeNextMonth={handleChangeNextMonth}
        handleDateClick={handleDateClick}
        threeMonths={threeMonths}
      />
      <DatePickerMinStayDetails />
    </DivInnerContainer>
  </DivOuterContainer>
);

DatePickerDropDown.propTypes = {
  handleChangePrevMonth: PropTypes.func.isRequired,
  handleChangeNextMonth: PropTypes.func.isRequired,
  handleDateClick: PropTypes.func.isRequired,
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
