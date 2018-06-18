import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import GuestPickerCloseDropDown from './GuestPickerCloseDropDown';

const GuestPickerMaxDetails = ({ maxGuests }) => (
  <div>
    <DivTextContainer>
      <DivText><span>{maxGuests} {maxGuests === 1 ? 'guest' : 'guests'} maximum. Infants don&rsquo;t count toward the number of guests.</span></DivText>
    </DivTextContainer>
    <GuestPickerCloseDropDown />
  </div>
);

function mapStateToProps(reduxState) {
  return {
    maxGuests: reduxState.maxGuests,
  };
}

GuestPickerMaxDetails.propTypes = {
  maxGuests: PropTypes.number.isRequired,
};

const DivTextContainer = styled.div`
  margin-bottom: 16px;
`;

const DivText = styled.div`
  color: #484848;
  font: normal 14px Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  letter-spacing: normal;
  line-height: 18px;
  margin: 0px;
  padding-top: 0px;
  padding-bottom: 0px;
  word-wrap: break-word;
`;

export default connect(mapStateToProps)(GuestPickerMaxDetails);
