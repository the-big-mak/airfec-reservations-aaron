import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DatePickerCalendarRowDayCell from './DatePickerCalendarRowDayCell';

const DatePickerCalendarRow = ({ handleDateClick, monthYear, week }) => (
  <TableRow>
    {week.map(day => (
      <DatePickerCalendarRowDayCell
        day={day}
        handleDateClick={handleDateClick}
        key={Math.random()}
        monthYear={monthYear}
      />))
    }
  </TableRow>
);

DatePickerCalendarRow.propTypes = {
  handleDateClick: PropTypes.func.isRequired,
  monthYear: PropTypes.string.isRequired,
  week: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const TableRow = styled.tr`
  border-color: inherit;
  display: table-row;
  vertical-align: inherit;
`;

export default DatePickerCalendarRow;
