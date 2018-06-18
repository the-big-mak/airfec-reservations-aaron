import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Star from './Star';

const Stars = ({ stars, totRatings }) => {
  const roundedStars = Math.round(stars * 2) / 2;
  const halfStar = Number.isInteger(roundedStars) ? null : <Star type="half" />;
  return (
    <div>
      <Button>
        <span>
          <span>
            { [...Array(Math.floor(stars))].map(() => <Star key={Math.random()} type="whole" />) }
            {halfStar}
          </span>
          <SpanNumberOfRatings>
            {totRatings !== 0 ? totRatings : '...'}
          </SpanNumberOfRatings>
        </span>
      </Button>
    </div>
  );
};

function mapStateToProps(reduxState) {
  return {
    stars: reduxState.stars,
    totalRatings: reduxState.totalRatings,
  };
}

Stars.propTypes = {
  stars: PropTypes.number.isRequired,
  totRatings: PropTypes.number.isRequired,
};

const Button = styled.button`
  background: transparent;
  border: 0px;
  cursor: pointer;
  margin: 0px;
  outline: none;
  padding: 0px;
  text-align: left;
  user-select: auto;
  vertical-align: bottom;
  -webkit-user-select: auto;
  -moz-user-select: auto;
  -ms-user-select: auto;
`;

const SpanNumberOfRatings = styled.span`
  color: #484848;
  display: inline;
  font: 600 12px Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
  letter-spacing: normal;
  line-height: 16px;
  margin: 0px;
  padding: 2px;
  word-wrap: break-word;
`;

export default connect(mapStateToProps)(Stars);
