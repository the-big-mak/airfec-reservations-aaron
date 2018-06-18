import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import styled from 'styled-components';
import momentHlpr from './momentJShelpers';
import DatePickerInputBottomCarot from './DatePickerInputBottomCarot';
import DatePickerInputArrowRight from './DatePickerInputArrowRight';
import DatePickerDropDown from './DatePickerDropDown';

class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.dropDownRef = React.createRef();
    this.state = {
      threeMonths: { prev: [], cur: [], next: [] },
    };
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.handleChangePrevMonth = this.handleChangePrevMonth.bind(this);
    this.handleChangeNextMonth = this.handleChangeNextMonth.bind(this);
    this.handleDateClick = this.handleDateClick.bind(this);
  }
  componentDidMount() {
    document.addEventListener('click', this.handleOutsideClick);
    this.getThreeMonths();
  }
  componentDidUpdate(prevProps) {
    if (this.props.availNights !== prevProps.availNights) {
      this.getThreeMonths();
    }
    if (this.props.curDateContext !== prevProps.curDateContext) {
      this.getThreeMonths();
    }
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick);
  }
  getThreeMonths() {
    const threeMonths = [
      ['prev', this.props.prevDateContext],
      ['cur', this.props.curDateContext],
      ['next', this.props.nextDateContext],
    ].reduce((acc, month) => {
      const monthWksArr = momentHlpr.getArrayOfRowWeeksArrays(month[1], this.props.availNights);
      const monthAndYear = momentHlpr.monthAndYear(month[1]);
      acc[month[0]] = [monthAndYear, monthWksArr];
      return acc;
    }, {});
    this.setState({ threeMonths });
  }
  handleChangePrevMonth() {
    ['prevDateContext', 'curDateContext', 'nextDateContext', 'futureDateContext']
      .forEach(el => this.props.changeMonth(el, 'subtract'));
  }
  handleChangeNextMonth() {
    ['prevDateContext', 'curDateContext', 'nextDateContext', 'futureDateContext']
      .forEach(el => this.props.changeMonth(el, 'add'));
  }
  handleChangeCheckOut(momentCheckOut) {
    const momentCheckIn = { ...this.props.checkIn };
    const minFutureDate = moment(momentCheckIn).add(this.props.minNightStay - 1, 'days');
    if (momentCheckOut.isAfter(minFutureDate)) {
      if (momentHlpr.isAllDatesInBetweenAvail(
        moment(momentCheckIn),
        momentCheckOut, this.props.availNights,
      )) {
        this.props.handleChangeCheckInOut(undefined, momentCheckOut);
      }
    }
    // else {
    //   this.props.handleChangeCheckInOut(momentDate, '');
    // }
  }
  handleDateClick(e, day, monthYear) {
    e.preventDefault();
    const momentDate = momentHlpr.getMomentDateFromDayAndMonthYear(day.day, monthYear);
    const checkInOut = this.props.dateDropDownActive.checkIn ? 'checkIn' : 'checkOut';
    if (checkInOut === 'checkOut') {
      this.handleChangeCheckOut(momentDate);
    } else if (checkInOut === 'checkIn') {
      this.props.handleChangeCheckInOut(momentDate, '');
    }
  }
  handleOutsideClick(e) {
    if (this.props.dateDropDownActive.checkIn || this.props.dateDropDownActive.checkOut) {
      if (this.dropDownRef.current.contains(e.target)) {
        return;
      }
      this.props.handleOutsideDropDownClick();
    }
  }
  render() {
    const {
      checkIn, checkOut, dateDropDownActive, handleDateDropDown,
    } = this.props;
    return (
      <DivContainer>
        <LabelOuterContainer>
          <SmallLabelInnerContainer>Dates</SmallLabelInnerContainer>
        </LabelOuterContainer>
        <DivPickerOuterContainer innerRef={this.dropDownRef} >
          <DivPickerInnerContainer>
            <DivCheckInOutContainer onClick={e => handleDateDropDown(e, 'checkIn')}>
              <InputCheckInOut
                name="checkIn"
                placeholder="Check In"
                type="text"
              />
              {dateDropDownActive.checkIn && <DatePickerInputBottomCarot />}
              <DivCheckInText
                dateDropDownActive={dateDropDownActive.checkIn}
              >
                {checkIn.format('MM/DD/YYYY')}
              </DivCheckInText>
            </DivCheckInOutContainer>
            <DatePickerInputArrowRight />
            <DivCheckInOutContainer onClick={e => handleDateDropDown(e, 'checkOut')} >
              <InputCheckInOut
                name="checkOut"
                placeholder="Check Out"
                type="text"
              />
              { dateDropDownActive.checkOut &&
              <DatePickerInputBottomCarot /> }
              <DivCheckOutText
                dateDropDownActive={dateDropDownActive.checkOut}
                value={checkOut}
              >
                {checkOut ? checkOut.format('MM/DD/YYYY') : 'Check Out'}
              </DivCheckOutText>
            </DivCheckInOutContainer>
          </DivPickerInnerContainer>
          {(dateDropDownActive.checkIn || dateDropDownActive.checkOut) &&
            <DatePickerDropDown
              handleChangePrevMonth={this.handleChangePrevMonth}
              handleChangeNextMonth={this.handleChangeNextMonth}
              threeMonths={this.state.threeMonths}
              handleDateClick={this.handleDateClick}
            />
          }
        </DivPickerOuterContainer>
      </DivContainer>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    availNights: reduxState.availNights,
    checkIn: reduxState.checkIn,
    checkOut: reduxState.checkOut,
    curDateContext: reduxState.curDateContext,
    dateDropDownActive: reduxState.dateDropDownActive,
    futureDateContext: reduxState.futureDateContext,
    minNightStay: reduxState.minNightStay,
    nextDateContext: reduxState.nextDateContext,
    nights: reduxState.nights,
    prevDateContext: reduxState.prevDateContext,
  };
}

DatePicker.propTypes = {
  availNights: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  changeMonth: PropTypes.func.isRequired,
  checkIn: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  checkOut: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  curDateContext: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  dateDropDownActive: PropTypes.shape({
    checkIn: PropTypes.bool,
    checkOut: PropTypes.bool,
  }).isRequired,
  handleChangeCheckInOut: PropTypes.func.isRequired,
  handleDateDropDown: PropTypes.func.isRequired,
  handleOutsideDropDownClick: PropTypes.func.isRequired,
  minNightStay: PropTypes.number.isRequired,
  nextDateContext: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  prevDateContext: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
};

const DivContainer = styled.div`
  margin-top: 16px;
  margin-bottom: 8px;
`;

const LabelOuterContainer = styled.label`
  display: block;
  font-size: 17px;
  font-weight: 200;
  margin: 0px;
  padding: 0px;
  padding-bottom: 4px;
`;

const SmallLabelInnerContainer = styled.small`
  color: #484848;
  font: 600 12px Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
  letter-spacing: normal;
  line-height: 16px;
  margin: 0px;
  padding-top: 0px;
  padding-bottom: 0px;
  word-wrap: break-word;
`;

const DivPickerOuterContainer = styled.div`
  position: relative;
  width: 100%;
`;

const DivPickerInnerContainer = styled.div`
  background-color: #fff;
  border: 1px solid #DBDBDB;
  border-radius: 2px;
  display: block;
  width: 100%;
`;

const DivCheckInOutContainer = styled.div`
  color: #757575;
  display: inline-block;
  font-size: 17px;
  font-weight: normal;
  line-height: 24px;
  margin: 0px;
  padding: 8px;
  position: relative;
  vertical-align: middle;
  width: calc(50% - 12px);
  width: -webkit-calc(50% - 12px);
  width: -moz-calc(50% - 12px);
`;

const InputCheckInOut = styled.input`
  border: 0px;
  height: 100%;
  left: 0px;
  opacity: 0;
  position: absolute;
  top: 0px;
  width: 100%;
`;

const DivCheckInText = styled.div`
  color: rgb(72, 72, 72);
  padding: 0px 6px;
  overflow: hidden;
  white-space: nowrap;
  ${props => props.dateDropDownActive && `
  background: rgb(153, 237, 230);
  border-color: rgb(153, 237, 230);
  border-radius: 3px;
  color: rgb(0, 122, 135);
  `}
`;

const DivCheckOutText = DivCheckInText.extend`
  color: ${(props) => {
    if (props.dateDropDownActive) {
      return 'rgb(0, 122, 135);';
    }
    return props.value ? 'rgb(72, 72, 72);' : '#757575;';
  }}
`;

export default connect(mapStateToProps)(DatePicker);
