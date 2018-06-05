import React from 'react';
import styled from 'styled-components';

const NightlyRate = ({ avgNightlyRate }) => (
  <DivOuterContainer>
    <DivInnerContainer>
      <RateSpan>${Math.floor(avgNightlyRate / 100)}</RateSpan>
      <PerNightSpan>per night</PerNightSpan>
    </DivInnerContainer>
  </DivOuterContainer>
);

const DivOuterContainer = styled.div`
`;

const DivInnerContainer = styled.div`
  display: inline-block;
`;

const RateSpan = styled.span`
  color: rgb(72, 72, 72);
  display: inline;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-size: 19px;
  font-weight: 800;
  line-height: 26px;
  letter-spacing: normal;
  margin: 0px;
  padding-top: 0px;
  padding-bottom: 0px;
  word-wrap: break-word;
`;

const PerNightSpan = RateSpan.extend`
  color: #484848;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  padding-left 2px;
`;

export default NightlyRate;
