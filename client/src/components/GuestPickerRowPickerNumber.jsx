import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const GuestPickerRowPickerNumber = ({ value }) => (
  <DivOuterContainer>
    <DivInnerContainer>{value}</DivInnerContainer>
  </DivOuterContainer>
);

GuestPickerRowPickerNumber.propTypes = {
  value: PropTypes.number.isRequired,
};

const DivOuterContainer = styled.div`
  display: table-cell;
  text-align: center;
  vertical-align: middle;
`;

const DivInnerContainer = styled.div`
  color: rgb(72, 72, 72);
  font: 600 16px Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  line-height: 22px;
  margin: 0px;
  padding-bottom: 0px;
  padding-top: 0px;
  word-wrap: break-word;
`;

export default GuestPickerRowPickerNumber;
