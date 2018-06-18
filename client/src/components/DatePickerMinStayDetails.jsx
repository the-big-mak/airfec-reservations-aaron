import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

const DatePickerMinStayDetails = ({ minNightStay }) => (
  <DivOuterContainer>
    <SmallContainer>
      <div>{minNightStay ? `${minNightStay} night minimum stay.` : 'Minimum stay varies'}</div>
      <div>Updated today</div>
    </SmallContainer>
  </DivOuterContainer>
);

function mapStateToProps(reduxState) {
  return {
    minNightStay: reduxState.minNightStay,
  };
}

DatePickerMinStayDetails.propTypes = {
  minNightStay: PropTypes.number.isRequired,
};

const DivOuterContainer = styled.div`
  bottom: 0px;
  padding: 0px 24px 24px;
`;

const SmallContainer = styled.small`
  color: #484848;
  font: 12px 600 Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
  line-height: 16px;
  letter-spacing: normal;
  margin: 0px;
  padding-top: 0px;
  padding-bottom: 0px;
  word-wrap: break-word;
`;

export default connect(mapStateToProps)(DatePickerMinStayDetails);
