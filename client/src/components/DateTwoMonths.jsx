import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styled from 'styled-components';
import momentHlpr from './momentJShelpers';

export default class DateTwoMonths extends Component {
  constructor(props) {
    super(props);
    this.dropDownRef = React.createRef();
    this.state = {
      fourMonths: { prev: [], cur: [], next: [], future: [] },
    };
  }
  getFourMonths() {
    const fourMonths = [
      ['prev', this.props.prevDateContext],
      ['cur', this.props.curDateContext],
      ['next', this.props.nextDateContext],
      ['future', this.props.futureDateContext],
    ].reduce((acc, month) => {
      const monthWksArr = momentHlpr.getArrayOfRowWeeksArrays(month[1], this.props.availNights);
      const monthAndYear = momentHlpr.monthAndYear(month[1]);
      acc[month[0]] = [monthAndYear, monthWksArr];
      return acc;
    }, {});
    this.setState({ fourMonths });
  }
  handleChangePrevMonth() {
    ['prevDateContext', 'curDateContext', 'nextDateContext', 'futureDateContext']
      .forEach(el => this.props.changeMonth(el, 'subtract'));
  }
  handleChangeNextMonth() {
    ['prevDateContext', 'curDateContext', 'nextDateContext', 'futureDateContext']
      .forEach(el => this.props.changeMonth(el, 'add'));
  }
  // handleDateClick(e, day, monthYear) {
  //   e.preventDefault();
  //   const momentDate = momentHlpr.getMomentDateFromDayAndMonthYear(day.day, monthYear);
  //   const checkInOut = this.props.dateDropDownActive.checkIn ? 'checkIn' : 'checkOut';
  //   if (checkInOut === 'checkOut') {
  //     this.handleChangeCheckOut(momentDate);
  //   } else if (checkInOut === 'checkIn') {
  //     this.props.handleChangeCheckInOut(momentDate, '');
  //   }
  // }
  render() {
    return (
      <DivOuterContainer>
        Hello World.
      </DivOuterContainer>
    );
  }
}

DateTwoMonths.propTypes = {
  availNights: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeMonth: PropTypes.func.isRequired,
  prevDateContext: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  curDateContext: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  nextDateContext: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  futureDateContext: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
};

const DivOuterContainer = styled.div`

`;