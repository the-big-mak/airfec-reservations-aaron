import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DatePickerCalendarMonth from './DatePickerCalendarMonth';

const DatePickerCalendarBody = ({ threeMonths }) => (
  <DivOuterContainer>
    <DivPrevMonthContainer>
      <DatePickerCalendarMonth
        monthYear={threeMonths.prev[0]}
        monthWeekRows={threeMonths.prev[1]}
      />
    </DivPrevMonthContainer>
    <DivCurMonthContainer>
      <DatePickerCalendarMonth
        monthYear={threeMonths.cur[0]}
        monthWeekRows={threeMonths.cur[1]}
      />
    </DivCurMonthContainer>
    <DivNextMonthContainer>
      <DatePickerCalendarMonth
        monthYear={threeMonths.next[0]}
        monthWeekRows={threeMonths.next[1]}
      />
    </DivNextMonthContainer>
  </DivOuterContainer>
);

DatePickerCalendarBody.propTypes = {
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
