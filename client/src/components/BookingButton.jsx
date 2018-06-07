import React from 'react';
import styled from 'styled-components';

const BookingButton = () => (
  <Button>
    <SpanButtonText>
      <DivButtonText>Request to Book</DivButtonText>
    </SpanButtonText>
  </Button>
);

const Button = styled.button`
  background: #FF5A5F;
  border-color: transparent;
  border-radius: 4px;
  border-style: solid;
  border-width: 2px;
  box-shadow: none;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
  font-size: 16px;
  font-weight: 800;
  line-height: 21px;
  margin-top: 24px;
  min-width: 78px;
  padding: 12px 24px;
  position: relative;
  text-align: center;
  text-decoration: none;
  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;
  -webkit-transition-property: background, border-color, color;
  -moz-transition-property: background, border-color, color;
  transition-property: background, border-color, color;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
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

export default BookingButton;
