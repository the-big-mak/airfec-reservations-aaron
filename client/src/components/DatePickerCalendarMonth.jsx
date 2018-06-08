import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import DatePickerCalendarRow from './DatePickerCalendarRow';

export default class DatePickerCalendarMonth extends Component {
  constructor(props) {
    super(props);
    this.dateContext = moment();
    this.today = moment();
    this.monthsArr = moment.months();
  }
  getArrayOfRowWeeksArrays() {
    const blanks = [];
    for (let i = 0; i < this.firstDayOfMonth(); i += 1) {
      blanks.push({ day: null, active: null });
    }
    const daysInMonth = [];
    for (let d = 1; d <= this.daysInMonth(); d += 1) {
      daysInMonth.push({ day: d, active: true });
    }
    const totalSlots = [...blanks, ...daysInMonth];
    const rows = [];
    let cells = [];

    totalSlots.forEach((row, i) => {
      if (i % 7 !== 0) {
        cells.push(row);
      } else {
        const insertRow = cells.slice();
        rows.push(insertRow);
        cells = [];
        cells.push(row);
      }
      if (i === totalSlots.length - 1) {
        const lastRow = cells.slice();
        rows.push(lastRow);
      }
    });
    return rows;
  }
  year() {
    return this.dateContext.format('Y');
  }
  month() {
    return this.dateContext.format('MMMM');
  }
  daysInMonth() {
    return this.dateContext.daysInMonth();
  }
  currentDate() {
    return this.dateContext.get('date');
  }
  currentDay() {
    return this.dateContext.format('D');
  }
  firstDayOfMonth() {
    const { dateContext } = this;
    const firstDay = moment(dateContext).startOf('month').format('d');
    return firstDay;
  }
  render() {
    return (
      <DivOuterContainer>
        <DivMonthHeaderContainer>
          <strong>{moment(this.props.month).format('MMMM YYYY')}</strong>
        </DivMonthHeaderContainer>
        <TableCalendarCells>
          <tbody>
            {this.getArrayOfRowWeeksArrays().map(wk =>
              <DatePickerCalendarRow key={Math.random()} week={wk} />) }
          </tbody>
        </TableCalendarCells>
      </DivOuterContainer>
    );
  }
}

DatePickerCalendarMonth.propTypes = {
  month: PropTypes.string.isRequired,
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
