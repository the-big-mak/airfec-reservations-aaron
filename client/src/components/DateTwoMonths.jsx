import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import momentHlpr from './momentJShelpers';

// UNFINISHED TWO MONTH DATE CALENDAR MODULE

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
        <Section>
          <DivHeaderContainer>
            <Header>
              <DivInnerHeaderContainer>
                <span>Availability</span>
              </DivInnerHeaderContainer>
            </Header>
          </DivHeaderContainer>
          <div/>
          <DivBorderContainer>
            <DivBorder />
          </DivBorderContainer>
        </Section>
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
  margin-bottom: 0;
`;

const Section = styled.section`
  display: block;
`;

const DivHeaderContainer = styled.div`
  margin-bottom: 16px;
`;

const Header = styled.h2`
  color: inherit;
  display: inline;
  font-size: 1em;
  font-weight: inherit;
  line-height: inherit;
  margin: 0px;
  padding: 0px;
`;

const DivInnerHeaderContainer = styled.div`
  color: #484848;
  font: 800 14px Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  letter-spacing: normal;
  line-height: 22px;
  margin: 0px;
  word-wrap: break-word;
`;

const DivBorderContainer = styled.div`
  margin-bottom: 24px;
  margin-top: 24px;
`;

const DivBorder = styled.div`
  border-bottom: 1px solid #DBDBDB;
`;