import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NightlyRate = ({ avgNightlyRate }) => (
  <div>
    <DivInnerContainer avgNightlyRate={avgNightlyRate}>
      <RateSpan>${Math.floor(avgNightlyRate / 100)}</RateSpan>
      <PerNightSpan>per night</PerNightSpan>
    </DivInnerContainer>
  </div>
);

NightlyRate.propTypes = {
  avgNightlyRate: PropTypes.number.isRequired,
};

const DivInnerContainer = styled.div`
  display: inline-block;
`;

const RateSpan = styled.span`
  color: rgb(72, 72, 72);
  display: inline;
  font: 800 19px Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  line-height: 26px;
  letter-spacing: normal;
  margin: 0px;
  padding: 2px;
  word-wrap: break-word;
`;

const PerNightSpan = RateSpan.extend`
  color: #484848;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  padding-left 2px;
`;

RateSpan.displayName = 'RateSpan';
PerNightSpan.displayName = 'PerNightSpan';

export default NightlyRate;
