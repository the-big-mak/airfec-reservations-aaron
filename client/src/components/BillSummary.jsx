import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BillSummaryItem from './BillSummaryItem';

const BillSummary = ({
  nights, guests, billPricePerNight, serviceFee, cleaningFee
}) => (
  <DivOuterContainer>
    <BillSummaryItem type="PerNight" price={billPricePerNight} nights={nights} />
    <BillSummaryItem type="Cleaning fee" price={cleaningFee} />
    <BillSummaryItem type="Service fee" price={serviceFee} />
    <BillSummaryItem type="Total" price={((billPricePerNight / 100) * nights) + (cleaningFee / 100) + (serviceFee / 100)} />
  </DivOuterContainer>
);

BillSummary.propTypes = {
  nights: PropTypes.number.isRequired,
  guests: PropTypes.number.isRequired,
  billPricePerNight: PropTypes.number.isRequired,
  serviceFee: PropTypes.number.isRequired,
  cleaningFee: PropTypes.number.isRequired,
};

const DivOuterContainer = styled.div`
  margin-bottom: 8px;
`;

export default BillSummary;
