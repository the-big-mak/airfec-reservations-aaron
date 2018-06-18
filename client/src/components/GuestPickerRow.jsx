import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GuestPickerRowLabel from './GuestPickerRowLabel';
import GuestPickerRowPicker from './GuestPickerRowPicker';

const GuestPickerRow = ({
  handleAddGuests, handleMinusGuests, label,
  secondaryLabel, totalGuests, value,
}) => (
  <DivOuterContainer secondaryLabel={secondaryLabel}>
    <DivInnerContainer>
      <DivTableContainer>
        <GuestPickerRowLabel
          label={label}
          secondaryLabel={secondaryLabel}
        />
        <GuestPickerRowPicker
          handleAddGuests={handleAddGuests}
          handleMinusGuests={handleMinusGuests}
          label={label}
          totalGuests={totalGuests}
          value={value}
        />
      </DivTableContainer>
    </DivInnerContainer>
  </DivOuterContainer>
);

GuestPickerRow.propTypes = {
  handleAddGuests: PropTypes.func.isRequired,
  handleMinusGuests: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  secondaryLabel: PropTypes.string.isRequired,
  totalGuests: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
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
