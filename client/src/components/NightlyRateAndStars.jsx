import React from 'react';
import styled from 'styled-components';
import NightlyRate from './NightlyRate';
import Stars from './Stars';

const NightlyRateAndStars = ({ avgNightlyRate, stars, totRatings }) => (
  <DivOuterContainer>
    <NightlyRate avgNightlyRate={avgNightlyRate}/>
    <Stars stars={stars} totRatings={totRatings}/>
    <DivBottomSeparator />
  </DivOuterContainer>
);

const DivOuterContainer = styled.div`

`;

const DivBottomSeparator = styled.div`
  border-bottom: 1px solid #DBDBDB;
  margin: 16px 0;
`;

export default NightlyRateAndStars;
