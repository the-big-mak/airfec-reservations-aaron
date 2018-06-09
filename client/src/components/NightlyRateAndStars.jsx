import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NightlyRate from './NightlyRate';
import Stars from './Stars';

const NightlyRateAndStars = ({ avgNightlyRate, stars, totRatings }) => (
  <div>
    <NightlyRate avgNightlyRate={avgNightlyRate} />
    <Stars stars={stars} totRatings={totRatings} />
    <DivBottomSeparator />
  </div>
);

NightlyRateAndStars.propTypes = {
  avgNightlyRate: PropTypes.number.isRequired,
  stars: PropTypes.number.isRequired,
  totRatings: PropTypes.number.isRequired,
};

const DivBottomSeparator = styled.div`
  border-bottom: 1px solid #DBDBDB;
  margin: 16px 0;
`;

export default NightlyRateAndStars;
