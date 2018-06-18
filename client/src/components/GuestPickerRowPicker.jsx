import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GuestPickerRowPickerMinus from './GuestPickerRowPickerMinus';
import GuestPickerRowPickerNumber from './GuestPickerRowPickerNumber';
import GuestPickerRowPickerPlus from './GuestPickerRowPickerPlus';

const GuestPickerRowPicker = ({
  handleAddGuests, handleMinusGuests, label, totalGuests, value,
}) => (
  <DivOuterContainer>
    <DivInnerContainer>
      <GuestPickerRowPickerMinus
        handleChangeGuests={handleMinusGuests}
        label={label}
        value={value}
      />
      <GuestPickerRowPickerNumber value={value} />
      <GuestPickerRowPickerPlus
        handleChangeGuests={handleAddGuests}
        label={label}
        totalGuests={totalGuests}
        value={value}
      />
    </DivInnerContainer>
  </DivOuterContainer>
);

GuestPickerRowPicker.propTypes = {
  handleAddGuests: PropTypes.func.isRequired,
  handleMinusGuests: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  totalGuests: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
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
