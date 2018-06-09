import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DatePickerCalendarHeaderDayOfWkItem = ({ day }) => (
  <ListOuterContainer>
    <Small>{day}</Small>
  </ListOuterContainer>
);

DatePickerCalendarHeaderDayOfWkItem.propTypes = {
  day: PropTypes.string.isRequired,
};

const ListOuterContainer = styled.li`
  display: inline-block;
  text-align: center;
  width: 39px;
`;

const Small = styled.small`
  font-size: 0.85em;
  font-weight: 600;
`;

export default DatePickerCalendarHeaderDayOfWkItem;
