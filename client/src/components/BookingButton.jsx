import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

const BookingButton = ({ isBillVisible }) => (
  <Button>
    <SpanButtonText>
      <DivButtonText>{isBillVisible ? 'Book' : 'Request to Book'}</DivButtonText>
    </SpanButtonText>
  </Button>
);

function mapStateToProps(reduxState) {
  return {
    isBillVisible: reduxState.isBillVisible,
  };
}

BookingButton.propTypes = {
  isBillVisible: PropTypes.bool.isRequired,
};

const Button = styled.button`
  background: #FF5A5F;
  border: 2px solid transparent;
  border-radius: 4px;
  box-shadow: none;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font: 800 16px Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
  line-height: 21px;
  margin-top: 24px;
  min-width: 78px;
  padding: 12px 24px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: background, border-color, color 0.2s ease-out;
  width: 100%;
`;

const SpanButtonText = styled.span`
  padding-top: 0px;
  padding-bottom: 0px;
`;

const DivButtonText = styled.div`
  color: #ffffff;
  font-weight: 800;
  margin: 0px;
  line-height: 22px;
  word-wrap: break-word;
`;

export default connect(mapStateToProps)(BookingButton);
