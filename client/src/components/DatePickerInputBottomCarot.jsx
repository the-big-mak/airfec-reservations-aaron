import React from 'react';
import styled from 'styled-components';

const DatePickerInputBottomCarot = () => (
  <SVGOuterContainer role="presentation" focusable="false">
    <path d="M 0 10 L 20 10 L 10 0 Z" fill="rgb(255, 255, 255)" />
    <path d="M 0 10 L 10 0 L 20 10" stroke="rgb(219, 219, 219)" fill="transparent" />
  </SVGOuterContainer>
);

const SVGOuterContainer = styled.svg`
  position: absolute;
  height: 10px;
  left: 22px;
  overflow: hidden;
  top: 40px;
  width: 20px;
  z-index: 2;
`;

export default DatePickerInputBottomCarot;
