import React from 'react';
import styled from 'styled-components';

const DatePickerInputArrowRight = () => (
  <DivOuterContainer>
    <SVGArrowRight viewBox="0 0 24 24" focusable="false">
      <path
        d="m0 12.5a.5.5 0 0 0 .5.5h21.79l-6.15 6.15a.5.5 0 1 0 .71.71l7-7v-.01a.5.5 0 0 0 .14-.35.5.5 0 0 0 -.14-.35v-.01l-7-7a .5.5 0 0 0 -.71.71l6.15 6.15h-21.79a.5.5 0 0 0 -.5.5z"
        fillRule="evenodd"
      />
    </SVGArrowRight>
  </DivOuterContainer>
);

const DivOuterContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const SVGArrowRight = styled.svg`
  display: block;
  fill: currentColor;
  height: 24px;
  overflow: hidden;
  width: 24px;
`;

export default DatePickerInputArrowRight;
