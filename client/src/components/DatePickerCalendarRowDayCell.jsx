import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DatePickerCalendarRowDayCell = ({ day }) => {
  if (!day.day) {
    return (<td />);
  }
  return (
    <TableDayCell role="button" tabindex="-1" active={day.active}>
      <Span>{day.day}</Span>
    </TableDayCell>
  );
};
DatePickerCalendarRowDayCell.propTypes = {
  day: PropTypes.shape({
    day: PropTypes.number,
    active: PropTypes.bool,
  }).isRequired,
};

const TableDayCell = styled.td`
  background: rgb(255, 255, 255);
  border: 1px double rgb(228, 231, 231);
  box-sizing: border-box;
  color: rgb(220, 224, 224);
  cursor: default;
  font-size: 14px;
  height: 38px;
  text-align: center;
  width: 39px;
  ${props => props.active && 'color: rgb(72, 72, 72); cursor: pointer;'}
`;

const Span = styled.span`
  ${props => props.active && 'text-decoration: line-through;'}
`;

export default DatePickerCalendarRowDayCell;

// {day ? day : (<SpanInactive>day</SpanInactive>)}
