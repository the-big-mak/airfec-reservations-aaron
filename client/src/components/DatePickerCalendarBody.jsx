import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DatePickerCalendarMonth from './DatePickerCalendarMonth';

const DatePickerCalendarBody = ({ handleDateClick, threeMonths }) => (
  <DivOuterContainer>
    <DivPrevMonthContainer>
      <DatePickerCalendarMonth
        handleDateClick={handleDateClick}
        monthWeekRows={threeMonths.prev[1]}
        monthYear={threeMonths.prev[0]}
      />
    </DivPrevMonthContainer>
    <DivCurMonthContainer>
      <DatePickerCalendarMonth
        handleDateClick={handleDateClick}
        monthWeekRows={threeMonths.cur[1]}
        monthYear={threeMonths.cur[0]}
      />
    </DivCurMonthContainer>
    <DivNextMonthContainer>
      <DatePickerCalendarMonth
        handleDateClick={handleDateClick}
        monthWeekRows={threeMonths.next[1]}
        monthYear={threeMonths.next[0]}
      />
    </DivNextMonthContainer>
  </DivOuterContainer>
);

DatePickerCalendarBody.propTypes = {
  handleDateClick: PropTypes.func.isRequired,
  threeMonths: PropTypes.shape({
    prev: PropTypes.array,
    cur: PropTypes.array,
    next: PropTypes.array,
  }).isRequired,
};

const DivOuterContainer = styled.div`
  background: rgb(255, 255, 255);
  left: 9px;
  position: absolute;
  text-align: left;
  transform: translateX(0px);
  width: 900px;
  z-index: 0;
`;

const DivCurMonthContainer = styled.div`
  display: inline-block;
  min-height: 100%;
  vertical-align: top;
`;

const DivPrevMonthContainer = DivCurMonthContainer.extend`
  opacity: 0;
  pointer-events: none;
  position: absolute;
  visibility: hidden;
  z-index: -1;
`;

const DivNextMonthContainer = DivCurMonthContainer.extend`
  visibility: hidden;
`;

export default DatePickerCalendarBody;
