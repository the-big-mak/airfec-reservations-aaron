import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DatePickerCalendarRowDayCell from './DatePickerCalendarRowDayCell';

const DatePickerCalendarRow = ({ week, monthYear, handleDateClick }) => (
  <TableRow>
    {week.map(day => (
      <DatePickerCalendarRowDayCell
        key={Math.random()}
        day={day}
        monthYear={monthYear}
        handleDateClick={handleDateClick}
      />))
    }
  </TableRow>
);

DatePickerCalendarRow.propTypes = {
  week: PropTypes.arrayOf(PropTypes.object).isRequired,
  monthYear: PropTypes.string.isRequired,
  handleDateClick: PropTypes.func.isRequired,
};

const TableRow = styled.tr`
  border-color: inherit;
  display: table-row;
  vertical-align: inherit;
`;

export default DatePickerCalendarRow;
