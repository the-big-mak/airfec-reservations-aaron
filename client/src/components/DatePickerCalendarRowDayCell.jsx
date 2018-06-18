import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DatePickerCalendarRowDayCell = ({ day, handleDateClick, monthYear }) => {
  if (!day.day) {
    return (<td />);
  }
  return (
    <TableDayCell
      active={day.active}
      onClick={e => (day.active ? handleDateClick(e, day, monthYear) : null)}
      role="button"
      tabindex="-1"
    >
      <Span active={day.active}>{day.day}</Span>
    </TableDayCell>
  );
};

DatePickerCalendarRowDayCell.propTypes = {
  day: PropTypes.shape({
    day: PropTypes.number,
    active: PropTypes.bool,
  }).isRequired,
  handleDateClick: PropTypes.func.isRequired,
  monthYear: PropTypes.string.isRequired,
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
  &:hover {
    ${props => props.active && 'background: rgb(228, 231, 231); color: inherit;'}
  }
`;

const Span = styled.span`
  ${props => !props.active && 'text-decoration: line-through;'}
`;

export default DatePickerCalendarRowDayCell;
