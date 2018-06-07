import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NightlyRate from './NightlyRate';
import Stars from './Stars';

const NightlyRateAndStars = ({ avgNightlyRate, stars, totRatings }) => (
  <DivOuterContainer>
    <NightlyRate avgNightlyRate={avgNightlyRate} />
    <Stars stars={stars} totRatings={totRatings} />
    <DivBottomSeparator />
  </DivOuterContainer>
);

NightlyRateAndStars.propTypes = {
  avgNightlyRate: PropTypes.number.isRequired,
  stars: PropTypes.number.isRequired,
  totRatings: PropTypes.number.isRequired,
};

const DivOuterContainer = styled.div`

`;

const DivBottomSeparator = styled.div`
  border-bottom: 1px solid #DBDBDB;
  margin: 16px 0;
`;

export default NightlyRateAndStars;
