import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GuestPickerRowPickerMinus from './GuestPickerRowPickerMinus';
import GuestPickerRowPickerNumber from './GuestPickerRowPickerNumber';
import GuestPickerRowPickerPlus from './GuestPickerRowPickerPlus';

const GuestPickerRowPicker = ({ initialValue }) => (
  <DivOuterContainer>
    <DivInnerContainer>
      <GuestPickerRowPickerMinus />
      <GuestPickerRowPickerNumber initialValue={initialValue} />
      <GuestPickerRowPickerPlus />
    </DivInnerContainer>
  </DivOuterContainer>
);

GuestPickerRowPicker.propTypes = {
  initialValue: PropTypes.number.isRequired,
};

const DivOuterContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
`;

const DivInnerContainer = styled.div`
  display: table;
  width: 120px;
`;

export default GuestPickerRowPicker;
