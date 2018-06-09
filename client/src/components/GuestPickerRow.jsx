import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GuestPickerRowLabel from './GuestPickerRowLabel';
import GuestPickerRowPicker from './GuestPickerRowPicker';

const GuestPickerRow = ({
  label, value, secondaryLabel, handleAddGuests, handleMinusGuests, totalGuests, maxGuests,
}) => (
  <DivOuterContainer secondaryLabel={secondaryLabel}>
    <DivInnerContainer>
      <DivTableContainer>
        <GuestPickerRowLabel
          label={label}
          secondaryLabel={secondaryLabel}
        />
        <GuestPickerRowPicker
          value={value}
          label={label}
          handleAddGuests={handleAddGuests}
          handleMinusGuests={handleMinusGuests}
          totalGuests={totalGuests}
          maxGuests={maxGuests}
        />
      </DivTableContainer>
    </DivInnerContainer>
  </DivOuterContainer>
);

GuestPickerRow.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  secondaryLabel: PropTypes.string.isRequired,
  handleAddGuests: PropTypes.func.isRequired,
  handleMinusGuests: PropTypes.func.isRequired,
  totalGuests: PropTypes.number.isRequired,
  maxGuests: PropTypes.number.isRequired,
};

const DivOuterContainer = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  ${props => props.secondaryLabel && `
  margin-top: 24px;
  margin-bottom: 24px;
  `}
`;

const DivInnerContainer = styled.div`
  padding-top: 0px;  
  padding-bottom: 0px;
  border-bottom: 0px;
`;

const DivTableContainer = styled.div`
  display: table;
  width: 100%;
`;

export default GuestPickerRow;
