import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const GuestPickerRowLabel = ({ label, secondaryLabel }) => (
  <DivOuterContainer>
    <DivInnerContainer>
      <DivLabelContainer>
        <span>{label}</span>
      </DivLabelContainer>
      {secondaryLabel &&
      <DivSecondaryLabelContainer>
        {secondaryLabel}
      </DivSecondaryLabelContainer>}
    </DivInnerContainer>
  </DivOuterContainer>
);

GuestPickerRowLabel.propTypes = {
  label: PropTypes.string.isRequired,
  secondaryLabel: PropTypes.string.isRequired,
};

const DivOuterContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
  width: 100%;
`;

const DivInnerContainer = styled.div`
  display: table;
  margin-right: 12px;
`;

const DivLabelContainer = styled.div`
  color: rgb(72, 72, 72);
  font: 600 16px Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  line-height: 22px;
  padding-bottom: 0px;
  padding-top: 0px;
  margin: 0px;
  word-wrap: break-word;
`;

const DivSecondaryLabelContainer = DivLabelContainer.extend`
  color: #484848;
  font-size: 14px;
  font-weight: normal;
  letter-spacing: normal;
  line-height: 18px;
  padding-top: 4px;
`;

export default GuestPickerRowLabel;
