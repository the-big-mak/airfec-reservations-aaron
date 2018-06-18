import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DatePickerCalendarRow from './DatePickerCalendarRow';

const DatePickerCalendarMonth = ({ handleDateClick, monthWeekRows, monthYear }) => (
  <DivOuterContainer>
    <DivMonthHeaderContainer>
      <strong>{monthYear}</strong>
    </DivMonthHeaderContainer>
    <TableCalendarCells>
      <tbody>
        {monthWeekRows.map(wk =>
          (<DatePickerCalendarRow
            key={Math.random()}
            handleDateClick={handleDateClick}
            monthYear={monthYear}
            week={wk}
          />))
        }
      </tbody>
    </TableCalendarCells>
  </DivOuterContainer>
);

DatePickerCalendarMonth.propTypes = {
  handleDateClick: PropTypes.func.isRequired,
  monthWeekRows: PropTypes.arrayOf(PropTypes.array).isRequired,
  monthYear: PropTypes.string.isRequired,
};

const DivOuterContainer = styled.div`
  background: rgb(255, 255, 255);
  padding: 0px 13px;
  text-align: center;
  user-select: none;
  vertical-align: top;
`;

const DivMonthHeaderContainer = styled.div`
  caption-side: initial;
  color: rgb(72, 72, 72);
  font-size: 18px;
  padding-bottom: 37px;
  padding-top: 22px;
  text-align: center;
`;

const TableCalendarCells = styled.table`
  border-collapse: collapse;
  border-spacing: 0px;
  max-width: 100%;
`;

export default DatePickerCalendarMonth;
