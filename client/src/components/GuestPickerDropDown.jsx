import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GuestPickerRow from './GuestPickerRow';
import GuestPickerMaxDetails from './GuestPickerMaxDetails';

const GuestPickerDropDown = ({ maxGuests }) => (
  <DivOuterContainer>
    <DivInnerContainer>
      <GuestPickerRow
        label="Adults"
        initialValue={1}
      />
      <GuestPickerRow
        label="Children"
        secondaryLabel="Ages 2 - 12"
        initialValue={0}
      />
      <GuestPickerRow
        label="Infants"
        secondaryLabel="Under 2"
        initialValue={0}
      />
      <GuestPickerMaxDetails maxGuests={maxGuests} />
    </DivInnerContainer>
  </DivOuterContainer>
);

GuestPickerDropDown.propTypes = {
  maxGuests: PropTypes.number.isRequired,
};

const DivOuterContainer = styled.div`
  background: rgb(255, 255, 255);
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 6px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px;
  left: 0px;
  margin-bottom: 16px;
  min-width: 280px;
  padding: 0px 16px;
  position: absolute;
  text-align: left;
  width: 100%;
  z-index: 2;
`;

const DivInnerContainer = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
`;

export default GuestPickerDropDown;
