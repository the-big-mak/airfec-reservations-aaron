import React from 'react';
import styled from 'styled-components';
import NightlyRate from './NightlyRate';
import Stars from './Stars';

const NightlyRateAndStars = () => (
  <div>
    <NightlyRate />
    <Stars />
    <DivBottomSeparator />
  </div>
);

const DivBottomSeparator = styled.div`
  border-bottom: 1px solid #DBDBDB;
  margin: 16px 0;
`;

export default NightlyRateAndStars;
