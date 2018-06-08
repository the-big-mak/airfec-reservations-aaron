import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DatePickerCalendarContainer = ({ availNights }) => (
  <DivOuterContainer>
    Placeholder Text
  </DivOuterContainer>
);

DatePickerCalendarContainer.propTypes = {
  availNights: PropTypes.arrayOf(PropTypes.object).isRequired,
};
const DivOuterContainer = styled.div`

`;

export default DatePickerCalendarContainer;
