import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DatePickerCalendarRowDayCell from './DatePickerCalendarRowDayCell';

const DatePickerCalendarRow = ({ week }) => (
  <TableRow>
    {week.map(day => <DatePickerCalendarRowDayCell key={Math.random()} day={day} />)}
  </TableRow>
);

// DatePickerCalendarRow.propTypes = {
//   week: PropTypes.arrayOf(PropTypes.number).isRequired,
// };

const TableRow = styled.tr`
  border-color: inherit;
  display: table-row;
  vertical-align: inherit;
`;

export default DatePickerCalendarRow;
