import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GuestLabel from './GuestLabel';
import GuestArrowDropDownAndUp from './GuestArrowDropDownAndUp';
import GuestPickerDropDown from './GuestPickerDropDown';

class GuestPicker extends Component {
  constructor(props) {
    super(props);
    this.dropDownRef = React.createRef();
    this.state = {
      guests: 1,
      adultsNum: 1,
      childrenNum: 0,
      infantsNum: 0,
    };
    this.handleAddGuests = this.handleAddGuests.bind(this);
    this.handleMinusGuests = this.handleMinusGuests.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }
  componentDidMount() {
    document.addEventListener('click', this.handleOutsideClick);
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick);
  }
  handleAddGuests(e, label) {
    e.preventDefault();
    const stateLabel = `${label.toLowerCase()}Num`;
    const otherLabel = stateLabel === 'adultsNum' ? 'childrenNum' : 'adultsNum';
    let labelNum = this.state[stateLabel];
    let { guests } = this.state;
    if (stateLabel === 'infantsNum') {
      if (this.state.infantsNum < 5) {
        labelNum += 1;
      }
    } else {
      if (labelNum < (this.props.maxGuests - this.state[otherLabel])) {
        labelNum += 1;
      }
      if (guests < this.props.maxGuests) {
        guests += 1;
      }
    }
    this.setState({ guests, [stateLabel]: labelNum });
  }
  handleMinusGuests(e, label) {
    e.preventDefault();
    const stateLabel = `${label.toLowerCase()}Num`;
    const otherLabel = stateLabel === 'adultsNum' ? 'childrenNum' : 'adultsNum';
    let labelNum = this.state[stateLabel];
    let { guests } = this.state;
    if (labelNum > 0) {
      labelNum -= 1;
    }
    if (label !== 'Infants' && (guests - this.state[otherLabel]) > 0) {
      guests -= 1;
    }
    this.setState({ guests, [stateLabel]: labelNum });
  }
  handleOutsideClick(e) {
    if (this.props.guestDropDownActive) {
      if (this.dropDownRef.current.contains(e.target)) {
        return;
      }
      this.props.handleOutsideDropDownClick();
    }
  }
  render() {
    const { guestDropDownActive, handleGuestDropDown } = this.props;
    return (
      <DivOuterContainer>
        <LabelOuterContainer>
          <SmallLabelInnerContainer>Guests</SmallLabelInnerContainer>
        </LabelOuterContainer>
        <DivPickerOuterContainer innerRef={this.dropDownRef}>
          <ButtonPicker
            onClick={handleGuestDropDown}
          >
            <DivCellOuterContainer>
              <DivCellInnerContainer>
                <DivTableContainer>
                  <GuestLabel
                    guestValue={this.state.guests}
                    infantsValue={this.state.infantsNum}
                  />
                  <GuestArrowDropDownAndUp />
                </DivTableContainer>
              </DivCellInnerContainer>
            </DivCellOuterContainer>
          </ButtonPicker>
          { guestDropDownActive &&
          <GuestPickerDropDown
            adultsNum={this.state.adultsNum}
            childrenNum={this.state.childrenNum}
            infantsNum={this.state.infantsNum}
            totalGuests={this.state.guests}
            handleAddGuests={this.handleAddGuests}
            handleMinusGuests={this.handleMinusGuests}
          /> }
        </DivPickerOuterContainer>
        <input type="hidden" name="number_of_guests" value={this.state.guests} />
        <input type="hidden" name="number_of_adults" value={this.state.adultsNum} />
        <input type="hidden" name="number_of_children" value={this.state.childrenNum} />
        <input type="hidden" name="number_of_infants" value={this.state.infantsNum} />
      </DivOuterContainer>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    guestDropDownActive: reduxState.guestDropDownActive,
    maxGuests: reduxState.maxGuests,
  };
}

GuestPicker.propTypes = {
  guestDropDownActive: PropTypes.bool.isRequired,
  handleGuestDropDown: PropTypes.func.isRequired,
  maxGuests: PropTypes.number.isRequired,
  handleOutsideDropDownClick: PropTypes.func.isRequired,
};

const DivOuterContainer = styled.div`
  margin-bottom: 16px;
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

const ButtonPicker = styled.button`
  background: #ffffff;
  ${props => (props.guestDropDownActive ? `
  border-bottom: 2px solid rgb(0, 132, 137);
  border-color: rgb(219, 219, 219) rgb(219, 219, 219) rgb(0, 132, 137);
  border-image: initial;
  border-style: solid;
  border-width: 1px 1px 2px;
  color: black;` : `
  border: 1px solid #DBDBDB;
  `)}
  border-radius: 2px;
  cursor: pointer;
  display: block;
  line-height: normal;
  padding: 8px;
  text-align: left;
  width: 100%;
`;

const DivCellOuterContainer = styled.div`
  margin-left: 8px;
  margin-right: 8px;
`;

const DivCellInnerContainer = styled.div`
  color: #484848;
  font: normal 16px Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
  letter-spacing: undefined;
  line-height: 22px;
  padding-bottom: 0px;
  padding-top: 0px;
  word-wrap: break-word;
`;

const DivTableContainer = styled.div`
  display: table;
  width: 100%;
`;

export default connect(mapStateToProps)(GuestPicker);
