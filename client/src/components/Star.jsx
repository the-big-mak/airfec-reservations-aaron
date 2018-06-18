import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Star = ({ type }) => {
  const starPaths = {
    whole: 'M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z',
    half: 'M510.2 23.3l1 767.3-226.1 172.2c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L58 447.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7.1-23.1 28.1-39.1 52.1-39.1z',
  };
  const createStar = path => (
    <VectorStar viewBox="0 0 1000 1000" aria-hidden="true" focusable="false" role="presentation">
      <path d={path} />
    </VectorStar>
  );
  if (type === 'whole') {
    return (
      <SpanStar type={type}>{createStar(starPaths.whole)}</SpanStar>
    );
  }
  return (
    <SpanStar type={type}>
      <SpanHalfStar fill="clearBkgrd">{createStar(starPaths.whole)}</SpanHalfStar>
      <SpanHalfStar>{createStar(starPaths.half)}</SpanHalfStar>
    </SpanStar>
  );
};

Star.propTypes = {
  type: PropTypes.string.isRequired,
};

const SpanStar = styled.span`
  color: #008489;
  display: inline-block;
  font-size: 9px;
  height: 10px;
  margin-right: 1px;
  width: 9px;
  ${props => props.type === 'half' && 'position: relative;'}
`;

const SpanHalfStar = styled.span`
  left: 0px;
  position: absolute;
  ${props => props.fill && 'color: #D8D8D8;'}
`;

const VectorStar = styled.svg`
  display: block; 
  fill: currentcolor;
  height: 1em;
  width: 1em;
`;

SpanStar.displayName = 'SpanStar';
SpanHalfStar.displayName = 'SpanHalfStar';

export default Star;
