import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DatePickerCalendarHeaderDayOfWkItem from './DatePickerCalendarHeaderDayOfWkItem';
import DatePickerCalendarBackForwardButton from './DatePickerCalendarBackForwardButton';
import DatePickerCalendarBody from './DatePickerCalendarBody';

const DatePickerCalendarContainer = ({
  handleChangePrevMonth, handleChangeNextMonth, handleDateClick, threeMonths,
}) => (
  <DivOuterContainer>
    <DivInnerContainerHeader>
      <DivInnerContainerHeaderInner>
        <ListCalendarDayOfWeekRow>
          {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
            .map(el => <DatePickerCalendarHeaderDayOfWkItem day={el} key={el} />)}
        </ListCalendarDayOfWeekRow>
      </DivInnerContainerHeaderInner>
    </DivInnerContainerHeader>
    <DivInnerContainerBody>
      <DivButtonsContainer>
        <DatePickerCalendarBackForwardButton
          handleChangeMonth={handleChangePrevMonth}
          position="left"
        />
        <DatePickerCalendarBackForwardButton
          handleChangeMonth={handleChangeNextMonth}
          position="right"
        />
      </DivButtonsContainer>
      <DivCalendarBodyContainer>
        <DatePickerCalendarBody
          handleDateClick={handleDateClick}
          threeMonths={threeMonths}
        />
      </DivCalendarBodyContainer>
    </DivInnerContainerBody>
  </DivOuterContainer>
);

DatePickerCalendarContainer.propTypes = {
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
  width: 318px;
`;

const DivInnerContainerHeader = styled.div`
  margin-left: 9px;
  position: relative;
`;

const DivInnerContainerHeaderInner = styled.div`
  color: rgb(117, 117, 117);
  left: 0px;
  padding: 0px 13px;
  position: absolute;
  top: 62px;
  text-align: left;
  z-index: 2;
`;

const ListCalendarDayOfWeekRow = styled.ul`
  font-size: 14px;
  margin: 1px 0px;
  padding-left: 0px;
  padding-right: 0px;
  list-style: none;
`;

const DivInnerContainerBody = styled.div`
  outline: none;
  transform 200ms ease-in-out 0s;
`;

const DivButtonsContainer = styled.div`
  position: relative;
  z-index: 2;
`;

const DivCalendarBodyContainer = styled.div`
  border-radius: 3px;
  height: 298px;
  position: relative;
  overflow: hidden;
  width: 318px;
`;

export default DatePickerCalendarContainer;
