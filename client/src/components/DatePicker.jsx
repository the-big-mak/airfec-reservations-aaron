import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styled from 'styled-components';
import momentHlpr from './momentJShelpers';
import DatePickerInputBottomCarot from './DatePickerInputBottomCarot';
import DatePickerInputArrowRight from './DatePickerInputArrowRight';
import DatePickerDropDown from './DatePickerDropDown';

export default class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.dropDownRef = React.createRef();
    this.state = {
      prevDateContext: moment().subtract(1, 'month'),
      curDateContext: moment(),
      nextDateContext: moment().add(1, 'month'),
      threeMonths: { prev: [], cur: [], next: [] },
    };
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.prevMonth = this.prevMonth.bind(this);
    this.nextMonth = this.nextMonth.bind(this);
  }
  componentDidMount() {
    document.addEventListener('click', this.handleOutsideClick);
    this.getThreeMonths();
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick);
  }
  getThreeMonths() {
    const threeMonths = [
      ['prev', this.state.prevDateContext],
      ['cur', this.state.curDateContext],
      ['next', this.state.nextDateContext],
    ].reduce((acc, month) => {
      const monthWksArr = momentHlpr.getArrayOfRowWeeksArrays(month[1]);
      const monthAndYear = momentHlpr.monthAndYear(month[1]);
      acc[month[0]] = [monthAndYear, monthWksArr];
      return acc;
    }, {});
    this.setState({ threeMonths });
  }
  prevMonth() {
    ['prevDateContext', 'curDateContext', 'nextDateContext'].forEach(el => this.changeMonth(el, 'subtract'));
  }
  nextMonth() {
    ['prevDateContext', 'curDateContext', 'nextDateContext'].forEach(el => this.changeMonth(el, 'add'));
  }
  changeMonth(dc, type) {
    let dateContext = { ...this.state[dc] };
    dateContext = moment(dateContext)[type](1, 'month');
    this.setState({ [dc]: dateContext }, () => this.getThreeMonths());
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
      availNights, dateDropDownActive, handleDateDropDown, minNightStay,
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
                type="text"
                placeholder="Check In"
              />
              {dateDropDownActive.checkIn && <DatePickerInputBottomCarot />}
              <DivCheckInText
                dateDropDownActive={dateDropDownActive.checkIn}
              >
                {moment().add(6, 'days').add(3, 'months').format('MM/DD/YYYY')}
              </DivCheckInText>
            </DivCheckInOutContainer>
            <DatePickerInputArrowRight />
            <DivCheckInOutContainer onClick={e => handleDateDropDown(e, 'checkOut')} >
              <InputCheckInOut
                name="checkOut"
                type="text"
                placeholder="Check Out"
              />
              {dateDropDownActive.checkOut && <DatePickerInputBottomCarot />}
              <DivCheckOutText
                dateDropDownActive={dateDropDownActive.checkOut}
              >
                Check Out
              </DivCheckOutText>
            </DivCheckInOutContainer>
          </DivPickerInnerContainer>
          {(dateDropDownActive.checkIn || dateDropDownActive.checkOut) &&
            <DatePickerDropDown
              availNights={availNights}
              minNightStay={minNightStay}
              prevMonth={this.prevMonth}
              nextMonth={this.nextMonth}
              threeMonths={this.state.threeMonths}
            />
          }
        </DivPickerOuterContainer>
      </DivContainer>
    );
  }
}

DatePicker.propTypes = {
  availNights: PropTypes.arrayOf(PropTypes.object).isRequired,
  dateDropDownActive: PropTypes.shape({
    checkIn: PropTypes.bool,
    checkOut: PropTypes.bool,
  }).isRequired,
  handleDateDropDown: PropTypes.func.isRequired,
  minNightStay: PropTypes.number.isRequired,
  handleOutsideDropDownClick: PropTypes.func.isRequired,
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
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
  font-size: 12px;
  font-weight: 600;
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
  width: -webkit-calc(50% - 12px);
  width: -moz-calc(50% - 12px);
  width: calc(50% - 12px);
  vertical-align: middle;
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
  color: ${props => (props.dateDropDownActive ? 'rgb(0, 122, 135);' : '#757575;')}
`;
