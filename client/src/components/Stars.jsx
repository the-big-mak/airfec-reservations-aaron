import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Star from './Star';

const Stars = ({ stars, totRatings }) => {
  const roundedStars = Math.round(stars * 2) / 2;
  const halfStar = Number.isInteger(roundedStars) ? null : <Star type="half" />;
  return (
    <DivContainer>
      <Button>
        <span>
          <SpanStar>
            { [...Array(Math.floor(stars))].map(() => <Star key={Math.random()} type="whole" />) }
            {halfStar}
          </SpanStar>
          <SpanNumberOfRatings>
            {totRatings}
          </SpanNumberOfRatings>
        </span>
      </Button>
    </DivContainer>
  );
};

Stars.propTypes = {
  stars: PropTypes.number.isRequired,
  totRatings: PropTypes.number.isRequired,
};

const DivContainer = styled.div`

`;

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

const SpanStar = styled.span`

`;

const SpanNumberOfRatings = styled.span`
  color: #484848;
  display: inline;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: normal;
  line-height: 16px;
  margin: 0px;
  padding: 2px;
  word-wrap: break-word;
`;

export default Stars;
