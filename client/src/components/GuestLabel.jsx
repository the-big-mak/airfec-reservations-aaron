import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

const GuestLabel = ({ guestDropDownActive, guestValue, infantsValue }) => (
  <DivGuestLabelContainer>
    <DivGuestLabelInnerContainer>
      <SpanGuestLabel guestDropDownActive={guestDropDownActive}>
        {guestValue} {guestValue === 1 ? 'guest' : 'guests'}
      </SpanGuestLabel>
      { infantsValue > 0 &&
      <span>
        <span>, </span>
        <SpanGuestLabel guestDropDownActive={false} >
          {infantsValue} {infantsValue === 1 ? 'infant' : 'infants'}
        </SpanGuestLabel>
      </span> }
    </DivGuestLabelInnerContainer>
  </DivGuestLabelContainer>
);

function mapStateToProps(reduxState) {
  return {
    guestDropDownActive: reduxState.guestDropDownActive,
  };
}

GuestLabel.propTypes = {
  guestDropDownActive: PropTypes.bool.isRequired,
  guestValue: PropTypes.number.isRequired,
  infantsValue: PropTypes.number.isRequired,
};

const DivGuestLabelContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
  width: 100%;
`;

const DivGuestLabelInnerContainer = styled.div`
  font-size: 17px;
  margin: 0;
  overflow: hidden;
  padding: 0;
  white-space: nowrap;
`;

const SpanGuestLabel = styled.span`
  display: inline-block;
  ${props => props.guestDropDownActive &&
  `background-color: #99ede6;
  border-color: #99ede6;
  border-radius: 3px;
  color: #007a87;
  cursor: pointer;
  padding: 0.25em 0.5em;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  `}
`;

export default connect(mapStateToProps)(GuestLabel);
