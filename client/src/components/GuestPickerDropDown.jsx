import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GuestPickerRow from './GuestPickerRow';
import GuestPickerMaxDetails from './GuestPickerMaxDetails';

const GuestPickerDropDown = ({
  adultsNum, childrenNum, infantsNum,
  handleAddGuests, handleMinusGuests, totalGuests,
}) => (
  <DivOuterContainer>
    <DivInnerContainer>
      { [['Adults', '', adultsNum],
        ['Children', 'Ages 2 - 12', childrenNum],
        ['Infants', 'Under 2', infantsNum]]
        .map(row => (
          <GuestPickerRow
            handleAddGuests={handleAddGuests}
            handleMinusGuests={handleMinusGuests}
            key={`${row[0]} row key`}
            label={row[0]}
            secondaryLabel={row[1]}
            totalGuests={totalGuests}
            value={row[2]}
          />))
      }
      <GuestPickerMaxDetails />
    </DivInnerContainer>
  </DivOuterContainer>
);

GuestPickerDropDown.propTypes = {
  adultsNum: PropTypes.number.isRequired,
  childrenNum: PropTypes.number.isRequired,
  handleAddGuests: PropTypes.func.isRequired,
  handleMinusGuests: PropTypes.func.isRequired,
  infantsNum: PropTypes.number.isRequired,
  totalGuests: PropTypes.number.isRequired,
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
