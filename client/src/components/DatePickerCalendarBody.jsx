import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DatePickerCalendarMonth from './DatePickerCalendarMonth';

const DatePickerCalendarBody = ({ availNights }) => {
  return (
    <DivOuterContainer>
      <DivPrevMonthContainer>
        <DatePickerCalendarMonth month="2018-05-01" />
      </DivPrevMonthContainer>
      <DivCurMonthContainer>
        <DatePickerCalendarMonth month="2018-06-01" />
      </DivCurMonthContainer>
      <DivNextMonthContainer>
        <DatePickerCalendarMonth month="2018-07-01" />
      </DivNextMonthContainer>
    </DivOuterContainer>
  );
}

DatePickerCalendarBody.propTypes = {
  availNights: PropTypes.arrayOf(PropTypes.object).isRequired,
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
