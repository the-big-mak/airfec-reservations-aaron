import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BillSummaryItem = ({ type, price, nights }) => (
  <div>
    <DivTextOuterContainer>
      <DivItemContainer>
        <SpanLabel type={type}>{type === 'PerNight' ? `$${price / 100} x ${nights} nights` : type}</SpanLabel>
      </DivItemContainer>
      <DivSubTotalContainer>
        <SpanSubTotal type={type}>${(type === 'Total' ? price : (price / 100) * (nights || 1)).toFixed(2)} </SpanSubTotal>
      </DivSubTotalContainer>
    </DivTextOuterContainer>
    <DivBorderContainer>
      <DivBorder />
    </DivBorderContainer>
  </div>
);

BillSummaryItem.propTypes = {
  type: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  nights: PropTypes.number.isRequired,
};

const DivTextOuterContainer = styled.div`
  display: table;
  width: 100%;
`;

const DivItemContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
  width: 100%;
`;

const DivSubTotalContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
`;

const SpanLabel = styled.span`
  color: #484848;
  display: inline;
  font: normal 14px Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
  letter-spacing: normal;
  line-height: 18px;
  margin: 0px;
  padding-bottom: 0px;
  padding-top: 0px;
  word-wrap: break-word;
  ${props => (props.type === 'Total' ? 'color: rgb(72, 72, 72); font-weight: 600;' : '')}
`;

const SpanSubTotal = SpanLabel.extend`
  white-space: nowrap;
  ${props => (props.type === 'Total' ? 'color: rgb(72, 72, 72); font-weight: 600;' : '')}
`;

const DivBorderContainer = styled.div`
  margin-top: 8px;
  margin-bottom: 8px;
`;

const DivBorder = styled.div`
  border-bottom: 1px solid #DBDBDB;
`;

export default BillSummaryItem;
