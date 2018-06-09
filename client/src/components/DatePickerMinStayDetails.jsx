import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DatePickerMinStayDetails = ({ minNightStay }) => (
  <DivOuterContainer>
    <SmallContainer>
      <div>{minNightStay ? `${minNightStay} night minimum stay.` : 'Minimum stay varies'}</div>
      <div>Updated today</div>
    </SmallContainer>
  </DivOuterContainer>
);

DatePickerMinStayDetails.propTypes = {
  minNightStay: PropTypes.number.isRequired,
};

const DivOuterContainer = styled.div`
  bottom: 0px;
  padding: 0px 24px 24px;
`;

const SmallContainer = styled.small`
  color: #484848;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: normal;
  margin: 0px;
  padding-top: 0px;
  padding-bottom: 0px;
  word-wrap: break-word;
`;

export default DatePickerMinStayDetails;
