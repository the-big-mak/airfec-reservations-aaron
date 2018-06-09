import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GuestPickerRowPickerMinus from './GuestPickerRowPickerMinus';
import GuestPickerRowPickerNumber from './GuestPickerRowPickerNumber';
import GuestPickerRowPickerPlus from './GuestPickerRowPickerPlus';

const GuestPickerRowPicker = ({
  value, handleAddGuests, handleMinusGuests,
  label, totalGuests, maxGuests,
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
        value={value}
        totalGuests={totalGuests}
        maxGuests={maxGuests}
      />
    </DivInnerContainer>
  </DivOuterContainer>
);

GuestPickerRowPicker.propTypes = {
  value: PropTypes.number.isRequired,
  handleAddGuests: PropTypes.func.isRequired,
  handleMinusGuests: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  totalGuests: PropTypes.number.isRequired,
  maxGuests: PropTypes.number.isRequired,
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
