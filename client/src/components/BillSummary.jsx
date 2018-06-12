import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BillSummaryItem from './BillSummaryItem';

const BillSummary = ({
  nights, billPricePerNight, serviceFee, cleaningFee,
}) => {
  const totalPrice = ((billPricePerNight / 100) * nights) + (cleaningFee / 100)
    + (serviceFee / 100);
  const items = [['PerNight', billPricePerNight], ['Cleaning fee', cleaningFee],
    ['Service fee', serviceFee], ['Total', totalPrice]];
  return (
    <DivOuterContainer>
      {items.map(item => (
        <BillSummaryItem type={item[0]} price={item[1]} nights={nights} key={item[1]} />))
      }
    </DivOuterContainer>
  );
};

BillSummary.propTypes = {
  nights: PropTypes.number.isRequired,
  billPricePerNight: PropTypes.number.isRequired,
  serviceFee: PropTypes.number.isRequired,
  cleaningFee: PropTypes.number.isRequired,
};

const DivOuterContainer = styled.div`
  margin-bottom: 8px;
`;

export default BillSummary;
