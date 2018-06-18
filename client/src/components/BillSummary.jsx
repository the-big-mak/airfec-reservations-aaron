import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import BillSummaryItem from './BillSummaryItem';

const BillSummary = ({
  billPricePerNight, cleaningFee, nights, serviceFee,
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

function mapStateToProps(reduxState) {
  return {
    billPricePerNight: reduxState.billPricePerNight,
    cleaningFee: reduxState.cleaningFee,
    nights: reduxState.nights,
    serviceFee: reduxState.serviceFee,
  };
}

BillSummary.propTypes = {
  billPricePerNight: PropTypes.number.isRequired,
  cleaningFee: PropTypes.number.isRequired,
  nights: PropTypes.number.isRequired,
  serviceFee: PropTypes.number.isRequired,
};

const DivOuterContainer = styled.div`
  margin-bottom: 8px;
`;

export default connect(mapStateToProps)(BillSummary);
